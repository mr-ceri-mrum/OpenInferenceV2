import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';
import ContactForm from '../common/ContactForm';

const ServiceDetailsSection = styled.section`
  padding: 100px 0;
  background-color: var(--white);
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))' : 'var(--white)'};
  color: ${props => props.active ? 'var(--white)' : 'var(--dark-blue)'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e1e1e1'};
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, var(--primary-blue), var(--primary-purple))' : '#f5f5f5'};
  }
  
  @media (max-width: 768px) {
    margin: 10px 0;
    width: 80%;
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    margin-bottom: 30px;
    order: ${props => props.reverse ? 2 : 1};
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    order: ${props => props.reverse ? 1 : 2};
  }
`;

const ContentTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--dark-blue);
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.8;
`;

const FeaturesList = styled.ul`
  margin: 20px 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "✓";
    color: var(--primary-purple);
    font-weight: bold;
    margin-right: 10px;
    flex-shrink: 0;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: var(--primary-purple);
`;

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState('chatbots');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openContactModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <ServiceDetailsSection id="service-details">
      <Container>
        <SectionTitle>
          <Title>Подробнее о наших услугах</Title>
          <Subtitle>
            Узнайте, как наши ИИ-решения могут трансформировать ваш бизнес и повысить эффективность
          </Subtitle>
        </SectionTitle>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'chatbots'} 
            onClick={() => handleTabChange('chatbots')}
          >
            ИИ боты для продаж
          </TabButton>
          <TabButton 
            active={activeTab === 'assistants'} 
            onClick={() => handleTabChange('assistants')}
          >
            Персональные ИИ ассистенты
          </TabButton>
        </TabsContainer>
        
        <ContentContainer>
          <TabContent active={activeTab === 'chatbots'}>
            <FlexContainer>
              <TextContainer>
                <ContentTitle>ИИ-боты для автоматизации продаж и консультаций</ContentTitle>
                <Description>
                  Наши интеллектуальные чат-боты способны значительно повысить эффективность ваших продаж и улучшить обслуживание клиентов. Они доступны 24/7 и мгновенно отвечают на запросы, что позволяет повысить конверсию и удовлетворенность клиентов.
                </Description>
                <FeaturesList>
                  <FeatureItem>Обработка запросов клиентов в режиме реального времени</FeatureItem>
                  <FeatureItem>Интеграция с CRM-системами и платформами электронной коммерции</FeatureItem>
                  <FeatureItem>Анализ поведения пользователей и персонализация предложений</FeatureItem>
                  <FeatureItem>Многоязычная поддержка для глобального охвата</FeatureItem>
                  <FeatureItem>Легкое масштабирование без дополнительных затрат на персонал</FeatureItem>
                </FeaturesList>
                <Button onClick={() => openContactModal('ИИ-бот для продаж')}>Заказать консультацию</Button>
              </TextContainer>
              <ImageContainer>
                <PlaceholderImage>🤖</PlaceholderImage>
              </ImageContainer>
            </FlexContainer>
          </TabContent>
          
          <TabContent active={activeTab === 'assistants'}>
            <FlexContainer>
              <ImageContainer reverse>
                <PlaceholderImage>🧠</PlaceholderImage>
              </ImageContainer>
              <TextContainer reverse>
                <ContentTitle>Персональные ИИ-ассистенты (как Джарвис)</ContentTitle>
                <Description>
                  Представьте себе интеллектуального помощника, который понимает ваши потребности и предпочтения, помогает в решении повседневных задач и эффективно управляет вашим расписанием. Наши персональные ИИ-ассистенты созданы для того, чтобы сделать вашу жизнь проще и эффективнее.
                </Description>
                <FeaturesList>
                  <FeatureItem>Голосовое управление и естественное общение</FeatureItem>
                  <FeatureItem>Интеграция с умным домом и офисными системами</FeatureItem>
                  <FeatureItem>Управление календарем, напоминаниями и встречами</FeatureItem>
                  <FeatureItem>Поиск информации и анализ данных</FeatureItem>
                  <FeatureItem>Автоматизация рутинных задач и управление проектами</FeatureItem>
                </FeaturesList>
                <Button onClick={() => openContactModal('Персональный ИИ-ассистент')}>Заказать разработку</Button>
              </TextContainer>
            </FlexContainer>
          </TabContent>
        </ContentContainer>
      </Container>
      
      <ContactForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService}
      />
    </ServiceDetailsSection>
  );
};

export default ServiceDetails;
