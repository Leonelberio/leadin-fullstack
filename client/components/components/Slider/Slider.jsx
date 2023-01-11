import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavButton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  border-raduis: 50%;
  color: white;
  box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9),
    inset 0 --3em 3em rgba(3, 3, 3, 0.5);
  transform: translate(0, -50%);
  ${(props) =>
    props.right === true
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `}
`;

const Title = styled.h3`
  font-size: 18px;
  color: white;
  margin-top: -12em;
  margin-right: 40em;
  left: 50%;
  /* transform: translate(-50%, 0);
  box-shadow: 0px 4px 10px 15px rgba(3, 3, 3, 0.9),
        inset 0 --3em 3em rgba(3, 3, 3, 0.5); */
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: grey;
        `
      : css`
          background-color: white;
        `}
`;

const Slider = ({ config }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === config.length - 1) setImageIndex(0);
  };

  const prev = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) setImageIndex(config.length - 1);
  };
  return (
    <Container>
      <ImageContainer src={config[imageIndex].image} />
      <Title>{config[imageIndex].title}</Title>
      <NavButton right onClick={next}>
        <i className="fa-solid fa-circle-arrow-right"></i>
      </NavButton>
      <NavButton onClick={prev}>
        <i className="fa-solid fa-circle-arrow-left"></i>
      </NavButton>
      <DotContainer>
        {config.map((dot, index) => (
          <Dot key={dot.image} active={index === imageIndex} />
        ))}
      </DotContainer>
    </Container>
  );
};

export default Slider;
