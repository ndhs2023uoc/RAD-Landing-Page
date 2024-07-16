import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../theme/Theme";

const Header = styled.h1`
  justify-content: center;
  color: ${(props) => props.theme.colors.welcomeheader};
`;

const ContainerForMessage = styled.div`
  display: flex;
  flex-direction: row;
`;

const Welcomemessage = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.welcometime};
`;

const GreetingMessage = styled.p`
  color: ${(props) => props.theme.colors.welcomemessage};
  font-size: 30px;
  margin-top: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  padding: 12px 20px;
  border: 2px solid #0781ae;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #8fedbb;
  color: white;
  font-weight: bold;
`;

const WelcomeMessage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setWelcomeMessage(inputValue);
      setInputValue("");
    }
  };

  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Welcomemessage>
        <ContainerForMessage>
          <Header>Welcome to &lt; Code Galaxy/ &gt;</Header>
        </ContainerForMessage>
        <Text>Current Time: {currentTime.toLocaleTimeString()}</Text>
        {welcomeMessage === "" ? (
          <Input
            type="text"
            placeholder="Please Enter your name"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <GreetingMessage>
            {`${getGreeting()}, ${welcomeMessage}!`}
          </GreetingMessage>
        )}
      </Welcomemessage>
    </>
  );
};

export default WelcomeMessage;
