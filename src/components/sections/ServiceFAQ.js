import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const FAQSection = styled.section`
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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  background-color: var(--white);
`;

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const QuestionText = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--dark-blue);
  margin: 0;
  flex: 1;
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  margin-left: 15px;
  color: var(--primary-purple);
  transition: var(--transition);
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? '0 20px 20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  line-height: 1.7;
  color: #666;
`;

const ServiceFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  const faqItems = [
    {
      question: 'Как ИИ-боты могут помочь моему бизнесу?',
      answer: 'ИИ-боты могут значительно повысить эффективность вашего бизнеса, автоматизируя рутинные процессы, такие как ответы на часто задаваемые вопросы, консультации клиентов, сбор информации и поддержка продаж. Они доступны 24/7, что позволяет обслуживать клиентов в любое время суток без увеличения расходов на персонал. Кроме того, они способны анализировать поведение пользователей и предоставлять персонализированные рекомендации, что может повысить конверсию и средний чек.'
    },
    {
      question: 'Сколько времени занимает разработка и внедрение ИИ-решения?',
      answer: 'Сроки разработки и внедрения зависят от сложности проекта, конкретных требований и масштаба интеграции. Типичный проект по внедрению ИИ-бота для продаж может занять от 4 до 8 недель, включая все этапы от анализа до запуска. Создание персонального ИИ-ассистента с расширенным функционалом может потребовать от 2 до 4 месяцев. На первоначальной консультации мы сможем предоставить более точные сроки, основываясь на ваших конкретных потребностях.'
    },
    {
      question: 'Требуется ли специальное оборудование или программное обеспечение для использования ваших решений?',
      answer: 'Большинство наших ИИ-решений работают на облачной инфраструктуре и не требуют специального оборудования. Для интеграции с вашими существующими системами может потребоваться API-интеграция, которую мы выполняем в рамках проекта. Наши решения доступны через веб-интерфейс, мобильные приложения или могут быть интегрированы в ваш существующий сайт или CRM-систему.'
    },
    {
      question: 'Как обеспечивается безопасность данных при использовании ИИ-решений?',
      answer: 'Мы уделяем особое внимание безопасности данных. Все наши решения разрабатываются с учетом лучших практик в области кибербезопасности. Мы используем шифрование данных, многофакторную аутентификацию и регулярные проверки безопасности. Кроме того, мы соблюдаем требования GDPR и другие соответствующие нормативные акты, гарантируя, что данные ваших клиентов и бизнеса надежно защищены.'
    },
    {
      question: 'Могу ли я интегрировать ваше ИИ-решение с уже существующими системами?',
      answer: 'Да, наши ИИ-решения созданы с учетом возможности интеграции с широким спектром существующих систем. Мы поддерживаем интеграцию с популярными CRM-системами, платформами электронной коммерции, системами управления контентом, мессенджерами и социальными сетями. Если у вас есть специфические системы, мы проведем анализ и разработаем индивидуальное решение для интеграции.'
    },
    {
      question: 'Какую поддержку вы предоставляете после внедрения ИИ-решения?',
      answer: 'После внедрения мы предоставляем комплексную поддержку, включающую мониторинг работы системы, оперативное устранение возникающих проблем, регулярные обновления и оптимизацию производительности. Мы также предлагаем обучение вашего персонала и предоставляем документацию по использованию системы. В зависимости от выбранного тарифного плана, наша поддержка может включать выделенного менеджера проекта и регулярные консультации по развитию вашего ИИ-решения.'
    }
  ];

  return (
    <FAQSection id="faq">
      <Container>
        <SectionTitle>
          <Title>Часто задаваемые вопросы</Title>
          <Subtitle>
            Ответы на наиболее распространенные вопросы о наших ИИ-решениях и процессе их внедрения
          </Subtitle>
        </SectionTitle>
        
        <FAQContainer>
          {faqItems.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                <QuestionText>{item.question}</QuestionText>
                <ToggleIcon isOpen={openFAQ === index}>▾</ToggleIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === index}>
                {item.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default ServiceFAQ;
