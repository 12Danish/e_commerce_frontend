import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { categoriesInfo } from "../../assets/data";
import useSlideMovement from "../SliderMovement";
import { Arrow } from "../Styling/ArrowStyles/SliderArrowStyles";
import {
  MuiIconhoverStyle,
  ViewMore,
} from "../Styling/ArrowStyles/ViewMoreStyles";
import {
  ProductsContainer,
  SectionWrapper,
  Wrapper,
} from "../Styling/ProductSlider1Styles/Slider1Styles";
import { ProductSliderTitle } from "../Styling/SharedStyledElementsStyles";
import CategoryItem from "./SliderItem1";
import { bgColors } from "../Styling/ProductSlider1Styles/PrdouctSlider1ItemStyes";

// The main component which is returned
const Slider1 = () => {
  const { sliderIndex, handleClick } = useSlideMovement();

  const colorKeys = Object.keys(bgColors);
  const numColors = colorKeys.length;
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
            {categoriesInfo.map((item, index) => (
              // Calling the Categoryitem component to get the individual styled category items
              <CategoryItem
                item={item}
                key={item.id}
                color={bgColors[colorKeys[index % numColors]]}
              />
            ))}
            <ViewMore>
              View More
              <KeyboardDoubleArrowRightIcon
                style={{ backgroundColor: "transparent" }}
              />
            </ViewMore>
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right", 5)}>
            <ArrowForwardIos
              sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
            />
          </Arrow>
        </ProductsContainer>
      </SectionWrapper>
    </>
  );
};

export default Slider1;
