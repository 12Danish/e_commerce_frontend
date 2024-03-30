import styled from "styled-components";
// This wraps around the whole filter segment
export const Container = styled.div`
  height: 10vh;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: right;
  justify-content: space-between;
`;
// This wraps around the the Filter Products option
export const Filter1 = styled.div`
  margin: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0px;
  }
`;
// This wraps around the Sort Products Option
export const Filter2 = styled.div`
  margin: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0px;
  }
`;
// This is the styling for the filter tex  t
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
// This is the styling for the Drop down list
export const Select = styled.select`
  padding: 10px;
  background-color: #e2eef3;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin: 0px;
    margin-top: 10px;
  }
`;

// This is the styling for each element in the drop down list
export const Option = styled.option``;
