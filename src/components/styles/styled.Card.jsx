import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  -webkit-box-shadow: 6px 5px 14px 2px rgba(208, 86, 165, 0.86); 
  box-shadow: 6px 5px 14px 2px rgba(81, 236, 212, 0.523);
  margin: 30px;
  background: linear-gradient(to right, ${(props) => props.theme.colors.infoBoxTransform} 50%, ${(props) => props.theme.colors.bgDefault} 50%);
  background-size:200% 100%;
  background-position: right bottom;
  border-radius: 40px;

  transition: all 0.5s ease-out;
  &:hover{ 
    /* color: ${(props) => props.theme.colors.text}; */
    background-position:  left bottom;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  border-radius: 50px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  margin-top: 5px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: center;
`;

export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;

