import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';
import PreviewVideo from '../../assets/previe.mp4';

const SolutionsSection = styled.section`
  padding: 100px 0;
`;

const SolutionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const SolutionsMedia = styled.div`
  flex: 1;
  margin-right: 50px;
  max-width: 350px;
  
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
    max-width: 350px;
    margin: 0 auto 40px;
  }
`;

// Контейнер в стиле телефона
const PhoneContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 40px 10px;
  border-radius: 36px;
  background-color: #1a1a1a;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 10px;
    background-color: #444;
    border-radius: 10px;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    border: 2px solid #444;
    border-radius: 50%;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  padding-top: 177.78%; /* Соотношение сторон 9:16 для вертикального видео как на телефоне */
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SolutionsText = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const SolutionsList = styled.div`
  margin-top: 30px;
`;

const SolutionItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const SolutionIcon = styled.span`
  margin-right: 15px;
  font-size: 24px;
  color: var(--primary-purple);
`;

const SolutionItemText = styled.div``;

const SolutionItemTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--dark-blue);
`;

const SolutionItemDescription = styled.p`
  color: #666;
  margin-bottom: 0;
`;

const AISolutions = () => {
  const solutions = [
    {
      id: 1,
      icon: '🔍',
      title: 'Интеллектуальный поиск',
      description: 'Системы поиска, которые понимают намерения пользователей и предоставляют релевантные результаты.'
    },
    {
      id: 2,
      icon: '💬',
      title: 'Чат-боты и виртуальные ассистенты',
      description: 'Умные боты, способные общаться с клиентами и решать их задачи в режиме реального времени.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Аналитика данных',
      description: 'Системы анализа больших данных для выявления трендов и принятия обоснованных бизнес-решений.'
    }
  ];

  return (
    <SolutionsSection id="ai-solutions">
      <Container>
        <SolutionsContent>
          <SolutionsMedia>
            <PhoneContainer>
              <VideoContainer>
                <Video src={PreviewVideo} controls />
              </VideoContainer>
            </PhoneContainer>
          </SolutionsMedia>
          
          <SolutionsText>
            <Title>Наши ИИ-решения для вашего бизнеса</Title>
            <Description>
              Open Inference предлагает инновационные решения на базе искусственного интеллекта,
              которые помогают оптимизировать бизнес-процессы, автоматизировать рутинные задачи
              и повышать качество обслуживания клиентов.
            </Description>
            
            <SolutionsList>
              {solutions.map(solution => (
                <SolutionItem key={solution.id}>
                  <SolutionIcon>{solution.icon}</SolutionIcon>
                  <SolutionItemText>
                    <SolutionItemTitle>{solution.title}</SolutionItemTitle>
                    <SolutionItemDescription>{solution.description}</SolutionItemDescription>
                  </SolutionItemText>
                </SolutionItem>
              ))}
            </SolutionsList>
            
            <Button href="#contact">Узнать больше</Button>
          </SolutionsText>
        </SolutionsContent>
      </Container>
    </SolutionsSection>
  );
};

export default AISolutions;
