import React from "react";
import {
  Wrapper,
  Right,
  SubTitle,
  Header,
  Description,
  List,
  ListItem,
  Left,
  Container,
} from "../styles/styled.Section";
import sectionThreeeImage from "../../images/Coding workshop-bro.png";
import styled from "styled-components";

const Image = styled.img`
  width: 70%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const InfoSectionThree = () => {
  return (
    <Container section="sectionThree">
      <Wrapper direction={"row-reverse"} section="sectionThree">
        <Right>
          <Image src={sectionThreeeImage} />
        </Right>
        <Left>
          <SubTitle>Why Trust Us?</SubTitle>
          <Header>Trust Code Galaxy for Your Coding Journey</Header>
          <Description>
            Learn from industry experts dedicated to your success. Our hands-on
            approach ensures practical skills, supported by personalized
            mentorship and comprehensive career services. Trust Code Galaxy to
            guide your coding journey with expertise and commitment.
          </Description>
          <List>
            <ListItem>Customer Support Email</ListItem>
            <ListItem>Expert-Led Courses</ListItem>
            <ListItem>Physical Address</ListItem>
            <ListItem>Social Media Handles</ListItem>
            <ListItem>Community Forums</ListItem>
            <ListItem>Career Services</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
