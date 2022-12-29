import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

// 3 parts: left, center, right
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

// left contains logo, desc, social icons
const Left = styled.div`
  flex: 1;
  display: flex;
  /* Vertical */
  flex-direction: column;
  padding: 20px;
  ${mobile({ padding: "10px 20px" })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ margin: "10px 0" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  /* props color */
  background-color: #${(props) => props.color};
  /* center icon in background */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${mobile({ width: "30px", height: "30px", marginBottom: "10px" })}
`;

// Center contains title, list items
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ padding: "0 20px" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({ "margin-bottom": "5px" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  /* flex to multi lines */
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

// Right contains contact info
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#e6f7ff" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ "margin-bottom": "10px" })}
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    // 3 parts: left, center, right
    <Container>
      {/* Left part: logo, desc, social icons */}
      <Left>
        <Logo>Shopping</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        {/* 4 social icons from material UI */}
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* Center part: title, list of items */}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      {/* Right part: contact info and icons */}
      <Right>
        <Title>Contact</Title>
        {/* 3 icons from material UI */}
        {/* CSS inside of material UI icons using style */}
        <ContactItem>
          <Room style={{ color: "#CD5C5C", marginRight: "10px" }} /> Houston, TX
        </ContactItem>
        <ContactItem>
          <Phone style={{ color: "green", marginRight: "10px" }} /> (123) 456 -
          7890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ color: "#007CC7", marginRight: "10px" }} />{" "}
          dustinvu@fullstack.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
