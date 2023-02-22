import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Content, Input, Logo, Typography } from "shared/ui";
import {
  SignupFormContainer,
  LogoContainer,
  TitleContainer,
  NewUserContainer,
} from "./signup-form.styles";
import { FormField } from "shared/ui/styled-components";
import { signUp } from "../api";
import { authRegister } from "../model";
import { useAppDispatch } from "features/store";
import { useNavigate } from "react-router";
import { useState } from "react";
import { getProfile } from "shared/api/model/profile";

const { Text, Title, Link } = Typography;

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required"),
  passwordConfirmation: Yup.string().equals([
    Yup.ref("password"),
    "Password don't match",
  ]),
});

type formState = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const formInitialValues: formState = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const SignupForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleSubmit = async (e: formState) => {
    setLoading(true);
    const user = {
      email: e.email,
      password: e.password,
    };

    dispatch(authRegister(user))
      .unwrap()
      .then((response) => {
        navigate("/");
        response && dispatch(getProfile(response.id))
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Content withShadow space="xxl">
      <SignupFormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <TitleContainer>
          <Title className="title">
            Create an account
          </Title>
          <NewUserContainer>
            <Text className="subtitle">
              Already have an account? <Link to="/login">Login</Link>
            </Text>
          </NewUserContainer>
        </TitleContainer>
        <Formik
          initialValues={formInitialValues}
          validationSchema={SignUpSchema}
          onSubmit={onHandleSubmit}
        >
          {({ handleSubmit, errors, handleChange }) => (
            <>
              <FormField>
                <Input
                  label="Email"
                  placeholder="Input your registered email"
                  onChange={handleChange("email")}
                  state={errors.email ? "error" : "default"}
                />
              </FormField>
              <FormField>
                <Input
                  label="Password"
                  placeholder="Input your account password"
                  type="password"
                  onChange={handleChange("password")}
                  state={errors.password ? "error" : "default"}
                />
              </FormField>
              <FormField>
                <Input
                  label="Confirm Password"
                  placeholder="Confirm your account password"
                  type="password"
                  onChange={handleChange("passwordConfirmation")}
                  state={errors.passwordConfirmation ? "error" : "default"}
                />
              </FormField>
              <FormField>
                <Button
                  label="Create account"
                  variant="primary"
                  block
                  onClick={() => handleSubmit()}
                  loading={loading}
                  disabled={loading}
                />
              </FormField>
            </>
          )}
        </Formik>
      </SignupFormContainer>
    </Content>
  );
};

export default SignupForm;
