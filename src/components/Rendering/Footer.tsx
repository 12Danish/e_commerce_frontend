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
import { Link } from "react-router-dom";
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  LinkName,
  List,
  ListItem,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "../Styling/FooterStyles";
import { linkStyle } from "../Styling/LinkStyles";

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
            <Link to="/" style={linkStyle}>
              <LinkName>Home</LinkName>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/product_list/sale" style={linkStyle}>
              <LinkName>Sale Products</LinkName>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart" style={linkStyle}>
              <LinkName>Cart</LinkName>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/product_list" style={linkStyle}>
              <LinkName>Latest Products</LinkName>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/register" style={linkStyle}>
              <LinkName>Become a Seller</LinkName>
            </Link>
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
