import styled from "styled-components";

// The top most level wrapper
export const Container = styled.div`
  background-color: transparent;
  height: 300px;
  width: 500px;
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
`;


// This wraps around the image to give its properties
export const ImageWrapper = styled.div`
  height: 280px;
  background-color: ${(prop) => prop.color};
  overflow: hidden;
  width: 100px;
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
  height: 100px;
  width: 150px;
  top: 0px;
  overflow: hidden;
  right: 0px;
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
interface Colors {
  [key: string]: string;
}

export const bgColors: Colors = {
  pink: "rgba(161, 3, 74, 0.5)",
  lightBlue: "rgba(45, 95, 132, 1)",
  lightGreen: "rgba(158, 208, 101, 1)",
  darkBlue: "rgba(27, 79, 135, 1)",
};
