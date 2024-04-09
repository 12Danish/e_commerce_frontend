// Importing left arrow Image fromn mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Importing right arrow image from mui
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Importing data in JSON format
import { topSliderInfo } from "../../assets/data";
//Importing button from shared styled styled elements
import { Arrow } from "../Styling/ArrowStyles/SliderArrowStyles";
import { Button } from "../Styling/SharedStyledElementsStyles";
import {
  Slide1,
  Slide1Desc,
  Slide1Image,
  Slide1ImageWrapper,
  Slide1InfoWrapper,
  Slide1Title,
} from "../Styling/TopSlider/Slide1Styles";
import {
  Slide2,
  Slide2ButtonWrapper,
  Slide2Image,
  Slide2ImageWrapper,
  Slide2Rectangle,
  Slide2Title,
} from "../Styling/TopSlider/Slide2Styles";
import {
  Slide3,
  Slide3ButtonWrapper,
  Slide3Image,
  Slide3ImageWrapper,
  Slide3Title1,
  Slide3Title2,
} from "../Styling/TopSlider/Slide3Styles";
import { Container, Wrapper } from "../Styling/TopSlider/SliderStyles";

import useSlideMovement from "../SliderMovement";
// This container is the top most level element
// This is the main component which is returned
const TopSlider = () => {
  // sliderIndex is the state value and handleClick is function
  const { sliderIndex, handleClick } = useSlideMovement();
  return (
    <Container>
      {/* This component contains the left arrow and I need to remove hard coding here */}
      <Arrow direction="left" onClick={() => handleClick("left", 3)}>
        {/* This is being imported from mui */}
        <ArrowBackIosIcon
          sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
        />
      </Arrow>
      {/* This wrapper wraps around all of the slides */}
      <Wrapper slideindex={sliderIndex}>
        {topSliderInfo.map(
          (item) =>
            (item.key == 1 && (
              <Slide1 key={item.id}>
                {/* This wraps around the image*/}
                <Slide1ImageWrapper>
                  {/* Linking the image over here  */}
                  <Slide1Image src={item.img} />
                </Slide1ImageWrapper>
                {/* This wraps around all of the info*/}
                <Slide1Title color={item.h1Color}>{item.title}</Slide1Title>

                <Slide1InfoWrapper>
                  <Slide1Desc>{item.desc}</Slide1Desc>
                  <Button
                    bgcolor="#113869"
                    fontcolor="white"
                    bordercolor="white"
                    width="auto"
                  >
                    {item.button_name}
                  </Button>
                </Slide1InfoWrapper>
              </Slide1>
            )) ||
            (item.key == 2 && (
              <Slide2 key={item.id}>
                {/* This wraps around the image*/}
                <Slide2ImageWrapper>
                  {/* Linking the image over here  */}
                  <Slide2Image src={item.img} />
                </Slide2ImageWrapper>
                {/* This wraps around all of the info*/}
                <Slide2Rectangle />
                <Slide2Title>{item.title}</Slide2Title>
                <Slide2ButtonWrapper>
                  <Button
                    bgcolor="black"
                    fontcolor="#fdd835"
                    bordercolor="white"
                    width="auto"
                  >
                    {item.button_name}
                  </Button>
                </Slide2ButtonWrapper>
              </Slide2>
            )) ||
            (item.key == 3 && (
              <Slide3 key={item.id}>
                {/* This wraps around the image*/}
                <Slide3ImageWrapper>
                  <Slide3Image src={item.img3} />
                </Slide3ImageWrapper>
                <Slide3Title1>{item.title1}</Slide3Title1>
                <Slide3Title2>{item.title2}</Slide3Title2>
                {/* This wraps around all of the info*/}
                <Slide3ButtonWrapper>
                  <Button
                    bgcolor="pink"
                    fontcolor="black"
                    bordercolor="white"
                    width="auto"
                  >
                    {item.button_name}
                  </Button>
                </Slide3ButtonWrapper>
              </Slide3>
            ))
        )}
      </Wrapper>
      {/* This wraps around the right arrow  */}
      <Arrow direction="right" onClick={() => handleClick("right", 3)}>
        <ArrowForwardIosIcon
          sx={{ color: "#f8f8ff", fontSize: 30, bgcolor: "transparent" }}
        />
      </Arrow>
    </Container>
  );
};

export default TopSlider;
