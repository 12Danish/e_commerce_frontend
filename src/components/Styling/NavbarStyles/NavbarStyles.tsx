//Importing this to use styled components
import styled from "styled-components";

// This is the top most level container for the navbar

export const Container = styled.div`
  height: 60px;
  overflow: hidden;
  background-color: #113869;

  @media only screen and (max-width: 480px) {
    height: auto;
    overflow: hidden;
  }
`;
// ***Placed inside CONTAINER component *** The wrapper is inside <Component> and provides padding and sets display to flexbox for displaying children elements horizontally
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

// *** Placed inside WRAPPER component *** Wrapping the elements on the left under this div element container and specifying its styling
export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  background-color: transparent;
`;

// ***Placed Inside LEFT component *** Specifying style properties for the search box
export const SearchContainer = styled.div`
  border: 2px solid #191970;
  display: flex;
  flex: 0.8;
  border-radius: 8px;
  align-items: center;
  padding: 3px;
  margin-left: 20px;

  @media only screen and (max-width: 480px) {
    margin: 0px 0px 20px 0px;
  }
`;
// *** This is placed inside the SEARCH_CONTAINER component*** This specifies the properties of the input field
export const InputField = styled.input`
  border: none;
  flex: 1;
`;
// This property will have a role in moving the menu in and out of view
interface SideMenuWrapperProps {
  xposition: number;
}
// This is the wrapper for the side menu
export const SideMenuWrapper = styled.div<SideMenuWrapperProps>`
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.xposition *
    -101}px; // The sense for this is that at -300 it is outside view and  at 0 it is properly inside
  position: relative;
  border: 2px solid darkblue;
  width: 300px;
  position: fixed;
  z-index: 4;
  border-color: #113869;
  transition: all 0.5s;
`;

// This is the wrapper for the cross icon
export const CrossWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

// *** Placed inside WRAPPER component ***  Wrapping the elements in the center under this div element container and specifying its styling
export const Center = styled.div`
  flex: 1;
  text-align: center;
  background-color: transparent;
`;

// This is the wrapper for the Company Name at the end of the Side Menu
export const SideMenuFooterWrapper = styled.div`
  margin-top: 5px;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

// This has the styling for the title
export const SideMenuHeadingWrapper = styled.div`
  font-size: 35px;
  color: #113869;
  background-color: white;
`;

// *** Placed inside WRAPPER component ***  Wrapping the elements on the right under this div element container and specifying its styling
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  @media only screen and (max-width: 480px) {
    justify-content: flex-end;
  }
`;

export const NavbarOptions = styled.div`
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
`;

interface NavBarLinkProps {
  bg_color: string;
}
export const NavbarLinks = styled.a<NavBarLinkProps>`
  background-color: ${(props) => props.bg_color};
  color: white;
`;
