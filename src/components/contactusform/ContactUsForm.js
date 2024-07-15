import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/Theme';
import Footer from '../footer/Footer';


const Container = styled.div`
  padding: 25px;
  /* padding-top: 40px; */
  /* min-width: 600px; */
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  /* min-height: 500px; */
  margin: 0 auto;
  border-radius: 50px;
  background-color: #a1d1bf;
  -webkit-box-shadow: 5px 9px 12px -7px black; 
  box-shadow: 5px 9px 12px -7px black;

  @media screen and (max-width: 600px){
    max-width: 600px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #efeaea;
  border-radius: 8px;
  background-color: #88e4f0;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: 12px;
`;

const Textarea = styled.textarea`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: 1px solid #efeaea;

  resize: vertical;
  background-color: #88e4f0;
  color: black;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size  : 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 17px;
  margin-top: 1px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;

`;


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(errors);
      setSuccessMessage('');
    }
  };

  return (
    
    <>
    <GlobalStyles/>
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        
        <Textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        
        <Button type="submit">Send Message</Button>
      </Form>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      

    </Container>
    </>
  );
};



export default ContactForm;
