import { categoriesInfo } from "../assets/data";
import CategoryItem from "./CategoryItem";
import { AllCategoriesWrapper, Container } from "./Styling/CategoriesStyles";
import { Header } from "./Styling/SharedStyledElementsStyles";

// The main component which is returned
const Categories = () => {
  return (
    <Container>
      {/* Wrapping the Header */}
      <Header>Categories</Header>
      {/* This component wraps around all the categories  */}
      <AllCategoriesWrapper>
        {/* Getting Data from categoriesInfo and mapping it to individual items */}
        {categoriesInfo.map((item) => (
          // Calling the Categoryitem component to get the individual styled category items
          <CategoryItem item={item} key={item.id} />
        ))}
      </AllCategoriesWrapper>
    </Container>
  );
};

export default Categories;
