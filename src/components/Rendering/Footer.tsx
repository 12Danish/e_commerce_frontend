// Importing this as the code is thr same
import { BoldHeading } from "../Styling/SharedStyledElementsStyles";
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
  A,
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
} from "../Styling/FooterStyles";

const Footer = () => {
  return (
    <Container>
      {/* All the elements on the left */}
      <Left>
        <BoldHeading fontcolor="white" backgroundColor="transparent">
          Company Name.
        </BoldHeading>

        <Description>
          Welcome to our fashion-forward e-commerce platform! Explore a diverse
          range of shoes, clothing, and accessories curated for style
          enthusiasts like you. Discover the latest trends, enjoy secure
          payments, and swift deliveries. Sellers can showcase their unique
          creations, customize their storefronts, and benefit from our marketing
          tools whereas buyers can enjoy a premium shopping experience
        </Description>
        {/* Both of the two icons are wrapped in this */}
        <SocialContainer>
          <SocialIcon color="#3b5998">
            {/* Importing the facebook Icon from mui */}
            <FacebookIcon style={{ backgroundColor: "transparent" }} />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            {/* Importing the Instgram Icon from mui */}
            <InstagramIcon style={{ backgroundColor: "transparent" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* All the elements in the center */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <A>Home</A>
          </ListItem>
          <ListItem>
            <A>Sale Products</A>
          </ListItem>
          <ListItem>
            <A>Cart</A>
          </ListItem>
          <ListItem>
            <A>Latest Products</A>
          </ListItem>
          <ListItem>
            <A>Become a Seller</A>
          </ListItem>
        </List>
      </Center>

      {/* All the elements on the right */}
      <Right>
        <Title>Contact Us</Title>
        {/* Displaying the mapp */}
        <ContactItem>
          <MapIcon
            fontSize="large"
            sx={{ marginRight: "10px", backgroundColor: "transparent" }}
          />{" "}
          Office Address
        </ContactItem>
        {/* Displaying the phone */}
        <ContactItem>
          <LocalPhoneIcon
            fontSize="large"
            sx={{ marginRight: "10px", backgroundColor: "transparent" }}
          />
          XXXXXXXXXX
        </ContactItem>
        {/* Displaying the email */}
        <ContactItem>
          <MailIcon
            fontSize="large"
            sx={{ marginRight: "10px", backgroundColor: "transparent" }}
          />
          company@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
