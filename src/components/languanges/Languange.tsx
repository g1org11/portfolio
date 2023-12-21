// import React from "react";
import styled from "styled-components";
import Codelanguanges from "./CodeLanguanges";
import { defaultTheme } from "../defaultTheme";
const Languange = () => {
  return (
    <Wrapper>
      <Infos>
        <h1>My Tech Stack</h1>
        <p> Technologies I’ve been working with recently</p>
      </Infos>
      <div>
        <Codelanguanges />
      </div>
    </Wrapper>
  );
};
export default Languange;
const Wrapper = styled.div`
  margin-top: 250px;
`;
const Infos = styled.div`
  text-align: center;
  h1 {
    color: ${defaultTheme.colors.lightTheme.americanblue};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 54.167% */
    margin-bottom: 50px;
    @media (max-width: 600px) {
      font-size: 32px;
    }
  }
  p {
    color: ${defaultTheme.colors.lightTheme.gradinategray};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 81.25% */
    @media (max-width: 60git0px) {
      font-size: 26px;
    }
  }
`;
