import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Circle,
  Container,
  IconWrapper,
  Image,
  Info,
  InfoWrapper,
} from "../../Styling/ProductListStyles/ProductStyles";
import { Icon } from "../../Styling/SharedStyledElementsStyles";
// These are the arguments this component accepts in order to dynamically render the data given to it
import { ListItemProps } from "../SharedElements";

// This is the main component which is returned
const Product = ({item}: ListItemProps)  => {
  return (
    <Container>
      {/*Displaying the Circle over here  */}
      <Circle />
      {/*Linking the image */}
      <Image src={item.image} />
      <InfoWrapper>
        {/* Adding the title */}
        <Info>{item.title}</Info>
        {/* Adding the price */}
        <Info>{item.price}RS</Info>
      </InfoWrapper>
      <IconWrapper>
        {/* Adding icon */}
        <Icon bgColor="white" hoverColor="#e2e2e2">
          <ShoppingCartIcon
            style={{ backgroundColor: "transparent" }}
          ></ShoppingCartIcon>
        </Icon>
      </IconWrapper>
    </Container>
  );
};

export default Product;
