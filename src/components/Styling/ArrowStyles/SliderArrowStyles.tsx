import styled from "styled-components";

interface ArrowProps {
    direction: "left" | "right";
  }
  
  // ***Present inside CONTAINER *** Defining properties for the arrow element
  export const Arrow = styled.div<ArrowProps>`
    width: 50px;
    height: 50px;
    background-color: #113869;
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
    transition: all 0.5s ease;
  `;
  