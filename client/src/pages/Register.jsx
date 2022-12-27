import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  /* width and height fully page */
  width: 100vw;
  height: 100vh;
  /* opacity the image background */
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.thebalanceeveryday.com/thmb/FkQ7RaPHL1yI0uCqkgDR9IWHoBc=/1887x1415/smart/filters:no_upscale()/GettyImages-487149250-58c71e5b3df78c353c0577eb.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// A Box of registration information
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  /* Responsive */
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  /* auto determine flex to fit in size */
  flex-wrap: wrap;
`;

// Each input box
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #3f3f3f;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await publicRequest.post("/auth/register", {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <Container>
      {/* Contains title, form to register, agreement, and button */}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e)}
          />
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;
