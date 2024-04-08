import styled from "styled-components";

// *** Present within WRAPPER *** Wraps around each slide
export const Slide2 = styled.div`
  overflow: hidden;
  width: 100vw;
  align-items: center;
  background-color: transparent;
  position: relative;
`;
export const Slide2ImageWrapper = styled.div``;
// *** Present within IMAGEWRAPPER *** It controls the properties of the image
export const Slide2Image = styled.img`
  position: relative;
  background-color: transparent;
  width: 943.37px;
  top: 10px;
  left: 500px;
  gap: 0px;
  opacity: 0px;
  transform: rotate(-5.25deg);
  height: 100%;
  background-color: transparent;
  z-index: 3;
`;
// *** Present within SLIDE *** Wraps around details
export const Slide2ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 600px;
  z-index: 4;
`;

// *** Present within INFOWRAPPER *** It controls the properties of the Title
export const Slide2Title = styled.h1`
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
export const Slide2Rectangle = styled.div`
  position: absolute;
  bottom: 140px;
  opacity: 80%;
  left: 66px;
  z-index: 2;
  width: 400px;
  height: 150px;
  background-color: #fdd835; /* Light yellowish golden color */
  transform: rotate(-5deg); /* Tilted anticlockwise */
  border: 2px solid #d4af37; /* Darker border color resembling tape */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Box shadow for a slightly parched appearance */
`;
