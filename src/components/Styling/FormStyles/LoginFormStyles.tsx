import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px 20px 0px;
  overflow: hidden;
`;

// Wraps around all the links
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

// Styling for each link
export const Link = styled.a`
  text-decoration: underline;

  &:hover {
    color: #0f65c7;
    cursor: pointer;
  }
`;