import styled from "styled-components";

// This is the top most container
export const Container = styled.div`
  height: 285px;
  width: 20%;
  margin: 20px;
  position: relative;
  border-radius: 20px;
  background-color: #e2eef3;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;
  display: flex; /* Add flexbox */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 480px) {
    height: 50%;
    width: 100%;
  }
`;

// This is the circle behind the image, purely for design purposes
export const Circle = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
position:relative;
background-color: transparent;
height: 75%;
width:100%;
display: flex;
align-items: center;
justify-content: center;


`;

// This is the styling for the image
export const Image = styled.img`
  height: 100%;
  z-index: 2;
  background-color: transparent;
  position: relative; /* Ensure image remains on top */
`;

// This wraps around all the information
export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background-color: white;
  padding: 10px;
`;

// Defining the title
export const Info = styled.h3`
  font-weight: 500;
  background-color: transparent;
`;

// This wraps around the icon
export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 4; /* Ensure icon is on top of everything */
`;

// Additional styles can be added as needed
