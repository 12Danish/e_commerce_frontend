import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Arrow } from "../../Styling/ArrowStyles/SliderArrowStyles";
import { ViewAll } from "../../Styling/ArrowStyles/ViewMoreStyles";
import { bgColors } from "../../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";
import {
  ProductsContainer,
  SectionWrapper,
  Wrapper,
} from "../../Styling/ProductSlider1Styles/Slider1Styles";
import { ProductSliderTitle } from "../../Styling/SharedStyledElementsStyles";
import useSlideMovement from "../SliderMovement";
import SliderItem from "./SliderItem1";

import { useEffect, useState } from "react";
import { getProductList } from "../../ApiService/BuyerProductListAPI";
import { Link, Outlet } from "react-router-dom";
import { linkStyle } from "../../Styling/LinkStyles";
// The main component which is returned
const Slider1 = () => {
  const { sliderIndex, handleClick } = useSlideMovement();
  const colorKeys = Object.keys(bgColors);
  const numColors = colorKeys.length;
  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    fetchData(setLatestItems, null);
  }, []);
  return (
    <>
      <SectionWrapper>
        <ProductSliderTitle>New Products</ProductSliderTitle>
        <ProductsContainer>
          {/* This component contains the left arrow and I need to remove hard coding here */}
          <Arrow direction="left" onClick={() => handleClick("left", 5)}>
            {/* This is being imported from mui */}
            <ArrowBackIos
              sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
            />
          </Arrow>
          {/* This component wraps around all the categories  */}
          <Wrapper slideindex={sliderIndex}>
            {/* Getting Data from categoriesInfo and mapping it to individual items */}
            {latestItems.slice(0, 8).map((item, index) => (
              // Calling the Categoryitem component to get the individual styled category items
              <SliderItem
                item={item}
                key={item.id}
                color={bgColors[colorKeys[index % numColors]]}
              />
            ))}
          
          <Link to="/product_list" style={linkStyle}>
            <ViewAll position={{ right: -200, top: 25 }}>
              View All
              <KeyboardDoubleArrowRightIcon
                style={{ backgroundColor: "transparent" }}
              />
            </ViewAll>
            </Link>
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right", 5)}>
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

export const fetchData = async (
  setItems: React.Dispatch<React.SetStateAction<never[]>>,
  type : String | null
) => {
  try {
    const data = await getProductList(type);
    setItems(data);
  } catch (error) {
    console.error("Error fetching product list:", error);
  }
};

export default Slider1;
