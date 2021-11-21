import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  /* flex vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ "font-size": "40px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", "font-size": "18px" })}
`;

// Contains input and button
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

// length ratio between input and button 8:1
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      {/* Include title, desc, input email (input and button send) */}
      <Title>Newsletter</Title>
      <Desc>Subcribe and Join our Community!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          {/* Send icon from material UI */}
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
