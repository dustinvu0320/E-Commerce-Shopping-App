import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Contains 3 icons inside
const Info = styled.div`
  /* disappear when normal, info will appear when hover */
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* color with opacity = 0.2 */
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  /* hover appear Info */
  /* Info need to be initialize before  */
  &:hover ${Info} {
    opacity: 1;
  }
`;

// Circle in between pics to look nicer
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  /* change z-index to front of circle */
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  /* animations when hover*/
  &:hover {
    background-color: #e9f5f5;
    /* hover to be bigger */
    transform: scale(1.1);
  }
`;

// {item} : props
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      {/* 3 icons for each image (cart, search, like) */}
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
