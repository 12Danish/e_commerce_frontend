import styled from "styled-components";

export const blue_color = "#113869";
export const purple_color = "#9E84FF";
export const blueGradientColors = `
linear-gradient(
  91.02deg,
  #4280cf 7.23%,
  #3975c0 14.99%,
  #0c315f 50.29%,
  #0a2444 63.22%,
  #03234b 85.09%,
  #4280cf 102.7%
)`;

export const purpleGradientColors = `
background: hsla(253, 100%, 76%, 1);
background: linear-gradient(90deg, hsla(253, 100%, 76%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
background: -moz-linear-gradient(90deg, hsla(253, 100%, 76%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
background: -webkit-linear-gradient(90deg, hsla(253, 100%, 76%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9E84FF",endColorstr="#000000",GradientType=1);
`;

interface BoldHeadingProps {
  fontcolor: string;
  backgroundColor: string;
}
// Exporting this as I am using this within the footer and navbar
export const BoldHeading = styled.h1<BoldHeadingProps>`
  font-weight: bold;
  font-size: 35px;
  color: ${(props) => props.fontcolor};
  background-color: ${(props) => props.backgroundColor};
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

interface IconProps {
  bgColor: string;
  hoverColor: string;
}

// Exporting this as this can be used in Product.tsx and Navbar.tsx
export const Icon = styled.div<IconProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: scale(1.1);
  }
`;
// This takes in the parameters for defining the buttons
interface ButtonProps {
  bgcolor: string;
  fontcolor: string;
  bordercolor: string;
  width: string;
}
//  It controls the properties of the Button
export const Button = styled.button<ButtonProps>`
  height: 40px;
  width: ${(props) => props.width};
  padding: 10px;
  border: solid;
  border-width: 1px;
  border-color: ${(props) => props.bordercolor};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  font-weight: 800;
  letter-spacing: 2px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

// This eleement is being used in SingleProductDetails and within Reviews
export const Desc = styled.p`
  margin-top: 10px;
  background-color: transparent;
  font-style: italic;
  font-weight: 600;
`;

// This is the tag for the name of the person with all the needed styling.This is being used in ExistingReviws and AddReviews
export const Name = styled.h1`
  font-size: 20px;
  background-color: transparent;
  font-weight: 700;
  margin-bottom: 5px;
`;

// All the following elements are now being used within the login and sign up pages
// Wraps around the whole register box
interface FormWrapperProps {
  margin: string;
  top: number;
}
export const FormWrapper = styled.div<FormWrapperProps>`
  position: absolute;
  margin: ${(props) => props.margin};
  padding: 20px;
  width: 800px;
  top: ${(props) => props.top}px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: whitesmoke;
  border-width: 1px;
  border-color: #191970;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
// Styling for the title. This is used in different components
export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  background-color: transparent;
`;

// Styling for each form field
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 20px;
  margin: 20px 20px 0px 0px;
  font-weight: 700;
`;

export const ProductSliderTitle = styled.h1`
  flex: 1;
  max-height: 120px;
  z-index: 2; /* Ensure a higher z-index to appear above other elements */
  font-size: 50px;
  font-weight: 800;
  letter-spacing: -0.06em;
  text-align: left;
  background: ${blueGradientColors};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
