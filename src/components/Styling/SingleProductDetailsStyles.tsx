import styled from "styled-components";
// This wraps around all the product details
export const Container = styled.div`
  display: flex;
  height: 200vh;
  width: 1240px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    height: 250vh;
  }
`;
// This wrapper wraps around the Image and all the descriptions for the product
export const ImageAndInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 50px;
  display: flex;

  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
// This wraps around the image
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
// This is acrtuallyt the Image element
export const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    width: 95%;
  }
`;
// This wraps around all of the information
export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  padding: 20px 50px;
  flex-direction: column;
  border: solid;
  border-width: 1px;
  border-color: #191970;

  @media only screen and (max-width: 480px) {
    padding: 20px 7px;
  }
`;
export const DescriptionWrapper = styled.div`
   max-width: 400px;
  display: inline-block;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
// This describes the title
export const Title = styled.h1`
  flex: 1;
  max-width: 500px;
  font-size: 40px;
`;

//This eleemnt styled the price
export const Price = styled.span`
  flex: 1;
  font-size: 30px;
  max-width: 500px;
  color: red;
`;
// This wraps around the whole counter
export const CounterWrapper = styled.div`
  flex: 1;
  width: 60px;
  margin-bottom: 10px;
`;
// This is the input field
export const NumberInput = styled.input`
  width: 100%;
  border: solid;
  border-width: 1px;
  padding: 5px;
  text-align: center;
  font-weight: 700;
`;
// This is the wrapper for the buttons
export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 50%;
  margin-top: 60px;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;
// This wraps around both of the reviews section
export const AllReviewsWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: #f8f8ff;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    flex: 1.5;
  }
`;
// This is the wrapper for all the reviews
export const ExistingReviewsWrapper = styled.div`
  flex: 1;
  padding: 7px;
  margin-right: 100px;;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100vh;
  overflow-x: hidden;

  @media only screen and (max-width: 480px) {
    flex: 1.8;
  }
`;
// This wraps around the message of no reviews when there are no reviews
export const NoReviewWrapper = styled.div`
  margin-top: 30%;
  @media only screen and (max-width: 480px) {
    margin-top: 100%;
    margin-left: 20px;
  }
`;

//This is the wrapper for adding a new review
export const NewReviewWrapper = styled.div`
  flex: 1;
  padding: 7px;
  display: flex;
  background-color: #e2eef3;
  flex-direction: column;
  overflow: hidden;
`;
