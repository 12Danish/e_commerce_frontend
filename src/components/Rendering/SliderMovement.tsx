import { useState } from "react";

export default function useSlideMovement() {
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
