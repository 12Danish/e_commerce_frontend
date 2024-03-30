import {
  Container,
  Option,
  Filter1,
  Filter2,
  FilterText,
  Select,
} from "./Styling/FilterContainerStyles";

const FilterContainer = () => {
  return (
    <Container>
      {/*This is the Filter Products option */}
      <Filter1>
        <FilterText>Filter Products</FilterText>
        <Select>
          <Option>Products under 10k</Option>
          <Option>Products under 20k</Option>
          <Option>Products under 30k</Option>
          <Option>Products under 40k</Option>
          <Option>Products under 50k</Option>
          <Option>Products over 50k</Option>
        </Select>
      </Filter1>
      {/*This is the Sort Products option */}
      <Filter2>
        <FilterText>Sort Products</FilterText>
        <Select>
          <Option>Price High to Low </Option>
          <Option>Price Low to High </Option>
          <Option>Date Published</Option>
        </Select>
      </Filter2>
    </Container>
  );
};

export default FilterContainer;
