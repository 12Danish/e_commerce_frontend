import {
  blue_color,
  Button,
  Desc,
  FormWrapper,
  Input,
  purple_color,
  Title,
} from "../components/Styling/SharedStyledElementsStyles";

import {
  ButtonWrapper,
  Container,
  Form,
  TermsWrapper,
} from "../components/Styling/FormStyles/GeneralFormStyles";
import UserType, { UserContext } from "../components/Rendering/UserType";
import SwitchUser from "../components/Rendering/SwitchUser";

const Register = () => {
  const { userType, setUserType } = UserType();
  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      <Container userType={userType}>
        <FormWrapper top={100} margin="0px">
        <SwitchUser position={{ top: 20, right: 10 }} />
          <Title>Create An Account</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <Input placeholder=" Confirm  Password" />
            <TermsWrapper>
              <Desc>
                By creating an account. I consent to all the terms and condtions
                of the organization
              </Desc>
            </TermsWrapper>
            <ButtonWrapper>
            {userType == "buyer" ? (
              <Button
                width="auto"
                bgcolor={blue_color}
                fontcolor="white"
                bordercolor="white"
              >
                CREATE ACCOUNT
              </Button>
            ) : (
              <Button
                width="auto"
                bgcolor={purple_color}
                fontcolor="black"
                bordercolor="black"
              >
                CREATE ACCOUNT
              </Button>
            )}{" "}
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </UserContext.Provider>
  );
};

export default Register;
