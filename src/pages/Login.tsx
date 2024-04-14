import SwitchUser from "../components/Rendering/SwitchUser";
import UserType, { UserContext } from "../components/Rendering/UserType";
import { Container } from "../components/Styling/FormStyles/GeneralFormStyles";
import {
  Button,
  FormWrapper,
  Input,
  Title,
  blue_color,
  purple_color,
} from "../components/Styling/SharedStyledElementsStyles";
// Styling for the form

import {
  Form,
  Link,
  LinkWrapper,
} from "../components/Styling/FormStyles/LoginFormStyles";

const Login = () => {
  const { userType, setUserType } = UserType();
  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      <Container userType={userType}>
        <FormWrapper top={100} margin="0px">
          <SwitchUser position={{ top: 20, right: 10 }} />
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <LinkWrapper>
              <Link>Forgot Password?</Link>
              <Link>Create an Account</Link>
            </LinkWrapper>
            {userType == "buyer" ? (
              <Button
                width="auto"
                bgcolor={blue_color}
                fontcolor="white"
                bordercolor="white"
              >
                LOG IN
              </Button>
            ) : (
              <Button
                width="auto"
                bgcolor={purple_color}
                fontcolor="black"
                bordercolor="black"
              >
                LOG IN
              </Button>
            )}{" "}
          </Form>
        </FormWrapper>
      </Container>
    </UserContext.Provider>
  );
};

export default Login;
