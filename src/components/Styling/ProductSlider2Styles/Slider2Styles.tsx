import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-height: 500px;
  position: relative;
`;
export const ProductsContainer = styled.div`
  flex: 3;
  height: 70vh;
  max-width: 1350px;
  background-color: transparent;
  display: flex;
  overflow: hidden;
`;

interface WrapperProps {
  slideindex: number;
}
// *** Presnt within the CONTAINER *** Wraps around all slides
export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  background-color: transparent;
  display: flex;
  transform: translateX(${(props) => props.slideindex * -25}vw);
  transition: all 1.5s ease;
`;
