import { SaleSliderInfo } from "../../assets/data";
import {
  SaleSlideDesc,
  SaleSlideInfoWrapper,
  SaleSliderButtonWrapper,
  SaleSliderContainer,
  SaleSliderImage,
  SaleSliderImageWrapper,
  SaleSliderRectangle,
  SaleSliderTitle,
} from "../Styling/SaleSliderStyles/SaleSliderStyles";

import { Link, Outlet } from "react-router-dom";
import { linkStyle } from "../Styling/LinkStyles";
import { blue_color } from "../Styling/SharedStyledElementsStyles";
import { Button } from "../Styling/SharedStyledElementsStyles";
const SaleSlider = () => {
  return (
    <>
      <SaleSliderContainer>
        <SaleSliderImageWrapper>
          <SaleSliderImage src={SaleSliderInfo.img} />
        </SaleSliderImageWrapper>

        <SaleSliderRectangle />
        <SaleSliderTitle>{SaleSliderInfo.title}</SaleSliderTitle>
        <SaleSlideInfoWrapper>
          <SaleSlideDesc>{SaleSliderInfo.desc}</SaleSlideDesc>
        </SaleSlideInfoWrapper>
        <SaleSliderButtonWrapper>
        <Link to="/product_list/sale" style={linkStyle}>
          <Button
            bgcolor={blue_color}
            fontcolor="white"
            bordercolor="white"
            width="auto"
          >
            {SaleSliderInfo.button_name}
          </Button>
          </Link>
        </SaleSliderButtonWrapper>
        <Outlet />
      </SaleSliderContainer>
    </>
  );
};

export default SaleSlider;
