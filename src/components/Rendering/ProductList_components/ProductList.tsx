import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinearProgress from "@mui/material/LinearProgress";
import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { getProductList } from "../../ApiService/BuyerProductListAPI";
import { Arrow } from "../../Styling/ArrowStyles/SliderArrowStyles";
import {
  AllProductsContainer,
  Container,
  Header,
  Message,
  PaginationWrapper,
} from "../../Styling/ProductListStyles/ProductList";
import FilterContainer from "./FilterContainer";
import Product from "./Product";

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

interface PageLinkContextProps {
  pageLink: string | null;
  setPageLink: React.Dispatch<React.SetStateAction<string | null>>;
  linkReRender: boolean;
  setLinkReRender: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PageLinkContext = createContext<PageLinkContextProps>({
  // Provide a default value
  pageLink: null,
  setPageLink: () => {},
  linkReRender: false,
  setLinkReRender: () => {},
});

// This is the main componet which is returned
const ProductList = ({ type, typeName }: ProductListProps) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  // The link which is sent to the getProductList  function to handle pagination
  const [pageLink, setPageLink] = useState<string | null>(null);

  // This is a toggle which helps in deciding when to re render
  const [linkReRender, setLinkReRender] = useState(false);
  // The reducer hook over here is handling the next and previous urls for the pagination links
  const [state, dispatch] = useReducer(reducer, {
    next_url: null,
    previous_url: null,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchData = async () => {
      try {
        console.log("THIS IS PAGELINK  " + pageLink);
        console.log("THIS IS TYPE " + type);
        console.log("THIS IS TYPENAME " + typeName);
        setLoading(true);
        const resp = await getProductList(type, typeName, true, pageLink);
        setPageLink(resp.link);
        setItems(resp.data);
        console.log(resp);
        dispatch({ type: "SET_NEXT_URL", payload: resp.next });
        dispatch({ type: "SET_PREVIOUS_URL", payload: resp.previous });
      } catch (error) {
        console.error("Error fetching product list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [linkReRender]);
  useEffect(() => {
    setPageLink(null);
    setLinkReRender(!linkReRender);
    console.log("Page Link has been set to null.");
  }, [type, typeName]);
  return (
    <PageLinkContext.Provider
      value={{ pageLink, setPageLink, setLinkReRender, linkReRender }}
    >
      <Container>
        {/* Importing the header from ProductList.tsx and using it to display the banner */}
        <Header>{decideHeader(type, typeName)}</Header>
        {/* This will display the filter options */}
        <FilterContainer />
        {/* Displaying the products, pagination, or message */}
        <br />
        {loading ? (
          <LinearProgress />
        ) : items.length > 0 ? (
          <>
            {/* This component has all the products */}
            <AllProductsContainer>
              {items.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </AllProductsContainer>

            {/* Pagination */}
            <PaginationWrapper>
              {state.previous_url && (
                <Arrow
                  direction="left"
                  onClick={() => {
                    setPageLink(state.previous_url);
                    setLinkReRender(!linkReRender);
                  }}
                >
                  <ArrowBackIosIcon
                    sx={{
                      color: "#f8f8ff",
                      fontSize: 30,
                      bgcolor: "transparent",
                    }}
                  />
                </Arrow>
              )}
              {state.next_url && (
                <Arrow
                  direction="right"
                  onClick={() => {
                    setPageLink(state.next_url);
                    setLinkReRender(!linkReRender);
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      color: "#f8f8ff",
                      fontSize: 30,
                      bgcolor: "transparent",
                    }}
                  />
                </Arrow>
              )}
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
