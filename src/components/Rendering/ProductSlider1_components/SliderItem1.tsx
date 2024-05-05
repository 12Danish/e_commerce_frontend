import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DiscountIcon from "@mui/icons-material/Discount";
import { Link, Outlet } from "react-router-dom";
import { productLinkStyle } from "../../Styling/LinkStyles";
import {
  Container,
  Cta,
  Image,
  ImageWrapper,
  InfoWrapper,
  Price,
  ProductTitle,
} from "../../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";
import { convertAbsolutePath, ListItemProps } from "../SharedElements";
import { EditedPrice } from "../SharedElements";
// The main component that is returned
const SliderItem = ({ item, color }: ListItemProps) => {
  // Convert absolute image path to relative path


  return (
    <Container>
      <Link to={`/product_detail/${item.id}`} style={productLinkStyle}>
        {/* This wraps around the image */}
        <ImageWrapper color={color}>
          {/* Displaying the image of the item in category */}
          <Image src={convertAbsolutePath(item.image)} alt="image" />
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

export default SliderItem;
