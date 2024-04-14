import styled from "styled-components";
import {
  blue_color,
  blueGradientColors,
  purpleGradientColors,
  purple_color,
} from "./SharedStyledElementsStyles";
interface switchUserProps {
  position: {
    top: number;
    right: number;
  };
}

export const SwitchUserWrapper = styled.div<switchUserProps>`
  width: 250px;
  height: 50px;
  top: ${(props) => props.position.top}px;
  right: ${(props) => props.position.right}px;
  display: flex;
  border: 1px;
  position: absolute;
  border: 1px solid ;
`;
interface optionProps {
  bgColor: string;
  fontColor: string;

}
export const BuyerOption = styled.div<optionProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};


  &:hover {

    cursor: pointer;
  }

`;

export const SellerOption = styled.div<optionProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  border-radius: 1px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const BuyerActive = {
  buyerOptionStyle: {
    color: "white",
    bgColor: blue_color,
    borderColor: "white",
  },
  backgroundGradient: blueGradientColors,
};
export const SellerActive = {
  sellerOptionStyle: {
    color: "black",
    bgColor: purple_color,
    borderColor: "black",
  },
  backgroundGradient: purpleGradientColors,
};

export const BuyerInactive = {
  buyerOptionStyle: {
    color: blue_color,
    bgColor: "white",
    borderColor: blue_color,
  },
};

export const SellerInactive = {
  sellerOptionStyle: {
    color: purple_color,
    bgColor: "white",
    borderColor: purple_color,
  },
};
