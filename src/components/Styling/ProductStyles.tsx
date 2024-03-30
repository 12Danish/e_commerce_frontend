import styled from "styled-components";

// This is the top most container
export const Container = styled.div`
  height: 285px;
  width: 20%;
  margin: 20px;
  position: relative;
  border-radius: 20px;
  background-color: #e2eef3;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 480px) {
    height: 50%;
    width: 100%;
  }
`;
//This is the circle behind the image, purely for design purposes
export const Circle = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

// This is the styling for the image
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
// This wraps around all the information
export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  align-items: bottom;
  justify-content: space-between;
  background-color: white;
`;
// Defining the title
export const Info = styled.h1`
  font-weight: bold;
`;

// This wraps around the icon
export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 3;
  margin: 10px;
`;
