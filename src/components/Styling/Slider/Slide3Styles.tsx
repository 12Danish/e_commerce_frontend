import styled from "styled-components";

// *** Present within WRAPPER *** Wraps around each slide
export const Slide3 = styled.div`
  overflow: hidden;
  width: 100vw;
  align-items: center;
  background-color: transparent;
  position: relative;
`;

export const Slide3ImageWrapper = styled.div``;

// Styled image with specific positioning and styles
export const Slide3Image = styled.img`
  height: 510px;
  width: 360px;
  position: relative;
  background-color: transparent;
  top: 10px;
  left: 100px;
  gap: 0px;
  opacity: 0px;
  background-color: transparent;
  z-index: 3;
`;

// *** Present within SLIDE *** Wraps around details
export const Slide3ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  right: 600px;
  z-index: 4;
`;

// *** Present within INFOWRAPPER *** It controls the properties of the Title
export const Slide3Title1 = styled.h1`
  padding: 50px;
  background-color: transparent;
  position: absolute;
  z-index: 2;
  top: -40px;
  left: 50px;
  font-size: 150px;
  font-weight: 800;
  line-height: 200px;
  letter-spacing: -0.001em;
  text-align: left;
`;

// *** Present within INFOWRAPPER *** It controls the properties of the Title
export const Slide3Title2 = styled.h1`
  padding: 50px;
  background-color: transparent;
  position: absolute;
  z-index: 2;
  bottom: 40px;
  right: 10px;
  font-size: 200px;
  font-weight: 800;
  line-height: 200px;
  letter-spacing: -0.001em;
  text-align: left;
  color:pink;
`;