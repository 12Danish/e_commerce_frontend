import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Circle,
  Container,
  IconWrapper,
  Image,
  Info,
  InfoWrapper,
} from "../../../ProductStyles";
import { Icon } from "../Styling/SharedStyledElementsStyles";
// These are the arguments this component accepts in order to dynamically render the data given to it
interface ProductProps {
  product: {
    id: number;
    img: string;
    title: string;
    price: number;
  };
}

// This is the main component which is returned
const Product = ({ product }: ProductProps) => {
  return (
    <Container>
      {/*Displaying the Circle over here  */}
      <Circle />
      {/*Linking the image */}
      <Image src={product.img} />
      <InfoWrapper>
        {/* Adding the title */}
        <Info>{product.title}</Info>
        {/* Adding the price */}
        <Info>{product.price}RS</Info>
      </InfoWrapper>
      <IconWrapper>
        {/* Adding icon */}
        <Icon>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Icon>
      </IconWrapper>
    </Container>
  );
};

export default Product;
