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
