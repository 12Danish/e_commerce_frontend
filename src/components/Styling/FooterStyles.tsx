import styled from "styled-components";

// This is the top-most container
export const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
// This wraps around all the elements in the left
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const Description = styled.div`
  font-size: 23px;
  margin: 25px 0px;
`;
// This wraps around all the social media icone
export const SocialContainer = styled.div`
  display: flex;
`;

interface SocialIconProps {
  color: string;
}
// This wraps around each Icon
export const SocialIcon = styled.div<SocialIconProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
`;
// This wraps around all elements in the center
export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
// Designing the heading for the sections in the center and on the right
export const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
`;
// Designing the list for all the quick links
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
// Designing each item within the list
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 23px;
`;
// This wraps around all elements on the right
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const ContactItem = styled.div`
  display: flex;
  font-size: 23px;
  align-items: center;
  margin: 8px;
`;