import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';
import {ThemeProvider} from 'styled-components';
import Navbar from '../components/NavBar/Navbar';
import Hero from '../components/hero/Hero';
import InfoBoxes from '../components/infoboxes/InfoBoxes'
import InfoSectionOne from '../components/infoSectionOne/InfoSectionOne';
import InfoSectionTwo from '../components/inforsectiontwo/InfoSectionTwo';
import InfoSectionThree from '../components/infosectionthree/InfoSectionThree';
import Teams from '../components/team/Teams';
import InfoSectionFour from '../components/infosectionfour/InfoSectionFour';
import Footer from '../components/footer/Footer';
import { Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {GlobalStyles,Container,theme,Darktheme} from '../components/theme/Theme'
import WelcomeMessage from '../components/welcomeMessage/WelcomeMessage'


function Home() {
  const [mode, setMode] = useState(false);

  return (
    <>
      {/* <ThemeProvider theme={mode ? Darktheme : theme}> */}
      <GlobalStyles/>
          <Container>
          <Hero></Hero>
          <WelcomeMessage>
            <WelcomeMessage></WelcomeMessage>
          </WelcomeMessage>
          <InfoBoxes></InfoBoxes>
          <InfoSectionOne/>
          <InfoSectionTwo />
          <InfoSectionThree />
          <InfoSectionFour />
          <Teams />
          <Footer />
        </Container>
        {/* </ThemeProvider> */}
    </>
  );
}

export default Home;
