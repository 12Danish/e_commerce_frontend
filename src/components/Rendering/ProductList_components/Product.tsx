import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Circle,
  Container,
  IconWrapper,
  Image,
  Info,
  InfoWrapper,
  ImageWrapper
} from "../../Styling/ProductListStyles/ProductStyles";
import { Icon } from "../../Styling/SharedStyledElementsStyles";
// These are the arguments this component accepts in order to dynamically render the data given to it
import { ListItemProps } from "../SharedElements";
import { productLinkStyle } from "../../Styling/LinkStyles";
import { Link, Outlet } from "react-router-dom";
import { EditedPrice } from "../SharedElements";
import { convertAbsolutePath } from "../SharedElements";
// This is the main component which is returned
const Product = ({ item }: ListItemProps) => {
  return (
    <Container>
      <Link to={`/product_detail/${item.id}`} style={productLinkStyle}>
        {/*Displaying the Circle over here  */}
        <Circle />
        <ImageWrapper>
        {/*Linking the image */}
        <Image src={convertAbsolutePath(item.image)} alt="image"/>
        </ImageWrapper>
        <InfoWrapper>
          {/* Adding the title */}
          <Info>{item.title}</Info>
          {/* Adding the price */}
          <Info>
           
            <EditedPrice item={item} />
   
          </Info>
        </InfoWrapper>
        <IconWrapper>
          {/* Adding icon */}
          <Icon bgColor="white" hoverColor="#e2e2e2">
            <ShoppingCartIcon
              style={{ backgroundColor: "transparent" }}
            ></ShoppingCartIcon>
          </Icon>
        </IconWrapper>
      </Link>
      <Outlet />
    </Container>
  );
};

export default Product;
