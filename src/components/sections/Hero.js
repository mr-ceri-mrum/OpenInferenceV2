import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';

const HeroSection = styled.section`
  padding-top: 120px;
  padding-bottom: 80px;
  
  @media (max-width: 992px) {
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding-top: 90px; /* Уменьшаем верхний отступ для мобильных устройств с учетом уменьшенного хедера */
    padding-bottom: 60px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroTextContainer = styled.div`
  flex: 1;
  padding-right: 50px;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple), var(--primary-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 280px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    height: 240px;
  }
`;

const HeroImageContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const HeroImageTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.4em;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

const HeroImageText = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85em;
    margin-bottom: 15px;
    line-height: 1.4;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroTextContainer>
            <HeroTitle>Инновационные веб-решения и искусственный интеллект</HeroTitle>
            <HeroDescription>
              Мы создаем современные сайты и внедряем технологии искусственного интеллекта, 
              которые помогают бизнесу расти и достигать новых высот.
            </HeroDescription>
            <Button href="#services">Наши услуги</Button>
          </HeroTextContainer>
          
          <HeroImageContainer>
            <HeroImage>
              <HeroImageContent>
                <HeroImageTitle>Инновационные веб-решения и искусственный интеллект</HeroImageTitle>
                <HeroImageText>
                  Мы создаем современные сайты и внедряем технологии искусственного интеллекта, 
                  которые помогают бизнесу расти и достигать новых высот.
                </HeroImageText>
                <Button variant="secondary" href="#services">Наши услуги</Button>
              </HeroImageContent>
            </HeroImage>
          </HeroImageContainer>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;