// Importing this as the code is thr same
import { BoldHeading } from "./Styling/SharedStyledElementsStyles";
//Importing facebook Icon
import FacebookIcon from "@mui/icons-material/Facebook";
//Importing Instgram icon
import InstagramIcon from "@mui/icons-material/Instagram";
//Importing Map Icon
import MapIcon from "@mui/icons-material/Map";
//Importing Phone Icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//Importing mail Icon
import MailIcon from "@mui/icons-material/Mail";
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./Styling/FooterStyles";
const Footer = () => {
  return (
    <Container>
      {/* All the elements on the left */}
      <Left>
        <BoldHeading fontcolor="black">Company Name.</BoldHeading>

        <Description>
          This venture was founded by a couple of college undergrads in their
          final year. We identified the gap within the market between suppliers
          and consumers and formulated a digital solution for the problem. While
          this is a beta verison of the project, it is only the start.
        </Description>
        {/* Both of the two icons are wrapped in this */}
        <SocialContainer>
          <SocialIcon color="#3b5998">
            {/* Importing the facebook Icon from mui */}
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            {/* Importing the Instgram Icon from mui */}
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* All the elements in the center */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <a>Home</a>
          </ListItem>
          <ListItem>
            <a>Sale Products</a>
          </ListItem>
          <ListItem>
            <a>Cart</a>
          </ListItem>
          <ListItem>
            <a>Services</a>
          </ListItem>
          <ListItem>
            <a>Become a Seller</a>
          </ListItem>
        </List>
      </Center>

      {/* All the elements on the right */}
      <Right>
        <Title>Contact Us</Title>
        {/* Displaying the mapp */}
        <ContactItem>
          <MapIcon fontSize="large" sx={{ marginRight: "10px" }} /> Office
          Address
        </ContactItem>
        {/* Displaying the phone */}
        <ContactItem>
          <LocalPhoneIcon fontSize="large" sx={{ marginRight: "10px" }} />
          XXXXXXXXXX
        </ContactItem>
        {/* Displaying the email */}
        <ContactItem>
          <MailIcon fontSize="large" sx={{ marginRight: "10px" }} />
          company@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
