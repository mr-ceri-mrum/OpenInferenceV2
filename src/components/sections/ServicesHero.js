import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const HeroSection = styled.section`
  padding: 180px 0 100px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: var(--white);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto 30px;
`;

const ServicesHero = () => {
  return (
    <HeroSection>
      <Container>
        <Title>Наши услуги</Title>
        <Subtitle>
          Передовые решения в области искусственного интеллекта для оптимизации 
          и трансформации вашего бизнеса
        </Subtitle>
      </Container>
    </HeroSection>
  );
};

export default ServicesHero;
