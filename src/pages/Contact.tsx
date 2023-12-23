import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../components/defaultTheme";

const Contact = () => {
  return (
    <ContactWrapper>
      <Wrapper>
        <h1>For any questions please mail us:</h1>
        <p>khoshtariagiorgi0@gmail.com</p>
      </Wrapper>
    </ContactWrapper>
  );
};
export default Contact;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55vh;
`;
const Wrapper = styled.div`
  h1 {
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
    font-family: ${defaultTheme.fonts.secondary};
    color: ${defaultTheme.colors.lightTheme.americanblue};
  }
  p {
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
    font-family: ${defaultTheme.fonts.secondary};
    background: var(--Gradient-Heading, linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;
