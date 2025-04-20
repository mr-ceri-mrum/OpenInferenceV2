import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  white-space: pre-wrap;
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

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  text-align: center;
`;

const defaultButtons = [
  'Расскажи о компании',
  'Какие услуги вы предлагаете?',
  'Как связаться с менеджером?'
];

// Ответы бота для демонстрации без подключения к API
const mockResponses = {
  'live-chat': {
    'default': 'Привет! Я бот Sneakers Hub. Чем могу помочь вам сегодня?',
    'Расскажи о компании': 'Sneakers Hub - это магазин стильной и удобной обуви. Мы предлагаем широкий ассортимент кроссовок от ведущих мировых брендов.',
    'Какие услуги вы предлагаете?': 'Мы предлагаем продажу кроссовок, консультации по подбору обуви, доставку по всей стране и программу лояльности для постоянных клиентов.',
    'Как связаться с менеджером?': 'Вы можете связаться с менеджером по телефону +7 (777) 123-45-67 или отправить запрос через форму на нашем сайте.'
  },
  'assistant': {
    'default': 'Здравствуйте! Я персональный ассистент Джарвис. Как я могу вам помочь?',
    'Расскажи о компании': 'Open Inference - это компания, специализирующаяся на разработке ИИ-решений и веб-сайтов. Мы создаем инновационные продукты, которые помогают бизнесу расти.',
    'Какие услуги вы предлагаете?': 'Мы предлагаем разработку и внедрение ИИ-ботов, персональных ассистентов, веб-сайтов и консультации по цифровой трансформации.',
    'Как связаться с менеджером?': 'Вы можете связаться с менеджером по телефону +7 (777) 356-22-24 или написать на email openinference17@gmail.com.'
  }
};

// Функция для получения ответа из заготовленных вариантов
const getMockResponse = (type, message) => {
  const responses = mockResponses[type];
  return responses[message] || `Я не совсем понимаю вопрос "${message}". Пожалуйста, уточните или выберите один из предложенных вариантов.`;
};

const ChatDemo = () => {
  const [activeTab, setActiveTab] = useState('live-chat');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Используем useCallback для мемоизации функции resetChat
  const resetChat = useCallback(() => {
    setMessages([]);
    setInputValue('');
    setError(null);
    setIsTyping(true);

    // Используем локальные данные вместо обращения к API
    setTimeout(() => {
      setIsTyping(false);
      setMessages([{
        sender: 'bot',
        text: mockResponses[activeTab].default,
        buttons: defaultButtons,
        isNew: true
      }]);
    }, 1000);
  }, [activeTab]);

  useEffect(() => {
    // При первом рендеринге или изменении activeTab показываем приветственное сообщение
    resetChat();
  }, [activeTab, resetChat]); // Добавляем resetChat в массив зависимостей

  useEffect(() => {
    // Прокручиваем чат вниз при добавлении новых сообщений
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    
    // Добавляем сообщение пользователя
    const userMessage = { sender: 'user', text, isNew: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Показываем "печатает..."
    setIsTyping(true);
    
    // Используем локальные данные вместо обращения к API
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: getMockResponse(activeTab, text),
        buttons: [],
        isNew: true
      }]);
    }, 1500);
  };

  const handleButtonClick = (text) => {
    sendMessage(text);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage(inputValue);
    }
  };

  const handleSendClick = () => {
    sendMessage(inputValue);
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
            active={activeTab === 'live-chat'} 
            onClick={() => setActiveTab('live-chat')}
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
              {activeTab === 'live-chat' ? 'Чат с ботом Sneakers Hub' : 'Чат с ассистентом Джарвис'}
            </ChatHeaderTitle>
          </ChatHeader>
          
          <ChatBody ref={chatBodyRef}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            {messages.map((msg, index) => (
              <Message key={index} isNew={msg.isNew}>
                {msg.sender === 'bot' ? (
                  <BotAvatar>
                    <BotIcon>{activeTab === 'live-chat' ? '👟' : '🤖'}</BotIcon>
                  </BotAvatar>
                ) : (
                  <UserAvatar>
                    <UserIcon>👤</UserIcon>
                  </UserAvatar>
                )}
                
                <MessageContent isUser={msg.sender === 'user'}>
                  <MessageText>{msg.text}</MessageText>
                  
                  {msg.buttons && msg.buttons.length > 0 && (
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
                  <BotIcon>{activeTab === 'live-chat' ? '👟' : '🤖'}</BotIcon>
                </BotAvatar>
                <MessageContent>
                  <MessageText>печатает...</MessageText>
                </MessageContent>
              </Message>
            )}
          </ChatBody>
          
          <ChatFooter>
            <ChatInput 
              ref={inputRef}
              placeholder="Введите сообщение..." 
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <ChatSendButton onClick={handleSendClick}>
              ➤
            </ChatSendButton>
          </ChatFooter>
        </ChatContainer>
      </Container>
    </ChatDemoSection>
  );
};

export default ChatDemo;