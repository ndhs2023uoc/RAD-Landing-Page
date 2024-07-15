import React from 'react'
import styled from 'styled-components'
import sectionImage1 from "../../images/211.jpg"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({Height}) => Height};
  background-image: url(${({sectionImage}) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 10px ${(props) => props.theme.colors.bgDefault};
  flex-direction: row;
  background-attachment: fixed;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3% 3% 3% 3%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 0% 0% 2% 0%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px){
    padding-top: 15px;
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: white;
  width: 80%;
  font-weight: lighter;
  font-size: 25px;
  margin-top: 10px;
  @media only screen and (max-width: 600px){
    padding-bottom: 15px;
  }
`;

const Logo = styled.p`
  color: blue;
`

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={sectionImage1}>
      <TextWrapper>
      <Title>What You Will Get From Us?</Title>
      <Description>
        At Code Galaxy, you’ll experience flexible learning schedules, enabling you to progress at your own pace. Our curriculum stays up-to-date with the latest industry standards, and interactive workshops provide practical experience through live coding sessions. You’ll engage in project-based learning, building real-world applications that bolster your skills.
      </Description>
      <Description>
        <br/>
        Moreover, you’ll join a global coding community, fostering collaboration and networking with learners and professionals worldwide. Continuous skill assessments ensure you track your progress effectively, helping you master the material and stay on the path to success in the tech industry.
      </Description>
      </TextWrapper>
    </Container>
  )
}

export default InfoSectionTwo