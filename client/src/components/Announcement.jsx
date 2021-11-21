import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #9bdef8;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

// Deal ads above navbar
const Announcement = () => {
  return (
    <Container>Super Deal! Buy One Get One 50% + Free Shipping </Container>
  );
};

export default Announcement;
