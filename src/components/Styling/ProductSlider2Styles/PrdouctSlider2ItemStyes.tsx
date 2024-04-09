import styled from "styled-components";

// The top most level wrapper
export const Container = styled.div`
  background-color: transparent;
  height: 400px;
  width: 370px;
  border-radius: 20px;
  margin-right: 10px;

  position: relative;
  @media only screen and (max-width: 480px) {
    height: 50%;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
    background-color: #f8f1f1;
  }
  transition: all 0.5s ease;
`;

// This wraps around the image to give its properties
export const ImageWrapper = styled.div`
  height: 80%;
  background-color: transparent;
  overflow: hidden;
  width: 100%;
`;
// Defining the properties for the image
export const Image = styled.img`
  height: 100%;
  overflow: hidden;
  width: 100%;
  object-fit: cover;
`;
// This will wrap all the description contents
export const InfoWrapper = styled.div`
  position: absolute;
  background-color: transparent;
  height: 20%;
  width: 100%;
  bottom: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductTitle = styled.h3`
  font-weight: 450;
  background-color: transparent;
`;

interface priceProp {
  isSale: boolean;
}
export const Price = styled.div<priceProp>`
  font-style: italic;
  color: ${(prop) => (prop.isSale ? "red" : "black")};
  display: flex;
`;
export const Cta = styled.div`
  display: flex;
`;
