import { useEffect, useState } from "react";
import { cartItems } from "../../assets/data";
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
} from "../Styling/CartBodyStyles";
import { Button, Title } from "../Styling/SharedStyledElementsStyles";
import CartProduct from "./CartProduct";

// This is the main component being returned
const CartBody = () => {
  // This will store the condtion whther the deliver price is being taken or not. True => Being taken
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  // This is the total final value
  const [taxedTotalPrice, setTaxedTotalPrice] = useState(0);
  // Setting the value for delivery charges
  const deliveryCharges = 500;

  // Calculting the 15 percent tax value
  const calculateTaxValue = () => {
    let totalPrice = calculateTotalPrice();
    return 0.15 * totalPrice;
  };
  // Calculating the total price of all the products in the cart
  const calculateTotalPrice = () => {
    // The reduce function goes over each entry of the array and sums the totalprice i.e the price * quantity for each product
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.totalprice,
      0 // The total is initialised with zero
    );
    return totalPrice;
  };
  useEffect(() => {
    // Adding the tax value to the total value of the products
    let taxedTotalPrice = calculateTotalPrice() + calculateTaxValue();
    // if the total value is greater than 10000 then setting the DeliveryCheck to false as delivery charges are not being added
    if (taxedTotalPrice >= 10000) {
      setDeliveryCheck(false);
      setTaxedTotalPrice(taxedTotalPrice);
    } else {
      // If the condition is false then applying delivery charges and returning
      setDeliveryCheck(true);
      taxedTotalPrice = taxedTotalPrice + deliveryCharges;
      setTaxedTotalPrice(taxedTotalPrice);
    }
  }, []);

  return (
    <Container>
      {/*Top options contain the two buttons  */}
      <TopOptions>
        <Button
          width="auto"
          bgcolor="#e2eef3"
          fontcolor="#191970"
          bordercolor="#191970"
        >
          Back
        </Button>
        <TitleWrapper>
          <Title> Cart</Title>
        </TitleWrapper>
      </TopOptions>

      {/*If the cart is non-empty then this is displayed */}
      {cartItems.length > 0 && (
        <LowerBody>
          <Info>
            {cartItems.map((item) => (
              <CartProduct key={item.id} item={item} />
            ))}
          </Info>
          <Summary>
            {/* This is the title  */}
            <Title>Order Summary</Title>

            {/*Total Price before any addition */}
            <SummaryPerLine>
              {/* Displaying the type of price  */}
              <SummaryInfoText>Total Price before tax :</SummaryInfoText>
              {/* Calling the function to display the price before any additions */}
              <PriceValue fontSize="20px" color="black">
                {calculateTotalPrice()}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Calculating the tax value */}
            <SummaryPerLine>
              <SummaryInfoText>Tax Value(15%) :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {calculateTaxValue()}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Calculating the delivery fee */}
            <SummaryPerLine>
              <SummaryInfoText>Delivery Fee :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {deliveryCheck ? "500Rs" : "Free Delivery"}
              </PriceValue>
            </SummaryPerLine>

            {/* Displaying the total checkout price */}
            <SummaryPerLine>
              <SummaryInfoText>Net Price :</SummaryInfoText>
            </SummaryPerLine>

            {/* Displaying the calculated checkout price */}
            <SummaryPerLine>
              <PriceValue color="red" fontSize="30px">
                {taxedTotalPrice}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Displaying the Checkout Button */}
            <SummaryPerLine>
              <Button
                width="100%"
                bgcolor="#191970"
                fontcolor="white"
                bordercolor="white"
              >
                Proceed To Checkout
              </Button>
            </SummaryPerLine>
          </Summary>
        </LowerBody>
      )}
      {/*If the cart is empty then this is displayed */}
      {cartItems.length == 0 && (
        <LowerBody>
          <Title>Your Cart Is Empty</Title>
        </LowerBody>
      )}
    </Container>
  );
};

export default CartBody;
