import { reviewsData } from "../../assets/data";
import ExistingReview from "./ExistingReview";
import {
  BoldHeading,
  Button,
  Desc,
} from "../Styling/SharedStyledElementsStyles";
import {
  AllReviewsWrapper,
  ButtonWrapper,
  Container,
  CounterWrapper,
  ExistingReviewsWrapper,
  Image,
  ImageAndInfoWrapper,
  ImageWrapper,
  InfoWrapper,
  NewReviewWrapper,
  NoReviewWrapper,
  NumberInput,
  Price,
  DescriptionWrapper,
  Title,
} from "../Styling/SingleProductDetailsStyles";
import AddReview from "./AddReview";
// These are the arguments this component accepts in order to dynamically render the data given to it
interface SingleProductDetailsProps {
  product: {
    id: number;
    img: string;
    title: string;
    price: number;
    desc: string;
  };
}
const SingleProductDetails = ({ product }: SingleProductDetailsProps) => {
  return (
    <Container>
      <ImageAndInfoWrapper>
        {/*This wraps around the image  */}
        <ImageWrapper>
          <Image src={product.img} />
        </ImageWrapper>
        {/*This wraps around all of the information */}
        <InfoWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}RS</Price>
          <DescriptionWrapper>
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhewjuaiednasdcewuidhewiuhdnewiuciudwjcbdhbnwdacewidcubducbniudcnkjwdbcwebcuewbdcjdasbchjdsb
          </DescriptionWrapper>
          {/* This wraps around the counter */}
          <CounterWrapper>
            <Desc>Quantity</Desc>
            {/*This is the input field */}
            <NumberInput
              type="number"
              inputMode="numeric"
              pattern="[1-9]*"
              defaultValue="1"
              placeholder="1"
              min="1"
              max="50"
            />
          </CounterWrapper>
          {/*This wrapper contains both of the two buttons */}
          <ButtonWrapper>
            <Button
              width="auto"
              bgcolor="#113869"
              fontcolor="white"
              bordercolor="white"
            >
              ADD TO CART
            </Button>
            <Button
              width="auto"
              bgcolor="#e2eef3"
              fontcolor="#113869"
              bordercolor="#113869"
            >
              BUY NOW
            </Button>
          </ButtonWrapper>
        </InfoWrapper>
      </ImageAndInfoWrapper>
      {/*This is the wrapper for all the reviews posted by different users */}
      <AllReviewsWrapper>
        {/*This condition first checks if the reviews exist then checks if the length is greater than zero
      if the conditions are true then the element is displayed */}
        {reviewsData && reviewsData.length > 0 && (
          <ExistingReviewsWrapper>
            <BoldHeading fontcolor="#113869" backgroundColor="transparent">Reviews By Customers</BoldHeading>
            {/* Mapping each data entry to a review component defined seprately*/}
            {reviewsData.map((review) => (
              <ExistingReview data={review} key={review.id} />
            ))}
            <Button
              width="auto"
              bgcolor="#113869"
              fontcolor="white"
              bordercolor="white"
            >
              Load More
            </Button>
          </ExistingReviewsWrapper>
        )}
        {/* If there are no reviews then this is displayed*/}
        {reviewsData.length == 0 && (
          <ExistingReviewsWrapper>
            <NoReviewWrapper>
              <BoldHeading fontcolor="#113869" backgroundColor="transparent">
                There are no reviews for this product.
              </BoldHeading>
            </NoReviewWrapper>
          </ExistingReviewsWrapper>
        )}
        {/* Section for adding a new review */}
        <NewReviewWrapper>
          <BoldHeading fontcolor="#113869" backgroundColor="transparent">
            Have You Tried This Product? Leave A Review.
          </BoldHeading>
          <AddReview />
          <Button
            width="auto"
            bgcolor="#113869"
            fontcolor="white"
            bordercolor="white"
          >
            Post Review
          </Button>
        </NewReviewWrapper>
      </AllReviewsWrapper>
    </Container>
  );
};

export default SingleProductDetails;
