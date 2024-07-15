import React from 'react'
import TextBanner from "../textbanner/TextBanner";
import styled from 'styled-components';
import { Card, CardContent, CardTitle, Description, Button } from '../styles/styled.Card';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;



const infoBoxes = () => {
  return (
    <div>
      <TextBanner title={'What we provide'} subtitle={"Our Services"} />
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Interactive Courses</CardTitle>
            <Description>
              Explore a wide range of coding courses for all skill levels, covering HTML, CSS, JavaScript, Python, and more. Each course is hands-on and project-based, helping you build practical skills through real-world scenarios. Gain the confidence to tackle coding challenges and create impressive projects.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Expert Mentorship</CardTitle>
            <Description>
              Receive one-on-one mentorship from experienced professionals. Get personalized support, feedback on your projects, and career advice to help you achieve your learning goals. Our mentors are dedicated to helping you succeed and advance in your coding journey.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Engaging Coding Challenges</CardTitle>
            <Description>
              Participate in coding challenges to sharpen your problem-solving abilities. Compete with peers, earn rewards, and climb the leaderboard as you tackle problems of varying difficulty. Improve your coding skills while enjoying a fun and competitive environment.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Join a Supportive Learning Community</CardTitle>
            <Description>
              Connect with fellow learners and professionals in our active forums and chat rooms. Share your progress, ask questions, and collaborate on projects in a vibrant community. Build meaningful connections and grow together as a community of passionate coders.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Launch Your Career with<br/>Our Career Services</CardTitle>
            <Description>
              Access resume reviews, mock interviews, and job placement assistance. Our career services help you transition from learning to earning, providing the resources you need to land your dream job. Let us help you showcase your skills and stand out to potential employers.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Hands-On Projects to Build Real-World Applications</CardTitle>
            <Description>
              Work on advanced projects that simulate real-world applications. Gain practical experience by building complete products from scratch under expert supervision. Develop a strong portfolio that demonstrates your abilities to potential employers.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>        

      </Container>
      </div>
  )
}

export default infoBoxes