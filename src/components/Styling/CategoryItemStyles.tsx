import styled from "styled-components";

// The top most level wrapper
export const Container = styled.div`
  height: 45%;
  width: 20%;
  margin: 20px;
  position: relative;
  @media only screen and (max-width: 480px) {
  height : 50%;
  width : 100%;
    
}
`;
// This wraps around the image to give its properties
export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
// Defining the properties for the image
export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
// This will wrap all the description contents
export const InfoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// Defining properties for the title
export const Title = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 30px;
`;
// Defining properties for button
export const Button = styled.button`
  background-color: #191970;
  padding: 10px;
  color: white;
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
  }
`;
