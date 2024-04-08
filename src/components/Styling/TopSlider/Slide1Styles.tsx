import styled from "styled-components";
import { blueGradientColors } from "../SharedStyledElementsStyles";
// *** Present within WRAPPER *** Wraps around each slide
export const Slide1 = styled.div`
  width: 100vw;
  position: relative;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
`;
// *** Present within SLIDE *** Wraps around each Image
export const Slide1ImageWrapper = styled.div``;
// *** Present within IMAGEWRAPPER *** It controls the properties of the image
export const Slide1Image = styled.img`
  position: relative;
  background-color: transparent;
  width: 943.37px;
  top: 40px;
  left: 382px;
  gap: 0px;
  opacity: 0px;
  transform: rotate(-5.25deg);
  height: 100%;
  background-color: transparent;
  z-index: 3;
`;

// *** Present within INFOWRAPPER *** It controls the properties of the Title

export const Slide1Title = styled.h1`
  position: absolute;
  z-index: 2;
  top: -40px;
  left: 50px;
  font-size: 220px;
  font-weight: 800;
  line-height: 330px;
  letter-spacing: -0.06em;
  text-align: left;
  background: ${blueGradientColors};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
// *** Present within SLIDE *** Wraps around details
export const Slide1InfoWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
  padding: 50px;
  height: 200px; /* Set the height */
  width: 300px; /* Set the width */
  background-color: transparent;
`;
// *** Present within INFOWRAPPER *** It controls the properties of the Desc
export const Slide1Desc = styled.p`
  margin: 30px 0px;
  font-weight: 600;
  font-size: 30px;
  background-color: transparent;
`;
