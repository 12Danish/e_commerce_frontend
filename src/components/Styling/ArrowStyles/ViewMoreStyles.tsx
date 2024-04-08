import styled from "styled-components";

export const ViewMore = styled.div`
  position: absolute;
  right: -200px;
  top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #0c315f;
  gap: 10px; /* Adjust the gap value as needed for spacing between elements */
  border: 1px solid #0c315f; /* Border with the same color as the font */
  padding: 10px; /* Padding for inner content */
  &:hover {
    background-color: #0c315f; /* Background color changes to font color on hover */
    color: white;
    cursor: pointer; /* Font color changes to white on hover */
  }
  transition: background-color 0.5s ease, color 0.5s ease;
`;

export const MuiIconhoverStyle = {
  backgroundColor: "#0c315f", // Background color changes to font color on hover
  color: "white", // Font color changes to white on hover
  transition: "background-color 0.3s ease, color 0.3s ease",
};
