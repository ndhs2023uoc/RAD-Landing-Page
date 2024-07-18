import Hero from "../components/hero/Hero";
import InfoBoxes from "../components/infoboxes/InfoBoxes";
import InfoSectionOne from "../components/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "../components/inforsectiontwo/InfoSectionTwo";
import InfoSectionThree from "../components/infosectionthree/InfoSectionThree";
import Teams from "../components/team/Teams";
import InfoSectionFour from "../components/infosectionfour/InfoSectionFour";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { GlobalStyles, Container } from "../components/theme/Theme";
import WelcomeMessage from "../components/welcomeMessage/WelcomeMessage";

function Home() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Hero></Hero>
        <WelcomeMessage>
          <WelcomeMessage></WelcomeMessage>
        </WelcomeMessage>
        <InfoBoxes></InfoBoxes>
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Teams />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
