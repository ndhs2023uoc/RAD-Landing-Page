import React from "react";
import styled from "styled-components";
import sectionImage4 from "../../images/55.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 10px ${(props) => props.theme.colors.bgDefault};
  flex-direction: row;
  background-attachment: fixed;
`;

const Card = styled.div`
  width: 250px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const InfoSectionFour = () => {
  console.log(sectionImage4);
  return (
    <Container sectionImage={sectionImage4} Height={"300px"}>
      <Card>
        <CardContent>
          <Number>1M+</Number>
          <Subtitle>subscribers</Subtitle>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Number>1000+</Number>
          <Subtitle>Projects</Subtitle>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Number>30K+</Number>
          <Subtitle>5 Star Ratings</Subtitle>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Number>50K+</Number>
          <Subtitle>Likes</Subtitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;
