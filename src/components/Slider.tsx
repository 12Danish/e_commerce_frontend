import { useState } from "react";
// Importing left arrow Image fromn mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Importing right arrow image from mui
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Importing data in JSON format
import { sliderInfo } from "../assets/data";
//Importing button from shared styled styled elements
import { Button } from "./Styling/SharedStyledElementsStyles";
import {
  Arrow,
  Container,
  Desc,
  Image,
  ImageWrapper,
  InfoWrapper,
  Slide,
  Title,
  Wrapper,
} from "./Styling/SliderStyles";
// This container is the top most level element
// This is the main component which is returned
const Slider = () => {
  // sliderIndex is the state value and handleClick is function
  const { sliderIndex, handleClick } = useSlideMovement();
  return (
    <Container>
      {/* This component contains the left arrow and I need to remove hard coding here */}
      <Arrow direction="left" onClick={() => handleClick("left", 3)}>
        {/* This is being imported from mui */}
        <ArrowBackIosIcon sx={{ color: "#f8f8ff", fontSize: 30 }} />
      </Arrow>
      {/* This wrapper wraps around all of the slides */}
      <Wrapper slideindex={sliderIndex}>
        {sliderInfo.map((item) => (
          <Slide key={item.id} bgcolor={item.bg}>
            {/* This wraps around the image*/}
            <ImageWrapper>
              {/* Linking the image over here  */}
              <Image src={item.img} />
            </ImageWrapper>
            {/* This wraps around all of the info*/}
            <InfoWrapper>
              <Title color={item.h1Color}>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button
                bgcolor="#191970"
                fontcolor="white"
                bordercolor="white"
                width="auto"
              >
                {item.button_name}
              </Button>
            </InfoWrapper>
          </Slide>
        ))}
      </Wrapper>
      {/* This wraps around the right arrow  */}
      <Arrow direction="right" onClick={() => handleClick("right", 3)}>
        <ArrowForwardIosIcon sx={{ color: "#f8f8ff", fontSize: 30 }} />
      </Arrow>
    </Container>
  );
};

// This function handles the state and the logic for the slide movement
function useSlideMovement() {
  const [sliderIndex, setSliderIndex] = useState(0);
  // This function takes the direction(left or right) as argument and sets the value of slider index accordingly
  const handleClick = (direction: string, maxSlides: number) => {
    // Starting the counter from zero
    maxSlides -= 1;
    // This runs when the user clicks the left arrow
    if (direction === "left") {
      // Checking if slider index is 0 then moving to last slide
      if (sliderIndex > 0) {
        setSliderIndex(sliderIndex - 1);
      }
      // Moving to the previous slide by changing sliderIndex value
      else {
        setSliderIndex(maxSlides);
      }
    }
    // This runs when the user clicks the right arrow
    else if (direction === "right") {
      // Checking if the user is on the last slide if so taking him back to the first slide
      if (sliderIndex === maxSlides) {
        setSliderIndex(0);
      }
      // Taking user to the next slide
      else {
        setSliderIndex(sliderIndex + 1);
      }
    }
  };
  return { sliderIndex, handleClick };
}

export default Slider;
