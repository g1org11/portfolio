import { defaultTheme } from "../components/defaultTheme";
import styled from "styled-components";
import cal from "../assets/cal.svg";
import uni from "../assets/uni.svg";

// import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <AbotWrapper>
        <div>
          <AboutTitle>About Me</AboutTitle>
          <Info>
            👋 Greetings! I'm Giorgi, a budding frontend developer thrilled to embark on the
            exciting world of web development. While I may be at the beginning of my coding journey,
            my passion for creating captivating digital experiences is what fuels my learning.
          </Info>
          <InfoTitle>💻 Here's what I'm currently exploring:</InfoTitle>
          <LanguangeInfo>
            <span>HTML/CSS:</span> I'm mastering the art of structuring web content with HTML and
            bringing it to life with CSS. Ensuring my websites not only function seamlessly but also
            look polished and user-friendly.
          </LanguangeInfo>
          <LanguangeInfo>
            <span>JavaScript:</span> Delving into the fundamentals of JavaScript to infuse my
            projects with interactivity and dynamic functionalities. It's amazing how a few lines of
            code can transform a static webpage into an engaging user experience.
          </LanguangeInfo>
          <LanguangeInfo>
            <span>React:</span> Venturing into React to understand the magic of building modular and
            reusable components. The idea of crafting efficient single-page applications is both
            challenging and exhilarating.
          </LanguangeInfo>
          <LanguangeInfo>
            <span>Styled-Components:</span> Experimenting with styled-components to add a touch of
            personal flair to my creations. Learning how to integrate design seamlessly into the
            development process.
          </LanguangeInfo>
        </div>
        <div>
          <EduTitle>Education</EduTitle>
          <Education>
            <div>
              <Uni>Georgian Technical University</Uni>
              <University>
                <img src={uni} alt="uni" />
                <FacultyDate>Faculty of Informatics and Management Systems</FacultyDate>
              </University>
            </div>
            <Date>
              <img src={cal} alt="cal" />
              <FacultyDate>Sep 2020 - Jul 2024</FacultyDate>
            </Date>
          </Education>
          <Education>
            <div>
              <Uni>smartAcademy</Uni>
              <University>
                <img src={uni} alt="uni" />
                <FacultyDate>Front-End Development</FacultyDate>
              </University>
            </div>
            <Date>
              <img src={cal} alt="cal" />
              <FacultyDate>Jan 2022 - Jul 2022</FacultyDate>
            </Date>
          </Education>
          <Education>
            <div>
              <Uni>bitCamp</Uni>
              <University>
                <img src={uni} alt="uni" />
                <FacultyDate>BitCamp 101</FacultyDate>
              </University>
            </div>
            <Date>
              <img src={cal} alt="cal" />
              <FacultyDate>Apr 2023 - Jul 2023</FacultyDate>
            </Date>
          </Education>
        </div>
      </AbotWrapper>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 120px;
`;
const AbotWrapper = styled.div`
  p {
    max-width: 708px;
  }
`;
const AboutTitle = styled.h1`
  color: ${defaultTheme.colors.lightTheme.americanblue};
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
  letter-spacing: -0.4px;
  margin-bottom: 48px;
`;
const Info = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;
const InfoTitle = styled(Info)`
  margin: 20px 0;
`;
const LanguangeInfo = styled(Info)`
  margin-bottom: 5px;
  span {
    color: ${defaultTheme.colors.lightTheme.americanblue};
  }
`;

const EduTitle = styled(AboutTitle)`
  margin-top: 30px;
`;

const Education = styled.div`
  max-width: 880px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${defaultTheme.colors.darkTheme.lightsilver};
  @media (max-width: 550px) {
    align-items: start;
    flex-direction: column;
  }
`;
const University = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
const Date = styled(University)``;
const Uni = styled.p`
  color: ${defaultTheme.colors.lightTheme.gradinategray};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
  margin-bottom: 5px;
`;
const FacultyDate = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 233.333% */
  letter-spacing: 1px;
  margin-left: 5px;
  color: ${defaultTheme.colors.darkTheme.quicksilver};
`;
