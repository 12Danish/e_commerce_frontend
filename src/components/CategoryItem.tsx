import {
  Container,
  ImageWrapper,
  InfoWrapper,
  Title,
  Button,
  Image,
} from "./Styling/CategoryItemStyles";

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
        {/* Displaying the title */}
        <Title>{item.title}</Title>
        {/* Displaying the button */}
        <Button>Shop Now</Button>
      </InfoWrapper>
    </Container>
  );
};

export default CategoryItem;
