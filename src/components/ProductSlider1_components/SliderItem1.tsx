import {
  Container,
  Image,
  Cta,
  Price,
  ProductTitle,
  ImageWrapper,
  InfoWrapper,
} from "../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";
import DiscountIcon from "@mui/icons-material/Discount";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Defining props for CategoryItem Component
interface CategoryItemProps {
  item: {
    id: number;
    img: string;
    title: string;
  };
  color: string;
}

// The main component that is returned
const CategoryItem = ({ item, color }: CategoryItemProps) => {
  return (
    <Container>
      {/* This wraps around the image */}
      <ImageWrapper color={color}>
        {/* Displaying the image of the item in category */}
      </ImageWrapper>
      {/*This wraps around the all the information  */}
      <InfoWrapper>
        <ProductTitle>{item.title}</ProductTitle>
        <Price isSale={true}>
          Rs: 5000 {true && <DiscountIcon style={{ fontSize: "small" }} />}
        </Price>
        <Cta>
          Shop Now
          <ArrowForwardIcon style={{ color: "grey", backgroundColor : "transparent" }} />
        </Cta>
      </InfoWrapper>
    </Container>
  );
};

export default CategoryItem;
