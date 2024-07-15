import React from 'react'
import styled from 'styled-components'
import heroImage from '../../images/1.jpg'
import heroBackground from '../../images/55.jpg'

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.bgDefault};
  background-color: #2e2eb5;
  margin-left: 5px;
  padding: 15px 30px ;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(to right, ${(props) => props.theme.colors.bgLight} 50%, ${(props) => props.theme.colors.primary} 50%);
  background-size:200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover{
    color:darkblue;
    border: 2px solid blue;
    background-position:  left bottom;
    cursor: pointer;
  }
  // for mobiles
  @media only screen and (max-width: 600px){
    padding: 10px 25px;
  }

  //tablets and medium screens
  @media only screen and (min-width: 600px){
    padding: 10px 30px;
  }

  @media only screen and (min-width: 992px){
    padding: 15px 30px;
  }

`;

const Container = styled.div`
  display: flex;
  padding-bottom: 20px ;
  background-color: ${(props) => props.theme.colors.bgDefault};
  /* margin-top: 20px; */
  /* padding-top: 10%; */
  @media only screen and (max-width: 600px){
    padding-top: 12% ;
  }
  @media only screen and (min-width: 600px){
    padding-top: 12% ;
  }
  @media only screen and (min-width: 992px){
    padding-top: 0% ;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textDark};
  width: 80%;
  margin-bottom: 5px;
    // for mobiles
  @media only screen and (max-width: 600px){
    width: 80%;
    text-align: center;
    margin-top: 9px;
  }

  //tablets and medium screens
  @media only screen and (min-width: 600px){
    width: 80%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 992px){
    width: 70%;
  }
`;

const Image = styled.img`
  width: 100%;
  //tablets and medium screens
  /* @media only screen and (min-width: 600px){
    width: 100%;
  } */
  @media only screen and (min-width: 992px){
    width: 500px;
  }
`;

const Left = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // for mobiles
  @media only screen and (max-width: 600px){
    width: 100%;
    font-size: 5px;
  }

  //tablets and medium screens
  @media only screen and (min-width: 600px){
    width: 80%;
  }

  @media only screen and (min-width: 992px){
    width: 60%;
    margin-top: 3%;

  }

`;

const Right = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
  margin-top: 5%;
    // for mobiles
  @media only screen and (max-width: 600px){
    display: none;
  }
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

    // for mobiles
  @media only screen and (max-width: 600px){
    width: 100%;
    font-size: 30px;
  }

  //tablets and medium screens
  @media only screen and (min-width: 600px){
    width: 85%;
    font-size: 30px;
    /* margin-top: 70px; */
    
  }

  @media only screen and (min-width: 992px){
    width: 80%;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>
          Explore the Universe of Coding with <br/>&lt; Code Galaxy/ &gt;
        </Title>
        <Description>
          Unlock the secrets of programming with interactive lessons, expert guidance, and a community of passionate learners. Start your journey with &lt;Code Galaxy/&gt; today and transform your coding skills from beginner to expert.
        </Description>
        <ButtonContainer>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <Image src={heroImage} />
      </Right>
    </Container>
  )
}

export default Hero