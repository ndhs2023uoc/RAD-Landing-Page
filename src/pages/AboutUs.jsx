import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  Container,
  theme,
  Darktheme,
} from "../components/theme/Theme";
import Footer from "../components/footer/Footer";
import HistoryImg from "../images/AboutUs/history.jpg";
import Teams from "../components/team/Teams";
import { Link } from "react-router-dom";

const NewLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Optional: to maintain text color
`;

const AboutContainer = styled.div`
  padding: 20px;
  padding-top: 10%;
  /* max-width: 1200px; */
  margin-top: 0%;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const Section = styled.div`
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
  /* margin-left: 35%; */
  /* align-self: center; */
  color: ${(props) => props.theme.colors.primary};
`;

const Text1 = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.light};
`;

const Text2 = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.light2};
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.light};
`;

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const P = styled.p`
  margin-bottom: 10px;
`;

const AboutUs = () => {
  return (
    <>
      <GlobalStyles />
      <AboutContainer>
        <Section>
          <Title>Our History</Title>
          <ImageTextContainer>
            <Image src={HistoryImg} alt="Company History" />
            <Text1>
              Founded in 2010, our company started as a small startup with a big
              dream. Over the years, we've grown into a leading player in the
              industry, driven by innovation and a passion for excellence. Our
              journey has been marked by significant milestones, including
              groundbreaking product launches, strategic partnerships, and
              numerous awards. Today, we are proud to serve a diverse global
              clientele and continue to push the boundaries of what's possible.
            </Text1>
          </ImageTextContainer>
        </Section>
        <Section>
          <Title>Our Mission</Title>
          <Text2>
            <P>
              Our mission is to revolutionize the industry by delivering
              innovative solutions that enhance the quality of life for our
              customers. We are committed to excellence, integrity, and
              sustainability in everything we do. By fostering a culture of
              collaboration and continuous improvement, we aim to make a
              positive impact on the world and set new standards for industry
              best practices.
            </P>
            <P>
              We believe in the power of technology to transform lives and
              create a better future. Our mission is not just to meet the needs
              of today, but to anticipate and drive the innovations of tomorrow.
              We strive to understand our customers' challenges and deliver
              products and services that offer real value and lasting impact.
            </P>
            <P>
              At the heart of our mission is a commitment to our people. We
              invest in our team members' growth and development, creating a
              dynamic and inclusive workplace where everyone can thrive. We
              believe that by empowering our employees, we can unlock their full
              potential and achieve greater success together.
            </P>
            <P>
              Our mission also extends to the broader community. We are
              dedicated to social responsibility and actively seek opportunities
              to give back through charitable initiatives, volunteer efforts,
              and sustainable practices. We aim to lead by example,
              demonstrating that businesses can be a force for good in the
              world.
            </P>

            <P>
              Ultimately, our mission is to build a legacy of trust, innovation,
              and excellence. We are passionate about making a difference, and
              we are driven by the belief that together, we can create a
              brighter, more sustainable future for all.
            </P>
          </Text2>
        </Section>
        <Section>
          <Title>Our Values</Title>
          <Text>
            <P>
              Innovation: We are dedicated to pushing the boundaries of
              technology and creativity to deliver cutting-edge solutions.
            </P>
            <P>
              Integrity: We uphold the highest standards of honesty and
              transparency in all our dealings.
            </P>
            <P>
              Customer Focus: Our customers are at the heart of everything we
              do, and we strive to exceed their expectations.
            </P>
            <P>
              Excellence: We pursue excellence in every aspect of our business,
              from product development to customer service.
            </P>
            <P>
              Sustainability: We are committed to sustainable practices that
              protect the environment and benefit society.
            </P>
          </Text>
          <Text>
            <NewLink to="/contact">
              <Title>Contact Us</Title>
            </NewLink>
          </Text>
        </Section>
        <Teams></Teams>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default AboutUs;
