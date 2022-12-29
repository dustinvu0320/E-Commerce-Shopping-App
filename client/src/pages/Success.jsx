import styled from "styled-components";
// import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { clearCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

import LocalMallIcon from "@material-ui/icons/LocalMall";

import confetti from "canvas-confetti";

const Container = styled.div`
  background-color: white;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100vh;
  margin-top: 160px;
  background-color: #dcdcdc;
  padding: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Icon = styled.p`
  color: green;
  font-size: 40px;
`;
const Thankyou = styled.h2`
  text-transform: capitalize;
  margin-top: 15px 0px;
  font-weight: 900;
  font-size: 40px;
  color: #324d67;
`;
const EmailMsg = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
  margin-top: 30px;
`;
const Email = styled.a`
  margin-left: 5px;
  color: #f02d34;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: #f02d34;
  color: #fff;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
`;

const Success = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  // const orderId = location.state.orderId;

  const runFireworks = () => {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  useEffect(() => {
    dispatch(clearCart());
    runFireworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Wrapper>
        <Icon>
          <LocalMallIcon fontSize="large" />
        </Icon>
        <Thankyou>Thank you for your order!</Thankyou>
        <EmailMsg className="email-msg">
          Check your email inbox for the receipt.
        </EmailMsg>
        <Description>
          If you have any questions, please email
          <Email className="email" href="mailto:order@example.com">
            order@example.com
          </Email>
        </Description>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
