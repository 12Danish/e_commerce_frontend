import { categoriesInfo } from "../../../assets/data";
import { linkStyle } from "../../Styling/LinkStyles";

import {
  Container,
  EachRow,
  LinksWrapper,
  OptionsWrapper,
} from "../../Styling/NavbarStyles/SideMenuOptionsStyles";
import { Outlet,Link } from "react-router-dom";

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
      <Outlet />
    </Container>
  );
};

// This component returns each row
interface EachRowOptionsProps {
  categoryName: string;
}
const EachRowOptions = ({ categoryName }: EachRowOptionsProps) => {
  return (
    <LinksWrapper>
    <Link to={`/product_list/category/${categoryName}`} style={linkStyle}>
      <EachRow>{categoryName}</EachRow>
      </Link>
    </LinksWrapper>
  );
};

export default SideMenuOptions;
