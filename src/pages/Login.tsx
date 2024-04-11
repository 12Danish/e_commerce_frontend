import styled from "styled-components";
import {
  Button,
  FormWrapper,
  Input,
  Title,
} from "../components/Styling/SharedStyledElementsStyles";

import { Container } from "../components/Styling/FormStyles/GeneralFormStyles";
// Styling for the form

import { LinkWrapper,Link,Form } from "../components/Styling/FormStyles/LoginFormStyles";
const Login = () => {
  return (
    <Container>
      <FormWrapper top={100} margin="0px">
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <LinkWrapper>
            <Link>Forgot Password?</Link>
            <Link>Create an Account</Link>
          </LinkWrapper>

          <Button
            width="auto"
            bgcolor="#113869"
            fontcolor="white"
            bordercolor="white"
          >
            LOG IN
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
