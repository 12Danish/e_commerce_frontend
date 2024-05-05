import {
  Product,
  ProductDetail,
  Details,
  Image,
  ImageWrapper,
} from "../../Styling/NavbarStyles/SearchResultStyles";
import { convertAbsolutePath, ListItemProps } from "../SharedElements";
import { Link, Outlet } from "react-router-dom";
import { productLinkStyle } from "../../Styling/LinkStyles";
const SearchResults = ({ item }: ListItemProps) => {
    console.log()
  return (
    <>
      <Link to={`/product_detail/${item.id}`} style={productLinkStyle}>
        <Product>
          <ProductDetail>
            <ImageWrapper>
              <Image src={convertAbsolutePath(item.image)} alt="image" />
            </ImageWrapper>
            <Details>{item.title}</Details>
          </ProductDetail>
        </Product>
      </Link>
      <Outlet />
    </>
  );
};

export default SearchResults;
