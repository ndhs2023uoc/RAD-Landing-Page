import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/Logo.png'
import NavImg from '../../images/Default_green_color_background_with_dark_technology_0.jpg'
import { Link } from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';

const Container  = styled.div`
  width: 100%;
  height: 10%;
  position: fixed;
  /* background-color: ${(props) => props.theme.colors}; */
  background-color: #e3f6f4;
  background-image: url(${NavImg});
  display: flex;
  justify-content: space-between; //get some space in between
  align-items: center;   //align items in the center
  position: fixed;
  margin-bottom: 1%;

  @media only screen and (max-width: 600px){
    width: 100%;
    height: 8%;
  }

  @media only screen and (min-width: 600px){
    width: 100%;
    height: 8%;
  }

  @media only screen and (min-width: 992px){
    width: 100%;
    height: 8%;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-left: 5px;
  /* background-color: #030417; */
`;


const Center = styled.div`
  display: flex;
  flex: 2;
  /* background-color: #545405; */
  justify-content: space-around;
  align-items: center;

    // for mobiles
  @media only screen and (max-width: 600px){
    display: none;
  }

  //tablets and medium screens
  @media only screen and (min-width: 600px){
    display: flex;
  }

  @media only screen and (min-width: 992px){
    display: flex;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  /* background-color: #0d0a3e; */
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 80%;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 1%;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.colors.primary};
  }
    // for mobiles
  @media only screen and (min-width: 600px){
    font-size: 15px;
    margin-right: 20px;
  }

  //tablets and medium screens
  @media only screen and (min-width: 992px){
    font-size: 20px;
    margin-right: 30px;
  }
`;

const Button =styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgDefault};
  padding: 10px 10px;
  border-radius: 10px;
  margin-left: 0;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid darkblue;
  }
`;

const DarkMode = styled.button`
  background-image: url(${LightModeIcon });
  border-radius: 50%;
`;

const NewLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Optional: to maintain text color
`;

const Navbar = ({mode, setMode}) => {
  return (
    <Container>
      <Left>
        <Logo>
          <Link to='/'>
            <LogoImage src={LogoImg}/>
          </Link>
        </Logo>
      </Left>
      <Center>
        <Menu>

          <NewLink to='/'><MenuItem>Home</MenuItem></NewLink>
          <NewLink to='/about'><MenuItem>About Us</MenuItem></NewLink>
          <NewLink to='/'><MenuItem>Services</MenuItem></NewLink>
          <NewLink to='/contact'><MenuItem>Contact Us</MenuItem></NewLink>
          <NewLink to='/'><MenuItem>Blog</MenuItem></NewLink>

        </Menu>
      </Center>
      <Right>
        {/* <SearchBar type='text' placeholder='Search...' /> */}
        <Button>Call Us Now</Button>
        <DarkMode onClick={() => setMode(!mode) }><LightModeIcon/></DarkMode>
      </Right>
    </Container>
  )
}

export default Navbar