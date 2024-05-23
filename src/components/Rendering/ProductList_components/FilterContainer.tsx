import { useContext } from "react";
import {
  Container,
  Filter1,
  Filter2,
  FilterText,
  Option,
  Select,
} from "../../Styling/ProductListStyles/FilterContainerStyles";

import { PageLinkContext } from "./ProductList";

interface FilterParams {
  filter_details: string;
}

const FilterContainer = () => {
  // Getting the page Link from the context provided by the parent
  const { pageLink, setPageLink, setLinkReRender,linkReRender } = useContext(PageLinkContext);

  // This  function handles generating the correct the url for performing filtration
  const generateFilterLink = ({ filter_details }: FilterParams) => {
    // splitting to get separate values
    const [filter_type, filter_amount] = filter_details.split("-");
    // separating the baseUrl from the filter parameters
    const baseUrl = pageLink?.split("filter_type=")[0];
    console.log(pageLink);
    // making sure pageLink is available
    if (pageLink && filter_amount != "" && !pageLink?.includes(filter_amount)) {
      // checking if url already has filter parameters
      if (pageLink.includes("filter_type=")) {
        setPageLink(
          `${baseUrl}filter_type=${filter_type}&filter_amount=${filter_amount}`
        );
      } else {
        if (pageLink.includes("?"))
          setPageLink(
            `${pageLink}&filter_type=${filter_type}&filter_amount=${filter_amount}`
          );
        else {
          setPageLink(
            `${pageLink}?filter_type=${filter_type}&filter_amount=${filter_amount}`
          );
        }
      }
    } else if (baseUrl && baseUrl != pageLink) {
      setPageLink(baseUrl);
    }
    
    setLinkReRender(!linkReRender);
  };
  const generateSortLink = () =>{

  }
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    generateFilterLink({ filter_details: e.target.value });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    generateSortLink({ sort_details: e.target.value });
  };

  return (
    <Container>
      {/* This is the Filter Products option */}
      <Filter1>
        <FilterText>Filter Products</FilterText>
        <Select onChange={handleFilterChange}>
          <Option value="">None</Option>
          <Option value="lte-10000">Products under 10k</Option>
          <Option value="lte-20000">Products under 20k</Option>
          <Option value="lte-30000">Products under 30k</Option>
          <Option value="lte-40000">Products under 40k</Option>
          <Option value="lte-50000">Products under 50k</Option>
          <Option value="gte-50000">Products over 50k</Option>
        </Select>
      </Filter1>
      {/* This is the Sort Products option */}
      <Filter2>
        <FilterText>Sort Products</FilterText>
        <Select>
          <Option>None</Option>
          <Option value="price">Price High to Low</Option>
          <Option>Price Low to High</Option>
          <Option>Date Published</Option>
        </Select>
      </Filter2>
    </Container>
  );
};

export default FilterContainer;
