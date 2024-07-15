import React from 'react'
import sectionOneImage from "../../images/Hand coding-bro.png"
import { Wrapper,Right, Image, SubTitle, Header, Description, List, ListItem, Left, Container } from '../styles/styled.Section'

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={'row'} section="sectionOne">
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
        <SubTitle>Why Choose Us?</SubTitle>
        <Header>
          Why Choose Code Galaxy for Your Coding Journey?
        </Header>
        <Description>
        Choosing Code Galaxy means embarking on a coding journey guided by industry experts and hands-on projects. Our experienced instructors ensure you gain practical skills through real-world applications. With personalized mentorship, you'll receive tailored guidance and career advice to help you achieve your goals. Our up-to-date curriculum keeps you at the forefront of technology, and our comprehensive career services, including resume reviews and job placement assistance, support your professional growth. Join Code Galaxy's supportive community of learners and professionals, and experience a collaborative environment that fosters networking and continuous learning.
          </Description>
        <List>
          <ListItem>
            Flexible Learning Schedules
          </ListItem>
          <ListItem>
            Cutting-Edge Curriculum 
          </ListItem>
          <ListItem>
            Interactive Workshops
          </ListItem>
          <ListItem>
            Project-Based Learning
          </ListItem>
          <ListItem>
            Global Coding Community
          </ListItem>
          <ListItem>
            Continuous Skill Assessment
          </ListItem>

        </List>
        </Left>
      </Wrapper>
    </Container>
  )
}

export default InfoSectionOne