import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Arrow } from "../../Styling/ArrowStyles/SliderArrowStyles";
import { ViewAll } from "../../Styling/ArrowStyles/ViewMoreStyles";
import { linkStyle } from "../../Styling/LinkStyles";
import {
  ProductsContainer,
  SectionWrapper,
  Wrapper,
} from "../../Styling/ProductSlider2Styles/Slider2Styles";
import { ProductSliderTitle } from "../../Styling/SharedStyledElementsStyles";
import useSlideMovement from "../SliderMovement";
import SliderItem2 from "./SliderItem2";
import { getProductList } from "../../ApiService/BuyerProductListAPI";

// The main component which is returned
const Slider2 = () => {
  const { sliderIndex, handleClick } = useSlideMovement();
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchData = async (
    ) => {
      try {
        const data = await getProductList("popular");
        setPopularItems(data);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SectionWrapper>
        <ProductSliderTitle>Popular Picks</ProductSliderTitle>
        <ProductsContainer>
          {/* This component contains the left arrow and I need to remove hard coding here */}
          <Arrow direction="left" onClick={() => handleClick("left", 6)}>
            {/* This is being imported from mui */}
            <ArrowBackIos
              sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
            />
          </Arrow>
          {/* This component wraps around all the categories  */}
          <Wrapper slideindex={sliderIndex}>
            {/* Getting Data from categoriesInfo and mapping it to individual items */}
            {popularItems.slice(0, 8).map((item, index) => (
              // Calling the Categoryitem component to get the individual styled category items
              <SliderItem2 item={item} key={item.id} />
            ))}
            <Link to="/product_list/popular" style={linkStyle}>
              <ViewAll position={{ right: -200, top: 110 }}>
                View All
                <KeyboardDoubleArrowRightIcon
                  style={{ backgroundColor: "transparent" }}
                />
              </ViewAll>
            </Link>
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right", 6)}>
            <ArrowForwardIos
              sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
            />
          </Arrow>
        </ProductsContainer>
        <Outlet />
      </SectionWrapper>
    </>
  );
};

export default Slider2;
