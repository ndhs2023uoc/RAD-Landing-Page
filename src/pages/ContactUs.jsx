import React from "react";
import ContactForm from "../components/contactusform/ContactUsForm";
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyles,Container,theme,Darktheme} from '../components/theme/Theme'
import Footer from "../components/footer/Footer";
import NEW from "../images/pexels-rovenimages-com-344613-949587.jpg"



const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
  padding-top: 100px;
  /* height: 800px; */

  background-image: url(${NEW});
  background-position: cover;
  @media screen and (max-width: 600px){
    min-height: 600px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 992px){
    min-height: 600px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  width: 40%;
  padding: 50px;
  /* justify-content: space-between; */
  margin-right: 10px;;
  text-align: center;
  border-radius: 10px;
  color: #fffefe;
  /* color: ${(props) => props.theme.colors.primary}; */
  @media screen and (max-width: 992px){
    width: 100%;
  }
`;

const P = styled.p`
  font-size: 20px;
  margin: 8px;
`;

const ContactUs = () => {
  return (
    <>
      <GlobalStyles/>
      <PageContainer>
      <ContactForm/>
      <ContactInfo>
        <h1>Additional Contact Information</h1>
        <P><br/>Address: 1234 Main St, Anytown, USA</P>
        <P>Phone: (123) 456-7890</P>
        <P>Email: info@CodeGalaxy.com</P>
      </ContactInfo>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default ContactUs
