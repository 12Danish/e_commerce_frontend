import StarIcon from "@mui/icons-material/Star";
import {
  CommentBox,
  Container,
  StarsWrapper,
} from "./Styling/ExistingReviewStyles";
import { Desc, Name } from "./Styling/SharedStyledElementsStyles";

// This accepts props for the component
interface ExitingReviewProps {
  data: {
    id: number;
    name: string;
    stars: number;
    review: string;
  };
}
// This is the main  component which is retuened
const ExistingReview = ({ data }: ExitingReviewProps) => {
  // This function handles displaying the stars
  const handleDisplayStars = (stars: number) => {
    // Creating an array of undefined elements upto the length specified
    const starsArray = Array.from({ length: stars });
    // mapping each of those elements to a strar and returning them
    return starsArray.map((_, index) => (
      <StarIcon key={index} sx={{ color: "#e0c00b" }} />
    ));
  };
  return (
    <Container>
      {/*This is the tag for the name of the person with all the needed styling */}
      <Name>{data.name}</Name>
      {/*This wraps around all the stars */}
      <StarsWrapper>{handleDisplayStars(data.stars)}</StarsWrapper>
      {/*This wraps arround the comment posted by the other users */}
      <CommentBox>
        <Desc>{data.review}</Desc>
      </CommentBox>
    </Container>
  );
};

export default ExistingReview;
