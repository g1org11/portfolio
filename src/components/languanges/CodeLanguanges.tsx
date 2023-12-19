import React from "react";
import styled from "styled-components";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import bootstrap from "../../assets/bootstrap.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import styledComponents from "../../assets/styled-components-1.svg";
const Codelanguanges = () => {
  return (
    <CodeDiv>
      <img src={html}></img>
      <img src={css}></img>
      <img src={js}></img>
      <img src={bootstrap}></img>
      <img src={react}></img>
      <img src={git}></img>
      <img src={github}></img>
      <img src={styledComponents}></img>
    </CodeDiv>
  );
};
export default Codelanguanges;

const CodeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 130px;
  margin-top: 120px;
  img {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    @media (max-width: 393px) {
      width: 90px;
      height: 90px;
    }
  }
`;
