import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import { mobile } from "../responsive";

const Container = styled.div``;

// Wrapper: Title, Top, Bottom
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

// text Title part
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

// Top part: 4 buttons horizontal line
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

// 2 buttons left and right
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  /* Use props type */
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#292727" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// 2 centers
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

// Bottom part: info part and summary part (ratio 3:1)
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

// Info part: list of products (2)
const Info = styled.div`
  /* Ratio with summary part */
  flex: 3;
`;

// Product part: Product Details and Price Details
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

// Contains image, and details of product
const ProductDetail = styled.div`
  /* Ratio with priceDetail */
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

// Details: name, id, color, size
const Details = styled.div`
  padding: 20px;
  display: flex;
  /* vertical */
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* props color */
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

// Contains amount and price
const PriceDetail = styled.div`
  /* Ratio with ProductDetail */
  flex: 1;
  display: flex;
  /* vertical */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// amount and 2 icons
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

// Break line between 2 products
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

// Contains title, list of texts and prices, button
const Summary = styled.div`
  /* ratio with Info part */
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

// Contains text & price
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  /* Props type total */
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>{`Shopping Bag (${cart.quantity})`}</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {/* Stripe Payment Method */}
          <Checkout />
        </Top>
        <Bottom>
          <Info>
            {/* Get product info and pass */}
            {cart.products.map((product, key) => (
              <Product key={key}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {/* Stripe Payment method */}
            <Checkout />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
