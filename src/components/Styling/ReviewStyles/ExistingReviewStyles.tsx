import styled from "styled-components";

// This is the top most contaiener
export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
  margin-bottom: 5px;
  display: inline-block;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;
export const CommentBox = styled.div`
  background-color: transparent;
`;
export const StarsWrapper = styled.span`
  background: transparent;
`;
