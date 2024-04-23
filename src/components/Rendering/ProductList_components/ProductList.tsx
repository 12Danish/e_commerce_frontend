import Pagination from "@mui/material/Pagination";
import { productsInfo } from "../../../assets/data";
import {
  AllProductsContainer,
  Container,
  Header,
  PaginationWrapper,
} from "../../Styling/ProductListStyles/ProductList";
import { Title } from "../../Styling/SharedStyledElementsStyles";
import FilterContainer from "./FilterContainer";
import Product from "./Product";
import { linkStyle } from "../../Styling/LinkStyles";
import { Link, Outlet } from "react-router-dom";
interface ProductListProps {
  type?: string | null;
  typeName?: string | null;
}
// This is the main componet which is returned
const ProductList = ({ type, typeName }: ProductListProps) => {
  return (
    <Container>
      {/*Importing the header from ProductList.tsx and using it to display the banner */}
      <Header>{decideHeader(type, typeName)}</Header>
      {/*Displaying the products if they exist else giving a message */}
      {productsInfo.length > 0 ? (
        <>
          {/* This wil display the filter options */}
          <FilterContainer />
          {/* This componet has all the products */}
          <AllProductsContainer>
            {productsInfo.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </AllProductsContainer>
          {/* This componet wraps around pagination row */}
          <PaginationWrapper>
            <Pagination count={10} variant="outlined" color="primary" />
          </PaginationWrapper>
        </>
      ) : (
        <Title>There are no products of this category to show</Title>
      )}
    </Container>
  );
};

const decideHeader = (type?: string | null, typeName?: string | null) => {
  if (type?.toLowerCase() == "sale" || type?.toLowerCase() == "popular" || type?.toLowerCase() == "search") {
    return `${type.charAt(0).toUpperCase() + type.slice(1)} Items`;
  } else if (type?.toLowerCase() == "category") {
    return `${typeName?.charAt(0).toUpperCase() + typeName?.slice(1)}`;
  } else {
    return "Latest Items";
  }
};

export default ProductList;
