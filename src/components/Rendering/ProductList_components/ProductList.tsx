
import {
  AllProductsContainer,
  Container,
  Header,
  PaginationWrapper,
  Message
} from "../../Styling/ProductListStyles/ProductList";

import FilterContainer from "./FilterContainer";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useReducer, createContext } from "react";
import { getProductList } from "../../ApiService/BuyerProductListAPI";
import { Arrow } from "../../Styling/ArrowStyles/SliderArrowStyles";

interface ProductListProps {
  type?: string | null;
  typeName?: string | null;
}

interface Action {
  type: "SET_NEXT_URL" | "SET_PREVIOUS_URL";
  payload: string;
}

interface State {
  next_url: string | null;
  previous_url: string | null;
}

interface PageLinkContextProps{
  pageLink: string | null;
  setPageLink: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PageLinkContext = createContext<PageLinkContextProps>({
  // Provide a default value
  pageLink: null,
  setPageLink: () => {},
});


// This is the main componet which is returned
const ProductList = ({ type, typeName }: ProductListProps) => {
  const [items, setItems] = useState([]);
  // The link which is sent to the getProductList  function to handle pagination
  const [pageLink, setPageLink] = useState<string | null>(null);
  // The reducer hook over here is handling the next and previous urls for the pagination links
  const [state, dispatch] = useReducer(reducer, {
    next_url: null,
    previous_url: null,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchData = async () => {
      try {
        const resp = await getProductList(type, typeName, true, pageLink);
        setPageLink(resp.link);
        setItems(resp.data);
        console.log(resp);
        dispatch({ type: "SET_NEXT_URL", payload: resp.next });
        dispatch({ type: "SET_PREVIOUS_URL", payload: resp.previous }); 
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    fetchData();
   
  }, [pageLink, type,typeName]);

  useEffect(() => {
    setPageLink(null);
  }, [type, typeName]);

  return (
    <PageLinkContext.Provider value={{ pageLink, setPageLink }}>
    <Container>
      {/*Importing the header from ProductList.tsx and using it to display the banner */}
      <Header>{decideHeader(type, typeName)}</Header>
          {/* This wil display the filter options */}
          <FilterContainer />
      {/*Displaying the products if they exist else giving a message */}
      <br/>
      {items.length > 0 ? (
        <>
          {/* This componet has all the products */}
          <AllProductsContainer>
            {items.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </AllProductsContainer>
          {/* This componet wraps around pagination row */}
          

          <PaginationWrapper>
          {  state.previous_url &&
          <Arrow direction="left" onClick={()=>{setPageLink(state.previous_url)}}>
        {/* This is being imported from mui */}
        <ArrowBackIosIcon
          sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
        />
      </Arrow>
}
      {state.next_url && <Arrow direction="right" onClick={()=>{setPageLink(state.next_url)}} >
            <ArrowForwardIosIcon
              sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
            />
          </Arrow>}
          </PaginationWrapper>
          
        </>
      ) : (
        <Message>There are no products of this category to show</Message>
      )}
  
    </Container>
    </PageLinkContext.Provider>
  );
};

const decideHeader = (type?: string | null, typeName?: string | null) => {
  if (
    type &&
    (type.toLowerCase() === "sale" ||
      type.toLowerCase() === "popular" ||
      type.toLowerCase() === "search")
  ) {
    return `${type.charAt(0).toUpperCase() + type.slice(1)} Items`;
  } else if (type && type.toLowerCase() === "category" && typeName) {
    return `${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;
  } else {
    return "Latest Items";
  }
};

export default ProductList;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_NEXT_URL":
      return { ...state, next_url: action.payload };
    case "SET_PREVIOUS_URL":
      return { ...state, previous_url: action.payload };
    default:
      return state;
  }
};
