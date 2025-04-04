import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const ChatDemoSection = styled.section`
  padding: 80px 0;
  background-color: var(--white);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
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
  margin-bottom: 30px;
  
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

const ChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fef7f4;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: var(--white);
  padding: 20px;
  text-align: center;
`;

const ChatHeaderTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

const ChatBody = styled.div`
  padding: 20px;
  height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Message = styled.div`
  display: flex;
  margin-bottom: 15px;
  animation: ${props => props.isNew ? 'fadeIn 0.5s ease' : 'none'};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const BotAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
`;

const BotIcon = styled.div`
  color: var(--primary-purple);
  font-size: 20px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e6f7f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  flex-shrink: 0;
  order: 2;
`;

const UserIcon = styled.div`
  color: var(--primary-blue);
  font-size: 20px;
`;

const MessageContent = styled.div`
  flex: 1;
  background-color: ${props => props.isUser ? '#e6f7f2' : 'white'};
  padding: 12px 15px;
  border-radius: ${props => props.isUser ? '15px 15px 0 15px' : '15px 15px 15px 0'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  order: ${props => props.isUser ? 1 : 0};
  max-width: 80%;
`;

const MessageText = styled.p`
  margin: 0;
  color: var(--dark-blue);
  line-height: 1.5;
`;

const QuestionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const QuestionButton = styled.button`
  background-color: var(--white);
  border: 1px solid var(--primary-purple);
  color: var(--primary-purple);
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 14px;
  
  &:hover {
    background-color: var(--primary-purple);
    color: var(--white);
  }
`;

const ChatFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #f0f0f0;
  display: flex;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  outline: none;
  font-size: 16px;
  
  &:focus {
    border-color: var(--primary-purple);
    box-shadow: 0 0 0 2px rgba(123, 47, 247, 0.1);
  }
`;

const ChatSendButton = styled.button`
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: var(--white);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-left: 10px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ChatDemo = () => {
  const [activeTab, setActiveTab] = useState('shoes');
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const shoesScenario = [
    { sender: 'bot', text: 'Привет! Я виртуальный консультант магазина кроссовок Sneakers Hub. Как я могу помочь вам сегодня?', buttons: ['Хочу выбрать кроссовки', 'Расскажи о брендах', 'Есть ли скидки?'] },
    { sender: 'user', text: 'Хочу выбрать кроссовки' },
    { sender: 'bot', text: 'Отлично! Для каких целей вам нужны кроссовки?', buttons: ['Для бега', 'Для повседневной носки', 'Для тренировок в зале'] },
    { sender: 'user', text: 'Для бега' },
    { sender: 'bot', text: 'Хороший выбор! У нас есть отличные беговые модели. Какой у вас бюджет?', buttons: ['До 10000 тенге', '10000-30000 тенге', 'Более 30000 тенге'] },
    { sender: 'user', text: '10000-30000 тенге' },
    { sender: 'bot', text: 'Замечательно! Порекомендую несколько вариантов в вашем бюджете. Какой размер обуви вы носите?', buttons: ['41', '42', '43', 'Другой'] },
    { sender: 'user', text: '42' },
    { sender: 'bot', text: 'Отлично! Вот несколько рекомендаций для вас:\n\n1. Nike Air Zoom Pegasus 38 - 25 900 тенге\n2. Adidas Supernova - 23 500 тенге\n3. Puma Velocity Nitro - 22 800 тенге\n\nВсе модели доступны в размере 42 и идеально подходят для бега. Какая из них вас заинтересовала?', buttons: ['Nike Air Zoom Pegasus 38', 'Adidas Supernova', 'Puma Velocity Nitro', 'Показать еще'] },
    { sender: 'user', text: 'Nike Air Zoom Pegasus 38' },
    { sender: 'bot', text: 'Отличный выбор! Nike Air Zoom Pegasus 38 — это легкие и отзывчивые беговые кроссовки с амортизацией Zoom Air, которая обеспечивает мягкость и упругость при каждом шаге. Они доступны в нескольких цветах. Какой цвет вы предпочитаете?', buttons: ['Черный', 'Белый', 'Синий', 'Показать все цвета'] },
    { sender: 'user', text: 'Черный' },
    { sender: 'bot', text: 'Супер! Nike Air Zoom Pegasus 38 в черном цвете отлично смотрится и прекрасно подойдет для любого наряда. Хотите оформить заказ или у вас есть дополнительные вопросы?', buttons: ['Оформить заказ', 'Есть ли в наличии сейчас?', 'Можно ли примерить?'] },
    { sender: 'user', text: 'Оформить заказ' },
    { sender: 'bot', text: 'Отлично! Я подготовил вашу корзину с Nike Air Zoom Pegasus 38, черного цвета, размер 42, цена 25 900 тенге. Для оформления заказа, пожалуйста, перейдите к оплате. Спасибо за выбор Sneakers Hub! 😊', buttons: ['Перейти к оплате', 'Вернуться в каталог'] }
  ];

  const assistantScenario = [
    { sender: 'bot', text: 'Привет! Я ваш персональный ИИ-ассистент Джарвис. Чем могу помочь вам сегодня?', buttons: ['Планирование дня', 'Напомнить о встрече', 'Управление умным домом'] },
    { sender: 'user', text: 'Планирование дня' },
    { sender: 'bot', text: 'С удовольствием помогу вам спланировать день. Какой сегодня день у вас запланирован?', buttons: ['Рабочий день', 'Выходной', 'Смешанный'] },
    { sender: 'user', text: 'Рабочий день' },
    { sender: 'bot', text: 'Понятно. Я проверил ваш календарь на сегодня. У вас запланированы следующие встречи:\n\n9:00 - Командный митинг\n12:30 - Обед с клиентом\n15:00 - Презентация проекта\n\nХотите, чтобы я внес изменения или добавил что-то в ваше расписание?', buttons: ['Добавить задачу', 'Перенести встречу', 'Напомнить о встрече'] },
    { sender: 'user', text: 'Добавить задачу' },
    { sender: 'bot', text: 'Конечно! Какую задачу вы хотите добавить в свое расписание?', buttons: ['Спортзал после работы', 'Купить продукты', 'Позвонить родителям'] },
    { sender: 'user', text: 'Спортзал после работы' },
    { sender: 'bot', text: 'В какое время вы хотели бы запланировать посещение спортзала?', buttons: ['18:00', '19:00', '20:00'] },
    { sender: 'user', text: '18:00' },
    { sender: 'bot', text: 'Добавил в ваше расписание "Спортзал" на 18:00. Ваше обновленное расписание на сегодня:\n\n9:00 - Командный митинг\n12:30 - Обед с клиентом\n15:00 - Презентация проекта\n18:00 - Спортзал\n\nХотите, чтобы я установил напоминания?', buttons: ['Да, за 30 минут', 'Да, за 1 час', 'Нет, спасибо'] },
    { sender: 'user', text: 'Да, за 30 минут' },
    { sender: 'bot', text: 'Отлично! Я установил напоминания за 30 минут до каждого события. Обратите внимание, что дорога до спортзала в это время может занять около 25 минут из-за пробок. Хотите, чтобы я проложил оптимальный маршрут?', buttons: ['Да, пожалуйста', 'Нет, я знаю дорогу'] },
    { sender: 'user', text: 'Да, пожалуйста' },
    { sender: 'bot', text: 'Я проложил оптимальный маршрут от вашего офиса до спортзала. В 17:30 я отправлю вам уведомление с картой и текущей ситуацией на дорогах. Что-нибудь еще, чем я могу помочь вам сегодня?', buttons: ['Включить кондиционер дома к приходу', 'Заказать такси', 'Нет, спасибо'] },
    { sender: 'user', text: 'Включить кондиционер дома к приходу' },
    { sender: 'bot', text: 'Я настрою ваш умный дом так, чтобы кондиционер включился в 19:30, к вашему приходу из спортзала. Какую температуру установить?', buttons: ['22°C', '24°C', '20°C'] },
    { sender: 'user', text: '22°C' },
    { sender: 'bot', text: 'Готово! Кондиционер включится в 19:30 и установит температуру 22°C. Также я включу приглушенное освещение в гостиной для создания комфортной атмосферы после тренировки. Что-нибудь еще?', buttons: ['Нет, спасибо', 'Приготовить кофе к приходу', 'Включить музыку'] },
    { sender: 'user', text: 'Нет, спасибо' },
    { sender: 'bot', text: 'Отлично! Ваш день спланирован. Я буду держать вас в курсе всех событий и помогу организовать день максимально эффективно. Хорошего вам дня! 😊', buttons: ['Спасибо, Джарвис!', 'Показать мое расписание еще раз'] }
  ];

  useEffect(() => {
    resetChat();
  }, [activeTab]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const resetChat = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    
    // Добавляем первое сообщение от бота
    const scenario = activeTab === 'shoes' ? shoesScenario : assistantScenario;
    setTimeout(() => {
      setMessages([scenario[0]]);
      setCurrentMessageIndex(1);
    }, 500);
  };

  const handleButtonClick = (text) => {
    const scenario = activeTab === 'shoes' ? shoesScenario : assistantScenario;
    
    if (currentMessageIndex < scenario.length) {
      // Добавляем сообщение пользователя
      setMessages(prev => [...prev, { sender: 'user', text, isNew: true }]);
      
      // Показываем "печатает..."
      setIsTyping(true);
      
      // Добавляем ответ бота через задержку
      setTimeout(() => {
        setIsTyping(false);
        if (currentMessageIndex < scenario.length) {
          setMessages(prev => [...prev, { ...scenario[currentMessageIndex], isNew: true }]);
          setCurrentMessageIndex(currentMessageIndex + 1);
        }
      }, 1500);
    }
  };

  return (
    <ChatDemoSection id="chat-demo">
      <Container>
        <SectionTitle>
          <Title>Демонстрация работы ИИ</Title>
          <Subtitle>
            Посмотрите, как работают наши ИИ-решения в реальных сценариях
          </Subtitle>
        </SectionTitle>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'shoes'} 
            onClick={() => setActiveTab('shoes')}
          >
            ИИ бот для магазина
          </TabButton>
          <TabButton 
            active={activeTab === 'assistant'} 
            onClick={() => setActiveTab('assistant')}
          >
            Персональный ассистент
          </TabButton>
        </TabsContainer>
        
        <ChatContainer>
          <ChatHeader>
            <ChatHeaderTitle>
              {activeTab === 'shoes' ? 'Чат с ботом Sneakers Hub' : 'Чат с ассистентом Джарвис'}
            </ChatHeaderTitle>
          </ChatHeader>
          
          <ChatBody ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <Message key={index} isNew={msg.isNew}>
                {msg.sender === 'bot' ? (
                  <BotAvatar>
                    <BotIcon>{activeTab === 'shoes' ? '👟' : '🤖'}</BotIcon>
                  </BotAvatar>
                ) : (
                  <UserAvatar>
                    <UserIcon>👤</UserIcon>
                  </UserAvatar>
                )}
                
                <MessageContent isUser={msg.sender === 'user'}>
                  <MessageText>{msg.text}</MessageText>
                  
                  {msg.buttons && (
                    <QuestionButtons>
                      {msg.buttons.map((btn, btnIndex) => (
                        <QuestionButton 
                          key={btnIndex} 
                          onClick={() => handleButtonClick(btn)}
                        >
                          {btn}
                        </QuestionButton>
                      ))}
                    </QuestionButtons>
                  )}
                </MessageContent>
              </Message>
            ))}
            
            {isTyping && (
              <Message>
                <BotAvatar>
                  <BotIcon>{activeTab === 'shoes' ? '👟' : '🤖'}</BotIcon>
                </BotAvatar>
                <MessageContent>
                  <MessageText>печатает...</MessageText>
                </MessageContent>
              </Message>
            )}
          </ChatBody>
          
          <ChatFooter>
            <ChatInput 
              placeholder="Введите сообщение..." 
              disabled
            />
            <ChatSendButton>
              ➤
            </ChatSendButton>
          </ChatFooter>
        </ChatContainer>
      </Container>
    </ChatDemoSection>
  );
};

export default ChatDemo;
