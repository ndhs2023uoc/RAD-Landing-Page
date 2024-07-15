import styled from 'styled-components';
import bgImage from '../../images/55.jpg'

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  margin-top: 4% ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 40px 30px 40px;
  padding-bottom: 10px;
  border-radius: 15px;
  flex-direction: ${({ direction }) => direction};
  /* background-color: ${(props) => props.theme.colors.sectionOneColor}; */
  /* background-color: #022a2a; */
  /* flex-direction: column; */

  background-color: ${({ section, theme }) => 
    section === 'sectionOne' ? theme.colors.sectionOneColor : 
    section === 'sectionThree' ? theme.colors.sectionThreeColor : 
    theme.colors.bgDefault};

  @media only screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
  
  margin-left: 3%;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  /* margin-bottom: 10 px; */
  margin-top: 40px; 
  margin-left: 3%;

`;

export const Description = styled.p`
  /* color: ${(props) => props.theme.colors.textDark}; */
  color: ${(props) => props.theme.colors.sectionOneText};
  margin: 20px;
  margin-left: 3%;

  @media only screen and (max-width: 600px){
    width: 90%;
    margin: 5px;
  }
`;

export const Right = styled.div`
  width: 40%;
  align-items: center;
  @media only screen and (max-width: 600px){
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 90%;
  @media only screen and (max-width: 600px){
    width: 100%;
  }
`;

export const Left = styled.div`
  width: 60%;
  @media only screen and (max-width: 600px){
    justify-content: center;
    align-items: center;
    margin: -15% 15% 15% 15%;
  }
`;

export const List = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  min-width: 250px;
  text-align: left;
  padding: 20px 20px;
  margin: 5px;
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  -webkit-box-shadow: 6px 5px 14px 2px rgba(208, 86, 165, 0.86); 
  box-shadow: 6px 5px 14px 2px rgba(81, 236, 212, 0.523);

  @media only screen and (max-width: 600px){
    font-size: 13px;
    max-width: 180px;
  }
`;