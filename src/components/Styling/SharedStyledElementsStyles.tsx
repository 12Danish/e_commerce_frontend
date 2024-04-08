import styled from "styled-components";

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

// Defining the properties of the header. I have exported this here as I am using the same component within ProductList anf Categories and NewsLetter
export const Header = styled.div`
  margin-top: 10px;
  height: 80px;
  width: 100%;
  background-color: #191970;
  color: #f8f8ff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

// Exporting this as this can be used in Product.tsx and Navbar.tsx
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  background-color: #113869;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #0a213d;
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
  font-style: italic;
  font-weight: 700;
`;

// This is the tag for the name of the person with all the needed styling.This is being used in ExistingReviws and AddReviews
export const Name = styled.h1`
  font-size: 20px;

  font-weight: 700;
  margin-bottom: 5px;
`;

// All the following elements are now being used within the login and sign up pages
// Wraps around the whole register box
interface FormWrapperProps {
  margin: string;
}
export const FormWrapper = styled.div<FormWrapperProps>`
  margin: ${(props) => props.margin};
  padding: 20px;
  width: 40%;
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
`;

// Styling for each form field
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 20px;
  margin: 20px 20px 0px 0px;
  font-weight: 700;
`;

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
