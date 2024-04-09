import {
  Container,
  Image,
  Cta,
  Price,
  ProductTitle,
  ImageWrapper,
  InfoWrapper,
} from "../Styling/ProductSlider2Styles/PrdouctSlider2ItemStyes";
import DiscountIcon from "@mui/icons-material/Discount";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
      {/* This wraps around the image */}
      <ImageWrapper>
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
