import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  /* overflow hidden helps container stay in the page */
  overflow: hidden;
  /* Not show slider when responsive */
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d3cece;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* top and bottom 0 and margin auto: arrow will be in between vertically */
  top: 0;
  bottom: 0;
  /* Using props directions for left and right */
  /* Distance with left side 10px if left direction */
  left: ${(props) => props.direction === "left" && "10px"};
  /* Distance with right side 10px if right direction */
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.3;
  /* total 3 slides, index 0 1 2 */
  z-index: 2;
`;

// Wrapper contains slides
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* time of animations */
  transition: all 1.5s ease;
  /* Move slide on the X axis */
  /* take a props from Wrapper */
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// Slide contains image container and info container
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* Set props for background of each slide */
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100vh;
  width: 70vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
`;

const Slider = () => {
  // set side index = 0 at the beginning (0 1 2)
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      // slideIndex go left condition
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      // slideIndex go right condition
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* Left arrow with props direction and handle click */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {/* Icon from material UI */}
        <ArrowLeftOutlined />
      </Arrow>
      {/* Slides of pictures and texts moving in this wrapper */}
      {/* Each slide contains image and info */}
      <Wrapper slideIndex={slideIndex}>
        {/* sliderItems from data.js */}
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* Right arrow with props direction */}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        {/* Icon from material UI */}
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
