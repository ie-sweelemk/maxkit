import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "features/store";
import { authLogin } from "../model";
import { Button, Content, Input, Logo, Typography } from "shared/ui";
import { FormField } from "shared/ui/styled-components";
import {
  SigninFormContainer,
  LogoContainer,
  TitleContainer,
  NewUserContainer,
} from "./signin-form.styles";
import { getProfile } from "shared/api/model/profile";
import { routes } from "shared/constants";

const { Title, Text, Link } = Typography;

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

type formState = {
  email: string;
  password: string;
};

const formInitialValues: formState = {
  email: "",
  password: "",
};

const SigninForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleSubmit = async (e: formState) => {
    setLoading(true);
    const user = {
      password: e.password,
      email: e.email,
    };

    dispatch(authLogin(user))
      .unwrap()
      .then((response) => {
        response && dispatch(getProfile(response.id)).unwrap().finally(() => {
          navigate(routes.dashboard);
        })
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
      <SigninFormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <TitleContainer>
          <Title className="title">
            Welcome back,
            <br /> to Max Kit
          </Title>
          <NewUserContainer>
            <Text className="subtitle">
              New User? <Link to={routes.register}>Create an account</Link>
            </Text>
          </NewUserContainer>
        </TitleContainer>
        <Formik
          initialValues={formInitialValues}
          validationSchema={SignInSchema}
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
                <Button
                  label="Login"
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
      </SigninFormContainer>
    </Content>
  );
};

export default SigninForm;
