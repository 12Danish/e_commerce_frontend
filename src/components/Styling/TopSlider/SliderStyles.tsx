import styled from "styled-components";
export const Container = styled.div`
  height: 85vh;
  max-width: 1350px;
  display: flex;
  position: relative;
  overflow: hidden;
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
  background-color: transparent;
`;
