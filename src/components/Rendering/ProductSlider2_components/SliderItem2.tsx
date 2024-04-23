import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DiscountIcon from "@mui/icons-material/Discount";
import {
  Container,
  Cta,
  ImageWrapper,
  Image,
  InfoWrapper,
  Price,
  ProductTitle,
} from "../../Styling/ProductSlider2Styles/PrdouctSlider2ItemStyes";
// Defining props for CategoryItem Component
import {
  SliderItemProps,
  convertAbsolutePath,
} from "../ProductSlider1_components/SliderItem1";

// The main component that is returned
const CategoryItem = ({ item }: SliderItemProps) => {
  const relativeImagePath = convertAbsolutePath(item.image);
  return (
    <Container>
      {/* This wraps around the image */}
      <ImageWrapper>
        {/* Displaying the image of the item in category */}
        {item.image && <Image src={relativeImagePath} alt="image" />}
      </ImageWrapper>
      {/* This wraps around all the information */}
      <InfoWrapper>
        <ProductTitle>{item.title}</ProductTitle>
        <Price isSale={item.sale_item}>
          {item.sale_item ? item.sale_price : item.price}{" "}
          {item.sale_item && <DiscountIcon style={{ fontSize: "small" }} />} Rs
        </Price>
        <Cta>
          Shop Now
          <ArrowForwardIcon
            style={{ color: "grey", backgroundColor: "transparent" }}
          />
        </Cta>
      </InfoWrapper>
    </Container>
  );
};

export default CategoryItem;
