import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components';

const NotFound = () => {
  return (
    <>
    <Navbar />
    <Wrapper>
      <Title>404 Not Found</Title>
      <Message>Sorry, the page you are looking for does not exist.</Message>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

export default NotFound;