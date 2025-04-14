import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const ProcessSection = styled.section`
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

const ProcessTimeline = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, var(--primary-blue), var(--primary-purple));
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const ProcessStep = styled.div`
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-start' : 'flex-end'};
  margin-bottom: 60px;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 30px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StepContent = styled.div`
  width: 45%;
  padding: 30px;
  background-color: var(--light-gray);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 30px;
    width: 20px;
    height: 20px;
    background-color: var(--white);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    
    ${props => props.$isEven 
      ? 'right: -20px; border-left: 20px solid var(--light-gray);' 
      : 'left: -20px; border-right: 20px solid var(--light-gray);'
    }
    
    @media (max-width: 768px) {
      left: -20px; 
      border-right: 20px solid var(--light-gray);
      border-left: none;
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 20px;
  ${props => props.$isEven ? 'left: calc(45% + 50px);' : 'right: calc(45% + 50px);'}
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 18px;
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 0;
    right: auto;
  }
`;

const StepTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--dark-blue);
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.7;
`;

const ServiceProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Анализ и консультация',
      description: 'Мы проводим глубокий анализ ваших бизнес-процессов и потребностей, определяя области, где ИИ-решения могут принести максимальную пользу. На этом этапе мы консультируем вас о возможностях и ограничениях технологий.'
    },
    {
      id: 2,
      title: 'Разработка стратегии и планирование',
      description: 'На основе проведенного анализа мы разрабатываем детальную стратегию внедрения, включающую временные рамки, необходимые ресурсы и ожидаемые результаты. Мы согласовываем с вами все детали и вносим необходимые корректировки.'
    },
    {
      id: 3,
      title: 'Проектирование и разработка',
      description: 'Наши специалисты приступают к созданию кастомизированного ИИ-решения, адаптированного под ваши уникальные потребности. На этом этапе мы регулярно демонстрируем промежуточные результаты и собираем обратную связь.'
    },
    {
      id: 4,
      title: 'Тестирование и оптимизация',
      description: 'Мы проводим многоуровневое тестирование решения, выявляя и устраняя возможные проблемы. Особое внимание уделяется производительности, безопасности и удобству использования.'
    },
    {
      id: 5,
      title: 'Внедрение и интеграция',
      description: 'Мы интегрируем ИИ-решение в вашу существующую инфраструктуру, обеспечивая плавный переход и минимальное влияние на текущие бизнес-процессы. При необходимости проводим обучение персонала.'
    },
    {
      id: 6,
      title: 'Поддержка и развитие',
      description: 'Мы предоставляем постоянную техническую поддержку, мониторим производительность решения и регулярно обновляем его для соответствия изменяющимся требованиям вашего бизнеса.'
    }
  ];

  return (
    <ProcessSection id="process">
      <Container>
        <SectionTitle>
          <Title>Наш процесс разработки и внедрения</Title>
          <Subtitle>
            Мы следуем структурированному подходу, который гарантирует успешное внедрение наших ИИ-решений в ваш бизнес
          </Subtitle>
        </SectionTitle>
        
        <ProcessTimeline>
          {processSteps.map(step => (
            <ProcessStep key={step.id} $isEven={step.id % 2 === 0}>
              <StepNumber $isEven={step.id % 2 === 0}>{step.id}</StepNumber>
              <StepContent $isEven={step.id % 2 === 0}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </ProcessStep>
          ))}
        </ProcessTimeline>
      </Container>
    </ProcessSection>
  );
};

export default ServiceProcess;