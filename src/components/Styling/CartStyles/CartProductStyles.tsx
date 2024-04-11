import styled from "styled-components";
// This wraps around each product
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 5px;
  @media only screen and (max-width: 480px) {
    width: 100vw;
  }
`;
// This has the Product Image and the Product Details
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
// These are within the the Product Details element
export const Image = styled.img`
  width: 200px;
`;
// These are the details of the product besides the image
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
// This is a seprate element for prdice besides the prdoduct detail element
export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// This wraps around the Quantity of items section
export const QuantityWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;
// Special styling for the price text
export const Pricetext = styled.h1`
  color: red;
  font-style: italic;
  font-weight: 500;
  margin-top: 7px;
  font-size: 20px;
`;


