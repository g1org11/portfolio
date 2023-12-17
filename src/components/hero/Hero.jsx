import React from "react";
import styled from "styled-components";
import img from "../../assets/p1.png";
import { defaultTheme } from "../defaultTheme";

const Hero = () => {
  return (
    <Container>
      <Titles>
        <h1>Hi 👋, </h1>
        <h1>My name is </h1>
        <Name>Khoshtaria Giorgi</Name>
        <h1>I build things for web</h1>
      </Titles>
      <ImageDiv>
        <img src={img} alt="Profile" />
      </ImageDiv>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 250px;
  @media (max-width: 744px) {
    flex-direction: column;
    margin-top: 200px;
  }
`;

const ImageDiv = styled.div`
  width: 364px;
  height: 364px;
  flex-shrink: 0;
  border-radius: 230px;
  /* border: 9px solid #cc72b3; */

  @media (max-width: 1100px) {
    width: 300px;
    height: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 744px) {
    margin-top: 50px;
    width: 364px;
    height: 364px;
    img {
      width: 364px;
      height: 364px;
    }
    @media (max-width: 460px) {
      width: 300px;
      height: 300px;
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;

const Titles = styled.div`
  h1 {
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
    color: ${defaultTheme.colors.lightTheme.americanblue};
    @media (max-width: 1100px) {
      font-size: 42px;
      line-height: 50px;
    }
    @media (max-width: 744px) {
      text-align: center;
    }
    @media (max-width: 460px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
`;
const Name = styled.h1`
  background: var(--Gradient-Heading, linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`;
