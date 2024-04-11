import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { categoriesInfo } from "../../assets/data";
import useSlideMovement from "../SliderMovement";
import { Arrow } from "../Styling/ArrowStyles/SliderArrowStyles";
import { ViewAll } from "../Styling/ArrowStyles/ViewMoreStyles";
import {
  ProductsContainer,
  SectionWrapper,
  Wrapper,
} from "../Styling/ProductSlider2Styles/Slider2Styles";
import { ProductSliderTitle } from "../Styling/SharedStyledElementsStyles";
import CategoryItem from "./CategoryItem";

// The main component which is returned
const Categories = () => {
  const { sliderIndex, handleClick } = useSlideMovement();

  return (
    <>
      <SectionWrapper>
        <ProductSliderTitle>Categories</ProductSliderTitle>
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
              <CategoryItem item={item} key={item.id} />
            ))}
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

export default Categories;
