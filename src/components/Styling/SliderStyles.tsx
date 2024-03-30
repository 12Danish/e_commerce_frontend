import styled from "styled-components";
export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: black;
`;
// Defining props for the arrow element
interface ArrowProps {
  direction: "left" | "right";
}

// ***Present inside CONTAINER *** Defining properties for the arrow element
export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #191970;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
  }
`;

interface WrapperProps {
  slideindex: number;
}
// *** Presnt within the CONTAINER *** Wraps around all slides
export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 1.5s ease;
`;

interface SlideProps {
  bgcolor: string;
}
// *** Present within WRAPPER *** Wraps around each slide
export const Slide = styled.div<SlideProps>`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
`;
// *** Present within SLIDE *** Wraps around each Image
export const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
// *** Present within IMAGEWRAPPER *** It controls the properties of the image
export const Image = styled.img`
  height: 100%;
`;
// *** Present within SLIDE *** Wraps around details
export const InfoWrapper = styled.div`
  flex: 1;
  padding: 50px;
`;
interface TitleProps {
  color: string;
}
// *** Present within INFOWRAPPER *** It controls the properties of the Title
export const Title = styled.h1<TitleProps>`
  font-weight: bold;
  font-size: 70px;
  color: ${(props) => props.color};
  letter-spacing: 2px;
`;
// *** Present within INFOWRAPPER *** It controls the properties of the Desc
export const Desc = styled.p`
  margin: 30px 0px;
  font-weight: 500;
  font-size: 30px;
`;
