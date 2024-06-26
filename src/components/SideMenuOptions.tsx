import styled from "styled-components";
import { categoriesInfo } from "../assets/data";
import { EachRow,Container,OptionsWrapper,Links } from "./Styling/Navbar/SideMenuOptionsStyles";

const SideMenuOptions = () => {
  return (
    <Container>
      <OptionsWrapper>
        {categoriesInfo.map((category) => (
          <EachRowOptions
            categoryName={category.title}
            key={category.id}
          ></EachRowOptions>
        ))}
      </OptionsWrapper>
    </Container>
  );
};

// This component returns each row
interface EachRowOptionsProps {
  categoryName: string;
}
const EachRowOptions = ({ categoryName }: EachRowOptionsProps) => {
  return (
    <Links>
      <EachRow>{categoryName}</EachRow>
    </Links>
  );
};

export default SideMenuOptions;
