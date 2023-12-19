import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import p1 from "../../assets/img1.png";
import p2 from "../../assets/img2.png";
import p3 from "../../assets/img3.png";
import p4 from "../../assets/img4.png";
import p5 from "../../assets/img5.png";
import p6 from "../../assets/img6.png";

import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <ProjectTitles>
        <h1>Projects</h1>
        <p>Things I’ve built so far</p>
      </ProjectTitles>
      <ProjectWrapper>
        <Project
          img={p1}
          title={"Gym24"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"react, Styled-Components"}
          live={"https://gym24-opal.vercel.app/"}
          code={"https://github.com/g1org11/gym24"}
        />
        <Project
          img={p2}
          title={"Tip_Calculator"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"react, Styled-Components"}
          live={"https://tip-calculator-chi-beige.vercel.app/"}
          code={"https://github.com/g1org11/Tip_Calculator"}
        />
        <Project
          img={p3}
          title={"Todo-App"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"react, Styled-Components"}
          live={"https://todo-list-ten-azure.vercel.app/"}
          code={"https://github.com/g1org11/todo-List"}
        />
        <Project
          img={p6}
          title={"Pizza-Menu"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"react, Css"}
          live={"https://pizza-menu-blush.vercel.app/"}
          code={"https://github.com/g1org11/pizza-menu"}
        />
        <Project
          img={p4}
          title={"Skilled-Elearning-Landing-Page"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"Html, Css"}
          live={"https://skilled-elearning-landing-page-eight.vercel.app/"}
          code={"https://github.com/g1org11/skilled-elearning-landing-page"}
        />
        <Project
          img={p5}
          title={"TypeMaster-Pre-Launching-Page"}
          info={
            "This is a one-page site where you can buy a subscription and also hire a trainer of yourchoice"
          }
          tech={"Html, Css"}
          live={"https://g1org11.github.io/typemaster-pre-launching-page/"}
          code={"https://github.com/g1org11/typemaster-pre-launching-page"}
        />
      </ProjectWrapper>
    </div>
  );
};
export default Projects;

const ProjectTitles = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
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
    @media (max-width: 600px) {
      font-size: 26px;
    }
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 62px;
  column-gap: 42px;
`;
