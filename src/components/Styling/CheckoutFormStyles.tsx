import styled from "styled-components";

// This is the top most level container
export const Container = styled.div`
  height: 120vh;
  width: 100%;
  padding: 20px;
  // Using this to create a thin white layer on top of the image
  background: linear-gradient(0deg, #003ab6c5, #cedff1);

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
