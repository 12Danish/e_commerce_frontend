import { Add, Remove } from "@mui/icons-material";
import {
  Details,
  Image,
  PriceDetails,
  Pricetext,
  Product,
  ProductDetail,
  QuantityWrapper,
} from "../Styling/CartStyles/CartProductStyles";
import { Desc } from "../Styling/SharedStyledElementsStyles";

// This are the props for each product within the cart
interface CartProductProps {
  item: {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
    totalprice: number;
  };
}

const CartProduct = ({ item }: CartProductProps) => {
  return (
    <Product>
      {/*This is the wrapper for the image and the details */}
      <ProductDetail>
        {/*Displaying the image entered by the user */}
        <Image src={item.img} />
        <Details>
          <Desc>
            {/*Displaying the product name  entered by the user */}
          Product Name: {item.title}
          </Desc>
          <Desc>
            {/*Displaying the product Id entered by the user */}
          Product Id: {item.id}
          </Desc>
        </Details>
      </ProductDetail>
      {/* This section includes the price and quantity details */}
      <PriceDetails>
        <QuantityWrapper>
          <Remove />
          {item.quantity}
          <Add />
        </QuantityWrapper>
        <Pricetext>Price: {item.totalprice}RS</Pricetext>
      </PriceDetails>
    </Product>
  );
};

export default CartProduct;
