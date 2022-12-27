import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LogoImage from "../images/dark-logo.png";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;

// CSS codes for navbar (divided into 3 parts: left, center, right)
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// Left parts: language, search container, search icon
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${mobile({ "margin-left": "5px" })}
`;

const Input = styled.input`
  width: 80%;
  height: 25px;
  padding: 5px;
  border: 1px solid #d1d1d1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-transform: capitalize;
  color: #a9a9a9;
  outline: none;
  background: none;
  ${mobile({ width: "50px" })}
`;

const Button = styled.button`
  width: 20%;
  height: 36px;
  border: none;
  outline: none;
  background: #616060;
  color: #fff;
  text-transform: capitalize;
  font-size: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

// Center part: Name Logo
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 80px;
`;

// Right part: Menu Item
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "7px" })}
  :Link {
    text-decoration: none;
  }
  font-weight: bold;
  color: black;
`;

const LogoutButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 25px;
  border-radius: 10px;
  border-color: gray;
  ${mobile({ fontSize: "12px", marginLeft: "7px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Container>
      {/* 3 parts: left, center, right */}
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="brand, product" />
            <Button>Search</Button>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo src={LogoImage} />
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem>{user.fullName}</MenuItem>
              <LogoutButton onClick={(e) => handleLogout(e)}>
                LOGOUT
              </LogoutButton>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem>SIGN UP</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>LOG IN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              {/* Badge with shopping cart icon from material-UI */}
              <Badge
                overlap="rectangular"
                badgeContent={quantity}
                color="primary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
