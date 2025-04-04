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
  
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
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

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const VideoIcon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
`;

const VideoText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
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
            <VideoContainer>
              <Video src={PreviewVideo} controls />
            </VideoContainer>
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
