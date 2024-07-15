import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  margin-top: 0px;
  height: 40%;
  flex-direction: row;
  padding-top: 0%;

  @media only screen and (max-width: 650px){
    height: 26%;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 0.5%;
  /* margin-top: 10%; */
  @media only screen and (max-width: 650px){
    font-size: 15px;
  }
`;

const Descrition = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 50%;
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 2%;
  padding-top: 0%;
  @media only screen and (max-width: 650px){
    font-size: 15px;
    width: 40%;
    display: none;
  }
  /* @media only screen and (min-width: 600px){
   flex: 1;
   padding-left: 5%;
  } */

`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
  padding-top: 0%;

`;

const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.colors.text};
  }
  flex-direction: column;
  @media only screen and (max-width: 650px){
    font-size: 15px;
  }
`;

const MenuItems = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  margin-top: 5%;
  @media only screen and (max-width: 650px){
    font-size: 15px;
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4%;
  background-color: gray;
  color: white;
  font-size: 15px;
`;

const Footer = () => {
  return (
    <>
    <Container>
      <Descrition>
        <Title>About Us</Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi consequuntur soluta suscipit fugit porro possimus, ab, eligendi fuga consequatur dolor quis cumque perferendis repellendus voluptatem, voluptatibus dicta? Eveniet, nam ipsum?
      </Descrition>
      {/* <Descrition> */}
      <MenuItems>
      <Title>Our Services</Title>
      <Menu>

        <MenuItem>Home</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact Us</MenuItem>
        <MenuItem>Blog</MenuItem>

      </Menu>
      </MenuItems>
      {/* </Descrition> */}

      <MenuItems>
      <Title>Our Policy</Title>
      <Menu>

        <MenuItem>Privacy Policy</MenuItem>
        <MenuItem>Data Policy</MenuItem>

      </Menu>
      </MenuItems>
    </Container>
      <CopyRight>
        &copy; 2022 &lt; Code Galaxy/ &gt; - All Rights Reserved.
      </CopyRight>
    </>

  );
};

export default Footer