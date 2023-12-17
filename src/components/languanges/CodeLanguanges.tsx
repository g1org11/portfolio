import React from "react";
import styled from "styled-components";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import bootstrap from "../../assets/bootstrap.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
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
    </CodeDiv>
  );
};
export default Codelanguanges;

const CodeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  margin-top: 120px;
`;
