import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const Header: React.FC = () => {
  return (
    <ContainerDiv>
      <HeaderWrapper>
        <Logo href="/">portfolio.</Logo>
        <NavDiv>
          <nav>
            <UL>
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </UL>
          </nav>
          <SocialIcons>
            <a href="https://github.com/g1org11">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/giorgi-khoshtaria-a9b624270/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </SocialIcons>
        </NavDiv>
        <Modal>
          <nav>
            <ModalUl>
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </ModalUl>
          </nav>
        </Modal>
      </HeaderWrapper>
    </ContainerDiv>
  );
};

export default Header;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.a`
  color: ${defaultTheme.colors.lightTheme.americanblue};
  font-size: 32px;
  font-family: ${defaultTheme.fonts.secondary};
  text-decoration: none;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    margin-right: 60px;
    list-style-type: none;
    color: ${defaultTheme.colors.lightTheme.gradinategray};
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;
const SocialIcons = styled.div`
  a {
    width: 30px;
    height: 30px;
    svg {
      width: 30px;
      height: 30px;
      color: ${defaultTheme.colors.lightTheme.gradinategray};
      margin-right: 20px;
    }
  }
`;
const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83%;
  padding: 20px;
  position: absolute;
  top: 10%;

  background-color: ${defaultTheme.colors.lightTheme.americanblue};
`;
const ModalUl = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  li {
    list-style-type: none;
    color: ${defaultTheme.colors.white};
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;
