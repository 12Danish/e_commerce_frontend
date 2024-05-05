export const linkStyle = {

  textDecoration: "none", // Remove underline
  color: "inherit", // Inherit text color from parent
  backgroundColor: "transparent", // Set background color to transparent
 
};

export const productLinkStyle = {
  ...linkStyle, // Inherit styles from linkStyle
  height: "100%",
  width: "100%",
  display: "inline-block",
};