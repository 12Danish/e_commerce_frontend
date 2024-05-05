import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DiscountIcon from "@mui/icons-material/Discount";
import {
  Container,
  Cta,
  Image,
  ImageWrapper,
  InfoWrapper,
  ProductTitle,
} from "../../Styling/ProductSlider2Styles/PrdouctSlider2ItemStyes";
// Defining props for CategoryItem Component
import { Link, Outlet } from "react-router-dom";
import { productLinkStyle } from "../../Styling/LinkStyles";
import { convertAbsolutePath, EditedPrice, ListItemProps } from "../SharedElements";

// The main component that is returned
const CategoryItem = ({ item }: ListItemProps) => {

  return (
    <Container>
      <Link to={`/product_detail/${item.id}`} style={productLinkStyle}>
        {/* This wraps around the image */}
        <ImageWrapper>
          {/* Displaying the image of the item in category */}
          {item.image && <Image src={convertAbsolutePath(item.image)} alt="image" />}
        </ImageWrapper>
        {/* This wraps around all the information */}
        <InfoWrapper>
          <ProductTitle>{item.title}</ProductTitle>
          <EditedPrice item={item} />
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
