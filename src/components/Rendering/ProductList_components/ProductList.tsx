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

interface ProductListProps {
  heading_name?: string;
}
// This is the main componet which is returned
const ProductList = ({
  heading_name = "Popular Products",
}: ProductListProps) => {
  return (
    <Container>
      {/*Importing the header from ProductList.tsx and using it to display the banner */}
      <Header>{heading_name}</Header>
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

export default ProductList;
