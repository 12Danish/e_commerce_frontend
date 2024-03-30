import styled from "styled-components";

// This is the top most contaiener
export const Container = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;

  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;
export const CommentBox = styled.div``;
export const StarsWrapper = styled.span``;
