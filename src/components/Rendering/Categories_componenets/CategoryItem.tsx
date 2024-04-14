import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  Cta,
  Image,
  ImageWrapper,
  InfoWrapper,
  ProductTitle,
} from "../../Styling/ProductSlider2Styles/PrdouctSlider2ItemStyes";
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
    </Container>
  );
};

export default CategoryItem;
