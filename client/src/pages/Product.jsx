import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

// Contains image and info container
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

// Left side contains image
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

// Right side contains image info
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

// Contains amount and button
const AddContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // Fetch product data
  const [product, setProduct] = useState({});

  // Increase or decrease quantity function
  const [quantity, setQuantity] = useState(1);

  // Dispatch actions from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        // Get axios from publicRequest (requestMethods.js)
        // link "/.../" from API product
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Update cart
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      {/* import Navbar and Announcement components */}
      <Navbar />
      <Announcement />
      {/* Wrapper contains left side of image and right side of image info */}
      <Wrapper>
        {/* Left side: image */}
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        {/* Right side: title, desc, filter of color and size, amount icons, buttons */}
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>

          {/* amount and add button */}
          <AddContainer>
            <AmountContainer>
              {/* useState function */}
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* import Newsletter and Footer components */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
