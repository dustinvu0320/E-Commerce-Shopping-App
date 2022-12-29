import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";

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
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  padding: 12px 12px;
  background-color: #3f3f3f;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
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
  // const [fullName, setFullName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(dispatch, inputs);
  };

  return (
    <Container>
      <Link to="/">
        <BackButton>
          <KeyboardBackspaceIcon style={{ marginRight: 5 }} />
          Back
        </BackButton>
      </Link>

      {/* Contains title, form to register, agreement, and button */}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit} disabled={isFetching}>
            CREATE
          </Button>
        </Form>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Missing Inputs or Network Error...
          </span>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;
