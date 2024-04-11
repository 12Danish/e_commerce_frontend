import styled from "styled-components";

//This contains the central body for the cart
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1309px;
  min-height: 30vh;
  height: auto;
  margin-bottom: 50px;
`;
// This contains the buttons
export const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1339px;
  flex: 1;
  padding: 5px;
  max-height: 55px;
  overflow: hidden;
  position: relative;
  background-color: #e2eef3;
`;

// This wraps around the title

export const TitleWrapper = styled.div`
  position: absolute;
  background-color: transparent;
  left: 50%; /* Move to the horizontal center */
  transform: translateX(-50%); /* Adjust to center */
  top: 0;
  bottom: 0;
`;

// This is the lower part which contains the main body for the cart
export const LowerBody = styled.div`
  margin-top: 7px;
  flex: 3;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
// This is the part which has all the relevant information for all products of the cart
export const Info = styled.div`
  flex: 3;
`;
// This is the part which has the Summary for the price
export const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black; /* Added border style */
  min-height: 430px;
  min-width: 400px;
  max-height: 450px;
  padding: 20px;
  box-sizing: border-box; /* Added box-sizing */
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const SummaryPerLine = styled.div`
  margin-top: 5px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

// This is the styling for the normal text
export const SummaryInfoText = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-right: 5px;
`;
interface PriceValueProps {
  fontSize: string;
  color: string;
}
export const PriceValue = styled.h1<PriceValueProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  color: ${(props) => props.color};
`;
