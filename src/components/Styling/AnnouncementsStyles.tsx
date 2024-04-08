import styled from "styled-components";

// Defining properties of Div that will contain announcements
export const Container = styled.div`
  height: 30px;
  max-width: 1350px;
  color: #28282a;
  font-weight: 400;
  text-align: center;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
