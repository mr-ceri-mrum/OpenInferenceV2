import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';

const ErrorSection = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple), var(--primary-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const ErrorDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple));
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ErrorPage = () => {
  return (
    <ErrorSection>
      <Container>
        <ErrorTitle>Что-то пошло не так</ErrorTitle>
        <ErrorDescription>
          К сожалению, страница, которую вы ищете, не существует или возникла ошибка при её загрузке.
        </ErrorDescription>
        <HomeButton to="/">Вернуться на главную</HomeButton>
      </Container>
    </ErrorSection>
  );
};

export default ErrorPage;