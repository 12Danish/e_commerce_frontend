import styled from "styled-components";
import { blueGradientColors } from "../SharedStyledElementsStyles";
// This is the top most level container
export const Container = styled.div`
  height: auto;
  min-height: 50vh;
  width: 100%;
`;
// This wraps around all the products along with their images
export const AllProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: auto;
  min-height: 20vh;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
  }
`;

export const Header = styled.div`
  margin-top: 10px;
  height: 80px;
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  background: ${blueGradientColors};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
// Wraps around the pagination
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;