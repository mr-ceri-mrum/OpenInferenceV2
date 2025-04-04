import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const BenefitsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(to right, var(--light-gray) 50%, var(--white) 50%);
  
  @media (max-width: 992px) {
    background: var(--light-gray);
  }
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IconText = styled.span`
  font-size: 30px;
  color: var(--white);
`;

const BenefitTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--dark-blue);
`;

const BenefitDescription = styled.p`
  color: #666;
  line-height: 1.7;
`;

const ServiceBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: '⚡',
      title: 'Повышение эффективности',
      description: 'Автоматизация рутинных задач позволяет сотрудникам сосредоточиться на более важных и творческих аспектах работы.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Снижение затрат',
      description: 'ИИ-решения помогают оптимизировать расходы на персонал и минимизировать операционные издержки.'
    },
    {
      id: 3,
      icon: '📈',
      title: 'Рост конверсии',
      description: 'Персонализированные ИИ-боты способны значительно повысить конверсию и средний чек благодаря индивидуальному подходу.'
    },
    {
      id: 4,
      icon: '🔄',
      title: 'Масштабируемость',
      description: 'Наши решения легко масштабируются в соответствии с ростом вашего бизнеса без необходимости найма дополнительного персонала.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Аналитика данных',
      description: 'Получайте ценные инсайты о поведении и предпочтениях клиентов для принятия более эффективных бизнес-решений.'
    },
    {
      id: 6,
      icon: '🌎',
      title: 'Глобальный охват',
      description: 'Многоязычная поддержка и круглосуточная доступность позволяют обслуживать клиентов по всему миру.'
    }
  ];

  return (
    <BenefitsSection id="benefits">
      <Container>
        <SectionTitle>
          <Title>Преимущества наших ИИ-решений</Title>
          <Subtitle>
            Узнайте, как наши технологии могут трансформировать ваш бизнес и обеспечить конкурентное преимущество
          </Subtitle>
        </SectionTitle>
        
        <BenefitsGrid>
          {benefits.map(benefit => (
            <BenefitCard key={benefit.id}>
              <IconContainer>
                <IconText>{benefit.icon}</IconText>
              </IconContainer>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Container>
    </BenefitsSection>
  );
};

export default ServiceBenefits;
