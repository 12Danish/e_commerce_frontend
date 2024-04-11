import styled from "styled-components";

// This is the top most level container
export const Container = styled.div`
  height: 120vh;
  width: 1309px;
  padding: 20px;
  position:relative;
  background: linear-gradient(0deg, #113869, #cedff1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Styling for the form
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 20px 0px;
  width: 100%;
  overflow: hidden;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Styling for the wrapper around the Desc
export const TermsWrapper = styled.div`
  margin: 20px;
`;
