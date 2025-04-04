import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';
import ContactForm from '../common/ContactForm';

const ServicesListSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-gray);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const ServiceCard = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  text-align: center;
`;

const IconText = styled.span`
  font-size: 48px;
  color: var(--white);
`;

const ServiceContent = styled.div`
  padding: 30px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--dark-blue);
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
  min-height: 80px;
`;

const FeaturesList = styled.ul`
  margin-top: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: var(--primary-purple);
    font-weight: bold;
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const ServicesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openContactModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const services = [
    {
      id: 1,
      icon: '🤖',
      title: 'Внедрение ИИ ботов',
      description: 'Автоматизируйте продажи и поддержку клиентов с помощью интеллектуальных ботов, доступных 24/7.',
      features: [
        'Мгновенные ответы на вопросы клиентов',
        'Интеграция с существующими системами',
        'Персонализированные рекомендации',
        'Многоязычная поддержка'
      ]
    },
    {
      id: 2,
      icon: '🧠',
      title: 'Персональный ИИ ассистент',
      description: 'Создайте персонального ИИ ассистента, который будет помогать в решении повседневных задач.',
      features: [
        'Персонализированное взаимодействие с пользователем',
        'Голосовое управление и команды',
        'Интеграция с умным домом',
        'Планирование и напоминания'
      ]
    }
  ];

  return (
    <ServicesListSection id="services-list">
      <Container>
        <SectionTitle>
          <Title>Наши решения на базе ИИ</Title>
          <Subtitle>
            Мы предлагаем инновационные решения, которые помогут вашему бизнесу 
            использовать преимущества искусственного интеллекта
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
                <FeaturesList>
                  {service.features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </FeaturesList>
                <ButtonContainer>
                  <Button onClick={() => openContactModal(service.title)}>
                    Узнать подробнее
                  </Button>
                </ButtonContainer>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
      
      <ContactForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService}
      />
    </ServicesListSection>
  );
};

export default ServicesList;
