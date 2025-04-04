import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';

const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-gray);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  text-align: center;
`;

const IconText = styled.span`
  font-size: 40px;
  color: var(--white);
`;

const ServiceContent = styled.div`
  padding: 30px;
`;

const ServiceTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--dark-blue);
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🌐',
      title: 'Разработка веб-сайтов',
      description: 'Создаем современные, адаптивные и высокопроизводительные сайты, которые привлекают клиентов и повышают конверсию.',
      link: '#'
    },
    {
      id: 2,
      icon: '🤖',
      title: 'Разработка ИИ-решений',
      description: 'Создаем и внедряем системы искусственного интеллекта, которые автоматизируют процессы и улучшают взаимодействие с клиентами.',
      link: '#'
    },
    {
      id: 3,
      icon: '🔄',
      title: 'Интеграция ИИ',
      description: 'Интегрируем технологии искусственного интеллекта в существующие системы и процессы вашего бизнеса.',
      link: '#'
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>
          <Title>Наши услуги</Title>
          <Subtitle>
            Мы предлагаем полный спектр услуг по разработке веб-сайтов и внедрению технологий искусственного интеллекта
          </Subtitle>
        </SectionTitle>
        
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceIcon>
                <IconText>{service.icon}</IconText>
              </ServiceIcon>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <Button href={service.link}>Подробнее</Button>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
