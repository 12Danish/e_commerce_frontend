import styled from "styled-components";

// The top most level wrapper
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;

// This will contain all the categories
export const AllCategoriesWrapper = styled.div`
  background-color: #e2eef3;
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;
