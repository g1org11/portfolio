import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Container>
      <div>
        <Logo href="/">portfolio.</Logo>
      </div>
      <FooterWrapper>
        <Contact>
          <a href="tel:+995599263413">+995 599 263 413</a>
          <a href="mailto:khoshtariagiorgi0@gmail.com">khoshtariagiorgi0@gmail.com</a>
        </Contact>
        <SocialIcons>
          <a href="https://github.com/g1org11">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="https://www.linkedin.com/in/giorgi-khoshtaria-a9b624270/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialIcons>
      </FooterWrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  margin-top: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid ${defaultTheme.colors.lightTheme.gradinategray};
  @media (max-width: 600px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 0;
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
  gap: 33px;
  a {
    color: ${defaultTheme.colors.lightTheme.americanblue};
    font-family: ${defaultTheme.fonts.secondary};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-decoration: none;
  }
  @media (max-width: 830px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: 600px) {
    margin: 0;
    margin-bottom: 15px;
  }
`;
const Logo = styled.a`
  color: ${defaultTheme.colors.lightTheme.americanblue};
  font-size: 32px;
  font-family: ${defaultTheme.fonts.secondary};
  text-decoration: none;
`;
const SocialIcons = styled.div`
  a {
    svg {
      width: 30px;
      height: 30px;
      color: ${defaultTheme.colors.lightTheme.gradinategray};
      margin-right: 20px;
    }
  }
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;
