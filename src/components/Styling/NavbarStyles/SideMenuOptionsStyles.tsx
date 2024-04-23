import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 100%;

  @media only screen and (max-width: 480px) {
    height: 64%;
  }
`;

// This wraps around all the options
export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 10px 0px 10px 0px;

  @media only screen and (max-width: 480px) {
    justify-content: space-around;
    height: 100%;
  }
`;
//This wraps around each row
export const EachRow = styled.div`
  flex: 1;
  padding: 5px;
  font-size: 20px;
  border-bottom: 1px solid white;
  &:hover {
    background-color: #e2e2e2;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 6px;
  }
`;
// Styling for each link
export const LinksWrapper = styled.div`
  cursor: pointer;
`;
