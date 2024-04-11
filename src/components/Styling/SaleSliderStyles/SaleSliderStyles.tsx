import styled from "styled-components";
import { blueGradientColors } from "../SharedStyledElementsStyles";

// *** Present within WRAPPER *** Wraps around each slide
export const SaleSliderContainer = styled.div`
  overflow: hidden;
  width: 1350 px;
  height: 80vh;
  position: relative;
  align-items: center;
  background: linear-gradient(
    1.32deg,
    #e0c340 0.13%,
    #dfc23e 3.97%,
    #e1c441 7.2%,
    #e3c743 10.13%,
    #e4c542 12.98%,
    #e6c744 15.99%,
    #e7c845 19.52%,
    #e5c643 23.96%,
    #e6c945 30.43%,
    #e3c743 36.49%,
    #e9ca48 42.49%,
    #edce49 49.35%,
    #f0d44c 55.42%,
    #f4d84f 61.43%,
    #f6da52 65.74%,
    #f7db53 72.23%,
    #f9dd55 77.43%,
    #f9df56 83.84%,
    #fae157 91.52%,
    #f9df56 97.87%
  );
  position: relative;
`;

export const SaleSliderImageWrapper = styled.div`
  background-color: transparent;
`;
// *** Present within IMAGEWRAPPER *** It controls the properties of the image
export const SaleSliderImage = styled.img`
  background-color: transparent;
  position: absolute;
  width: 800px;
  top: 0px;
  left: 50px;
  height: 100%;
  background-color: transparent;
  z-index: 3;
`;
// *** Present within SLIDE *** Wraps around details
export const SaleSliderButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  right: 260px;
  z-index: 4;
`;

// *** Present within INFOWRAPPER *** It controls the properties of the Title
export const SaleSliderTitle = styled.h1`
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 180px;
  font-size: 150px;
  font-weight: 800;
  line-height: 330px;
  letter-spacing: -0.06em;
  text-align: left;
  background: ${blueGradientColors};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
export const SaleSliderRectangle = styled.div`
  position: absolute;
  top: 105px;
  opacity: 80%;
  right: 120px;
  z-index: 2;
  width: 400px;
  height: 150px;
  background-color: white; /* Light yellowish golden color */
  transform: rotate(-5deg); /* Tilted anticlockwise */
  border: 2px solid #d4af37; /* Darker border color resembling tape */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Box shadow for a slightly parched appearance */
`;
export const SaleSlideInfoWrapper = styled.div`
  position: absolute;
  bottom: 120px;
  right: 0px;
  padding: 50px;
  height: 20px; /* Set the height */
  width: 550px; /* Set the width */
  background-color: transparent;
`;
// *** Present within INFOWRAPPER *** It controls the properties of the Desc
export const SaleSlideDesc = styled.p`
  margin: 30px 0px;
  font-weight: 450;
  font-size: 20px;
  background-color: transparent;
`;
