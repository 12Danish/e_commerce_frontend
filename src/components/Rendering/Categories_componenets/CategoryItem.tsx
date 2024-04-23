import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  Cta,
  Image,
  ImageWrapper,
  InfoWrapper,
  ProductTitle,
} from "../../Styling/ProductSlider2Styles/PrdouctSlider2ItemStyes";
import { linkStyle } from "../../Styling/LinkStyles";
import { Link,Outlet } from "react-router-dom";
// Defining props for CategoryItem Component
interface CategoryItemProps {
  item: {
    id: number;
    img: string;
    title: string;
  };
}

// The main component that is returned
const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <Container>
      <Link to={`/product_list/category/${item.title}`} style={linkStyle}>
      {/* This wraps around the image */}
      <ImageWrapper>
        {/* Displaying the image of the item in category */}
        <Image src={item.img} />
      </ImageWrapper>
      {/*This wraps around the all the information  */}
      <InfoWrapper>
        <ProductTitle>{item.title}</ProductTitle>
        <Cta>
          Shop Now
          <ArrowForwardIcon
            style={{ color: "grey", backgroundColor: "transparent" }}
          />
        </Cta>
      </InfoWrapper>
      </Link>
      <Outlet />
    </Container>
  );
};

export default CategoryItem;
