import React from "react";
import styled from "styled-components";
import avatarImage1 from "../../images/teamMembers/111.jpg";
import avatarImage2 from "../../images/teamMembers/112.jpg";
import avatarImage3 from "../../images/teamMembers/113.jpg";
import avatarImage4 from "../../images/teamMembers/114.jpg";
import TextBanner from "../textbanner/TextBanner";

const Container = styled.div`
  padding: 5%;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamCard = styled.div`
  height: 350px;
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 6px 5px 14px 2px rgba(208, 86, 165, 0.86);
  box-shadow: 6px 5px 14px 2px rgba(81, 236, 212, 0.523);
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
  justify-content: center;
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  justify-content: center;
`;

const Teams = () => {
  return (
    <Container>
      <TextBanner title={"We are union"} subtitle={"Our Team"} />
      <Wrapper>
        <TeamCard>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemberName>Michael Smith</MemberName>
            <TeamPosition>Software Engineer</TeamPosition>
          </TextWrapper>
        </TeamCard>

        <TeamCard>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemberName>Emily Johnson</MemberName>
            <TeamPosition>Product Manager</TeamPosition>
          </TextWrapper>
        </TeamCard>

        <TeamCard>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemberName>David Wilson</MemberName>
            <TeamPosition>Data Scientist</TeamPosition>
          </TextWrapper>
        </TeamCard>

        <TeamCard>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemberName>James Davis</MemberName>
            <TeamPosition>Business Analyst</TeamPosition>
          </TextWrapper>
        </TeamCard>
      </Wrapper>
    </Container>
  );
};

export default Teams;
