import { useAppDispatch, useStateSelector } from "features/store";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { supabase } from "shared/api";
import { UserProfile } from "shared/types";
import { Button, Input } from "shared/ui";
import { FormField } from "shared/ui/styled-components";
import { SettingsForm } from "../settings-forms.styles";
import { ProfilePhoto } from "./components";
import { ProfilePhotoRef } from "./components/profile-photo/profile-photo";
import { profileSelector } from "./model";
import { b64toBlob, removeEmptyValues } from "shared/lib";
import { getProfile } from "shared/api/model/profile";

type GeneralFormState = Omit<UserProfile, "email">;

const initialState = {
  id: "",
  name: "",
  picture: "",
  country: "",
  city: "",
  province: "",
  bio: "",
};

const GeneralForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const profilePhotoRef = useRef<ProfilePhotoRef>({} as ProfilePhotoRef);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [stateFromStore, setStateFromStore] =
    useState<GeneralFormState>(initialState);
  const [isFormUpdating, setFormUpdating] = useState<boolean>(false);
  const profileState = useStateSelector(profileSelector);

  const formik = useFormik<GeneralFormState>({
    initialValues: stateFromStore || initialState,
    onSubmit: (values) => {
      generalFormSubmit(values);
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (profileState) {
      setStateFromStore(profileState);
    }
  }, [profileState]);

  const generalFormSubmit = async (formValues: GeneralFormState) => {
    setFormUpdating(true);
    let pathToImage = "";

    try {
      if (profilePicture.length) {
        const block = formValues.picture!.split(";");
        const contentType = block[0].split(":")[1];
        const realData = block[1].split(",")[1];
        const blob = b64toBlob(realData, contentType);

        const picture = await supabase.storage
          .from("avatars")
          .upload(`photo_${crypto.randomUUID()}`, blob, {
            contentType: "image/jpg",
          });

        if (picture.error) {
          throw new Error(picture.error.message);
        }

        const publicPath = await supabase.storage
          .from("avatars")
          .getPublicUrl(picture.data?.path!);

        pathToImage = publicPath.data.publicUrl;
      }

      const updatedProfile = await supabase.from("profile").upsert({
        ...formValues,
        ...(profilePicture.length ? { picture: pathToImage } : {}),
      });

      if (updatedProfile.error) {
        throw new Error(updatedProfile.error.message);
      }
      dispatch(getProfile(formValues.id))
        .unwrap()
        .finally(() => {
          setProfilePicture("");
          profilePhotoRef.current.resetProfilePhoto();
          formik.resetForm();
        });
    } catch (error) {
      console.warn(error);
    } finally {
      setFormUpdating(false);
    }
  };

  return (
    <>
      <SettingsForm onSubmit={formik.handleSubmit}>
        <FormField>
          <ProfilePhoto
            profilePhotoRef={profilePhotoRef}
            picture={profilePicture || profileState.picture}
            onChange={(image) => {
              setProfilePicture(image ? image : profileState.picture!);
              formik.setFieldValue("picture", image ? image : profileState.picture!);
            }}
          />
        </FormField>
        <FormField>
          <Input
            name="name"
            label="Display name"
            value={formik.values.name || ""}
            onChange={(e) => {
              formik.setFieldValue("name", e.target.value);
            }}
            disabled={isFormUpdating}
          />
        </FormField>
        <FormField>
          <FormField>
            <Input
              name="country"
              label="Country"
              value={formik.values.country || ""}
              onChange={(e) => {
                formik.setFieldValue("country", e.target.value);
              }}
              disabled={isFormUpdating}
            />
          </FormField>
          <FormField>
            <Input
              name="city"
              label="City"
              value={formik.values.city || ""}
              onChange={(e) => {
                formik.setFieldValue("city", e.target.value);
              }}
              disabled={isFormUpdating}
            />
          </FormField>
          <FormField>
            <Input
              name="province"
              label="Province"
              value={formik.values.province || ""}
              onChange={(e) => {
                formik.setFieldValue("province", e.target.value);
              }}
              disabled={isFormUpdating}
            />
          </FormField>
        </FormField>
        <FormField>
          <Input
            name="bio"
            label="Bio"
            value={formik.values.bio || ""}
            onChange={(e) => {
              formik.setFieldValue("bio", e.target.value);
            }}
            disabled={isFormUpdating}
          />
        </FormField>
        <FormField>
          <Button
            label="Save"
            variant="primary"
            loading={isFormUpdating}
            disabled={isFormUpdating}
          />
        </FormField>
      </SettingsForm>
    </>
  );
};

export default GeneralForm;
