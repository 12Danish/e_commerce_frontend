import { useEffect, useState } from "react";
import { cartItems } from "../../../assets/data";
import {
  Container,
  Info,
  LowerBody,
  PriceValue,
  Summary,
  SummaryInfoText,
  SummaryPerLine,
  TitleWrapper,
  TopOptions,
} from "../../Styling/CartStyles/CartBodyStyles";
import { Button, Title } from "../../Styling/SharedStyledElementsStyles";
import CartProduct from "./CartProduct";

const CartBody = () => {
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  const [taxedTotalPrice, setTaxedTotalPrice] = useState(0);
  const deliveryCharges = 500;

  const calculateTaxValue = () => {
    let totalPrice = calculateTotalPrice();
    return 0.15 * totalPrice;
  };

  const calculateTotalPrice = () => {
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.totalprice,
      0
    );
    return totalPrice;
  };

  const calculatePrice = () => {
    let taxedTotalPrice = calculateTotalPrice() + calculateTaxValue();
    if (taxedTotalPrice >= 10000) {
      setDeliveryCheck(false);
      setTaxedTotalPrice(taxedTotalPrice);
    } else {
      setDeliveryCheck(true);
      taxedTotalPrice = taxedTotalPrice + deliveryCharges;
      setTaxedTotalPrice(taxedTotalPrice);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, []);

  return (
    <Container>
      <TopOptions>
        <Button
          width="auto"
          bgcolor="#e2eef3"
          fontcolor="#113869"
          bordercolor="#113869"
        >
          Back
        </Button>
        <TitleWrapper>
          <Title> Cart</Title>
        </TitleWrapper>
      </TopOptions>

      {cartItems.length > 0 && (
        <LowerBody>
          <Info>
            {cartItems.map((item) => (
              <CartProduct key={item.id} item={item} />
            ))}
          </Info>
          <Summary>
            <Title>Order Summary</Title>
            <SummaryPerLine>
              <SummaryInfoText>Total Price before tax :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {calculateTotalPrice()}RS
              </PriceValue>
            </SummaryPerLine>
            <SummaryPerLine>
              <SummaryInfoText>Tax Value(15%) :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {calculateTaxValue()}RS
              </PriceValue>
            </SummaryPerLine>
            <SummaryPerLine>
              <SummaryInfoText>Delivery Fee :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {deliveryCheck ? "500Rs" : "Free Delivery"}
              </PriceValue>
            </SummaryPerLine>
            <SummaryPerLine>
              <SummaryInfoText>Net Price :</SummaryInfoText>
            </SummaryPerLine>
            <SummaryPerLine>
              <PriceValue color="red" fontSize="20px">
                {taxedTotalPrice}RS
              </PriceValue>
            </SummaryPerLine>
            <SummaryPerLine>
              <Button
                width="100%"
                bgcolor="#113869"
                fontcolor="white"
                bordercolor="white"
              >
                Proceed To Checkout
              </Button>
            </SummaryPerLine>
          </Summary>
        </LowerBody>
      )}
      {cartItems.length == 0 && (
        <LowerBody>
          <Title>Your Cart Is Empty</Title>
        </LowerBody>
      )}
    </Container>
  );
};

export default CartBody;
