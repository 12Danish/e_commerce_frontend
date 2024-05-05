import styled from "styled-components";

export const ResultWrapper = styled.div`
  width: 100%;
  max-height: 60vh;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #e8e8e9;
  position: absolute;
  top: 100%; /* Positions the results menu below the input field */
  left: 0;
  z-index: 3; /* Ensures the results menu is above other content */
`;

export const Product = styled.div`
  display: flex;
  max-height: 60px;

  background-color: transparent;
  justify-content: space-between;
  overflow: hidden;
  border-bottom-width: 1px;
  padding: 5px;
  border-bottom: 1px solid white;
  @media only screen and (max-width: 480px) {
    width: 100vw;
  }
  &:hover {
    background-color: #e2e2e2;
    cursor: pointer;
  }
`;
// This has the Product Image and the Product Details
export const ProductDetail = styled.div`
  background-color: transparent;

  display: flex;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  background-color: transparent;
`;

export const Image = styled.img`
  background-color: transparent;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

// These are the details of the product besides the image
export const Details = styled.div`
  display: flex;
  overflow: hidden;
  flex: 3;
  background-color: transparent;
  flex-direction: column;
  justify-content: space-around;
`;
