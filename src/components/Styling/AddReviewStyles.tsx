import styled from "styled-components";
// This is the top most level element
export const Container = styled.div`
  padding: 10px;
  background-color: #e2eef3;
  height: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

// This wraps around the Name Section
export const NameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
`;

// This is the input box for the review that the user writes
export const ReviewBox = styled.textarea`
  resize: none;
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
  height: 100%;
  width: 100%;
  font-weight: 700;
  vertical-align: top;
`;
// This is the input box for the name the user enters
export const NameBox = styled.input`
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
  height: 25px;
  width: 150px;
  font-weight: 700;
`;
export const StarsWrapper = styled.span`
  flex: 0.5;
`;

// This wraps around the Reviews Section
export const ReviewWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
