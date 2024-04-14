import styled from "styled-components";
import { blue_color } from "../SharedStyledElementsStyles";
import { purpleGradientColors } from "../SharedStyledElementsStyles";
interface containerProps{
  userType : string;
}
// This is the top most level container
export const Container = styled.div<containerProps>`
  height: 120vh;
  width: 1309px;
  padding: 20px;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.userType === 'buyer' ? `background: linear-gradient(0deg, ${blue_color}, #cedff1);` : purpleGradientColors };
`;
// Styling for the form
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 20px 0px;
  width: 100%;
  overflow: hidden;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Styling for the wrapper around the Desc
export const TermsWrapper = styled.div`
  margin: 20px;
`;
