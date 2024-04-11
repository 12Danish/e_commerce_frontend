import {
  SaleSliderContainer,
  SaleSliderButtonWrapper,
  SaleSliderImage,
  SaleSliderImageWrapper,
  SaleSliderRectangle,
  SaleSliderTitle,
  SaleSlideDesc,
  SaleSlideInfoWrapper,
} from "./Styling/SaleSliderStyles/SaleSliderStyles";
import { SaleSliderInfo } from "../assets/data";
import { Button } from "./Styling/SharedStyledElementsStyles";
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
          <Button
            bgcolor="#113869"
            fontcolor="white"
            bordercolor="white"
            width="auto"
          >
            {SaleSliderInfo.button_name}
          </Button>
        </SaleSliderButtonWrapper>
      </SaleSliderContainer>
    </>
  );
};

export default SaleSlider;
