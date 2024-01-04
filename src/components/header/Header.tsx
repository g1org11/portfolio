import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <ContainerDiv>
      <HeaderWrapper>
        <Logo href="/">portfolio.</Logo>
        <NavDiv>
          <Nav>
            <UL>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/languages">Technologies</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </UL>
          </Nav>
          <SocialIcons>
            <a href="https://github.com/g1org11">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/giorgi-khoshtaria-a9b624270/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </SocialIcons>
          <ModaIcons>
            <BurgerIcon isVisible={!showMenu} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </BurgerIcon>

            {showMenu && (
              <XIcon isVisible={showMenu} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
              </XIcon>
            )}
          </ModaIcons>
        </NavDiv>

        {showMenu && (
          <Modal>
            <nav>
              <ModalUl>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/languages">Technologies</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ModalUl>
            </nav>
          </Modal>
        )}
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
const Nav = styled.nav`
  @media (max-width: 744px) {
    display: none;
  }
`;
const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: ${defaultTheme.colors.lightTheme.gradinategray};
      font-family: ${defaultTheme.fonts.secondary};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
    }
    margin-right: 60px;

    @media (max-width: 1100px) {
      margin-right: 30px;
    }
  }
`;
// const NavLink = styled.link``;
const SocialIcons = styled.div`
  a {
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
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 10%;
  left: 0;

  background-color: ${defaultTheme.colors.lightTheme.americanblue};
  @media (max-width: 393px) {
    top: 12%;
  }
`;
const ModalUl = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: ${defaultTheme.colors.white};
      font-family: ${defaultTheme.fonts.secondary};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
    }
    margin-right: 60px;

    @media (max-width: 1100px) {
      margin-right: 30px;
    }
  }
`;
const ModaIcons = styled.div`
  svg {
    color: ${defaultTheme.colors.lightTheme.gradinategray};
    width: 30px;
    height: 30px;
  }
`;
const BurgerIcon = styled.button<{ isVisible: boolean }>`
  all: unset;
  display: none;
  @media (max-width: 744px) {
    display: ${(props: { isVisible: unknown }) => (props.isVisible ? "inline-block" : "none")};
  }
`;

const XIcon = styled.button<{ isVisible: boolean }>`
  all: unset;
  display: none;
  @media (max-width: 744px) {
    display: ${(props: { isVisible: unknown }) => (props.isVisible ? "inline-block" : "none")};
  }
`;
