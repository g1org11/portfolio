import React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Languange from "./languanges/Languange";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

const SiteContainer = () => {
  return (
    <Router>
      <StyledContainer>
        <Header />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/languages" element={<Languange />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Hero />
        <Languange />
        <Projects />
        <Footer />
      </StyledContainer>
    </Router>
  );
};

export default SiteContainer;

const StyledContainer = styled.div`
  overflow: hidden;
  padding: 40px 120px 80px 200px;
  @media (max-width: 1100px) {
    padding: 40px 30px 80px 30px;
  }
  @media (max-width: 744px) {
    padding: 40px 19px 84px 19px;
  }
  @media (max-width: 393px) {
    padding: 60px 30px 70px 30px;
  }
`;
