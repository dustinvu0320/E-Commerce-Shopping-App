import StripeCheckout from "react-stripe-checkout";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

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

const Checkout = () => {
  const KEY = process.env.REACT_APP_STRIPE;

  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);

  const [stripeToken, setStripeToken] = useState(null);

  const [orderId, setOrderId] = useState("");

  // Stripe method
  const onToken = (token) => {
    setStripeToken(token);
  };

  const createOrder = (stripe) => {
    try {
      const res = userRequest.post("/orders", {
        userId: currentUser._id,
        stripeId: stripe.id,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        amount: cart.total,
        address: stripe.billing_details.address,
      });

      setOrderId(res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Connect Stripe api with front end
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        createOrder(res.data);

        history.push("/success", {
          orderId: orderId,
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripeToken]);

  return (
    <StripeCheckout
      name="DustinV Shop"
      image="https://avatars.githubusercontent.com/u/78432157?s=400&u=a3542854353b321e90e5f526d6ac7d5b30a702bf&v=4"
      billingAddress
      shippingAddress
      description={`Your total is $${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      stripeKey={KEY}
    >
      <TopButton type="filled" disabled={cart.total === 0}>
        CHECKOUT NOW
      </TopButton>
    </StripeCheckout>
  );
};

export default Checkout;
