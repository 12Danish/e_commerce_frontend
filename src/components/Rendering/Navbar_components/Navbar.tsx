//This file defines the navbar component and elements within it. It provides the layout for them and styling

//Importing the menu Icon
import MenuIcon from "@mui/icons-material/Menu";
// Importing Searh Icon
import SearchIcon from "@mui/icons-material/Search";
// Importing badges
import Badge from "@mui/material/Badge";
//Importing shopping cart Icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// Getting the cancel Icon
import CancelIcon from "@mui/icons-material/Cancel";
//Importing the wrapper for icons
import { BoldHeading, Icon } from "../../Styling/SharedStyledElementsStyles";
// importing the side menu
import SideMenuOptions from "./SideMenuOptions";
// Using useState
import { useState } from "react";
import {
  Center,
  Container,
  CrossWrapper,
  InputField,
  Left,
  NavbarLinks,
  NavbarOptions,
  Right,
  SearchContainer,
  SideMenuFooterWrapper,
  SideMenuHeadingWrapper,
  SideMenuWrapper,
  Wrapper,
} from "../../Styling/NavbarStyles/NavbarStyles";
// This is the top most level container for the navbar

// This is the main functional component which is returned in the end
const Navbar = () => {
  // This checks for the screen size
  const screenSize = window.screen.width <= 480 ? true : false;

  return (
    //The top most element
    <Container>
      <Wrapper>
        {/*The left component has the search field within it*/}
        <Left>
          {/*This function handles the sideMenu display */}
          {renderSideMenu(screenSize)}
          {renderSearch(screenSize)}
        </Left>
        {/*The center component has the Company Name within it*/}
        <Center>
          <BoldHeading backgroundColor="#113869" fontcolor="white">
            Company Name{" "}
          </BoldHeading>
        </Center>

        {/*The right component has different options within it*/}
        <Right>
          {!screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Become a Seller</NavbarLinks>
            </NavbarOptions>
          )}
          {!screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Sign Up</NavbarLinks>
            </NavbarOptions>
          )}
          {!screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Login</NavbarLinks>
            </NavbarOptions>
          )}
          <Icon bgColor="#113869" hoverColor="#0a213d">
            <Badge
              badgeContent={2}
              sx={{ color: "#113869", cursor: "pointer" }}
            >
              <ShoppingCartIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "#113869",
                }}
              />
            </Badge>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

// This function handles the Menu movement. Its logic and state
function useMenuMovementLogic() {
  // This keeps track of  the number that is multiplied within the the left attribute of the SideMenuWrapper
  const [xAxisPosition, setXAxisPostion] = useState(3);
  // This function handles setting the appropriate value for the xAxisPosition as the user clicks the menu or cross icon
  const handleMenuMovement = (clicked: string) => {
    if (clicked == "menu") {
      setXAxisPostion(0);
      console.log(xAxisPosition);
    } else if (clicked == "cross") {
      setXAxisPostion(3);
    }
  };

  return { handleMenuMovement, xAxisPosition };
}
// This function renders the sidemenu
function renderSideMenu(screenSize: boolean) {
  // Getting the values from the function which has state and movement logic
  const { handleMenuMovement, xAxisPosition } = useMenuMovementLogic();
  console.log(xAxisPosition);
  return (
    <>
      <Icon
        bgColor="#113869"
        hoverColor="#0a213d"
        onClick={() => handleMenuMovement("menu")}
      >
        <MenuIcon
          sx={{ color: "white", cursor: "pointer", backgroundColor: "#113869" }}
        />
      </Icon>
      <SideMenuWrapper xposition={xAxisPosition}>
        {/* Calling the handleMenuMovement function with the parameter of cross */}
        <CrossWrapper onClick={() => handleMenuMovement("cross")}>
          {/* This is the cross icon imported from mui */}
          <CancelIcon sx={{ cursor: "pointer", color: "#113869;" }} />
        </CrossWrapper>
        {/*Displaying the header */}
        <SideMenuHeadingWrapper>Categories</SideMenuHeadingWrapper>
        {/* Displaying the side menu options imported */}
        <SideMenuOptions />
        {/* Dispalying the footer */}
        {/* The search container has the input field and the search icon imported from mui.
        It is displayed within the side menu only in mobile mode */}
        {screenSize && (
          <SearchContainer>
            <InputField />
            <SearchIcon sx={{ color: "gray", cursor: "pointer" }} />
          </SearchContainer>
        )}

        <SideMenuFooterWrapper>
          {/*Only displayed in mobile mode */}
          {screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Become a Seller</NavbarLinks>
            </NavbarOptions>
          )}
          {/*Only displayed in mobile mode */}
          {screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Sign Up</NavbarLinks>
            </NavbarOptions>
          )}
          {/*Only displayed in mobile mode */}
          {screenSize && (
            <NavbarOptions>
              <NavbarLinks bg_color="#113869">Login</NavbarLinks>
            </NavbarOptions>
          )}

          <BoldHeading backgroundColor="#113869" fontcolor="white">
            Company Name
          </BoldHeading>
        </SideMenuFooterWrapper>
      </SideMenuWrapper>
    </>
  );
}
// This function handles the search
function renderSearch(screenSize: boolean) {
  return (
    <Left>
      {!screenSize && (
        <SearchContainer>
          <InputField />
          <SearchIcon sx={{ color: "gray", cursor: "pointer" }} />
        </SearchContainer>
      )}
    </Left>
  );
}
export default Navbar;
