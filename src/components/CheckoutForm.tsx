import {
  ButtonWrapper,
  Container,
  Form,
  TermsWrapper,
} from "./Styling/CheckoutFormStyles";
import {
  Button,
  Desc,
  FormWrapper,
  Input,
  Title,
} from "./Styling/SharedStyledElementsStyles";

const CheckoutForm = () => {
  return (
    <Container>
      <FormWrapper margin="15px 0px 15px 0px">
        <Title>Checkout Form</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Email Address" />
          <Input placeholder="City" />
          <Input placeholder="Neighbourhood" />
          <Input placeholder="Street" />
          <Input placeholder="House Address" />
          <TermsWrapper>
            <Desc>
              We are currently only offering cash on delivery. Product to be
              delivered in 4-5 working days
            </Desc>
          </TermsWrapper>
          <ButtonWrapper>
            <Button
              width="100%"
              bgcolor="#191970"
              fontcolor="white"
              bordercolor="white"
            >
              PLACE ORDER
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default CheckoutForm;
