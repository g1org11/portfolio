import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import chain from "../../assets/chain.svg";
import githubIcon from "../../assets/githubIcon.svg";

interface props {
  img: string;
  title: string;
  info: string;
  tech: string;
  live: string;
  code: string;
}
const Project: React.FC<props> = ({ img, title, info, tech, live, code }) => {
  return (
    <ProjectContainer>
      <img src={img}></img>
      <PropjectInfos>
        <h3>{title}</h3>
        <Info>{info}</Info>
        <Tech>
          Tech stack : <span>{tech}</span>{" "}
        </Tech>
        <Desctiption>
          <Live>
            <img src={chain}></img>
            <a href={live}>Live Preview</a>
          </Live>

          <Code>
            <img src={githubIcon} alt="" />
            <a href={code}>View Code</a>
          </Code>
        </Desctiption>
      </PropjectInfos>
    </ProjectContainer>
  );
};
export default Project;
const ProjectContainer = styled.div`
  width: 373px;
  height: 567px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${defaultTheme.colors.white};
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  img {
    width: 373px;
    height: 260px;
    border-radius: 20px 20px 0px 0px;
    margin-bottom: 27px;
  }
`;
const PropjectInfos = styled.div`
  padding: 0 31px 25px 28px;
  h3 {
    color: ${defaultTheme.colors.black};
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;
const Info = styled.p`
  color: ${defaultTheme.colors.lightTheme.gradinategray};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  margin-top: 17px;
  margin-bottom: 12px;
`;
const Tech = styled.p`
  color: ${defaultTheme.colors.lightTheme.americanblue};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  margin-bottom: 21px;
  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
  }
`;
const Desctiption = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const Live = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  a {
    all: unset;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
const Code = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  a {
    all: unset;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
