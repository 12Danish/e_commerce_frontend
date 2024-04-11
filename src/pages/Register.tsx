import {
  Button,
  Desc,
  FormWrapper,
  Input,
  Title,
} from "../components/Styling/SharedStyledElementsStyles";

import {
  ButtonWrapper,
  Container,
  Form,
  TermsWrapper,
} from "../components/Styling/FormStyles/GeneralFormStyles";

const Register = () => {
  return (
    <Container>
      <FormWrapper top={100} margin="0px">
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
            <Button
              width="100%"
              bgcolor="#113869"
              fontcolor="white"
              bordercolor="white"
            >
              CREATE ACCOUNT
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
