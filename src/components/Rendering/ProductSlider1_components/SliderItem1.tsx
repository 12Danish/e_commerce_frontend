import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DiscountIcon from "@mui/icons-material/Discount";
import {
  Container,
  Cta,
  Image,
  ImageWrapper,
  InfoWrapper,
  Price,
  ProductTitle,
} from "../../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";

// Defining props for SliderItem Component
export interface SliderItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    price:number;
    sale_price: number;
    backend_detail_url: string;
    sale_item : boolean
  };
  color?: string;
}

// The main component that is returned
const SliderItem = ({ item, color }: SliderItemProps) => {
  // Convert absolute image path to relative path
  const relativeImagePath = convertAbsolutePath(item.image);
 

  return (
    <Container>
      {/* This wraps around the image */}
      <ImageWrapper color={color}>
        {/* Displaying the image of the item in category */}
        <Image src={relativeImagePath} alt="image" />
      </ImageWrapper>
      {/* This wraps around all the information */}
      <InfoWrapper>
        <ProductTitle>{item.title}</ProductTitle>
        <Price isSale={item.sale_item}>
          {item.sale_item ? item.sale_price : item.price} {item.sale_item && <DiscountIcon style={{ fontSize: "small" }} />} Rs
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

// Function to convert absolute path to relative path
export const convertAbsolutePath = (absolutePath: string) => {
  // Assuming your absolute path starts with '/mnt/c/Users/Sheryar/PycharmProjects/construction_site/e_com_frontend/src/'
  const basePath = '/mnt/c/Users/Sheryar/PycharmProjects/construction_site/e_com_frontend/';
  
  return absolutePath.replace(basePath, ''); // Replace the base path with an empty string
};

export default SliderItem;
