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

// Резервные ответы на случай, если API не ответит
const fallbackResponses = {
  'Расскажи о компании': 'Open Inference — ведущая компания по разработке инновационных ИИ-решений. Мы специализируемся на создании интеллектуальных ботов, систем автоматизации и персональных ассистентов для бизнеса.',
  'Какие услуги вы предлагаете?': 'Мы предлагаем широкий спектр услуг: разработку чат-ботов, создание персональных ИИ-ассистентов, автоматизацию бизнес-процессов, анализ данных и интеграцию ИИ-технологий в существующие системы.',
  'Как связаться с менеджером?': 'Вы можете связаться с нашим менеджером по телефону +7 (777) 356-22-24 или отправить email на адрес openinference17@gmail.com. Также вы можете заполнить форму обратной связи на нашем сайте.'
};

const ChatDemo = () => {
  const [activeTab, setActiveTab] = useState('live-chat');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Функция для отправки запросов к API
  const sendApiRequest = useCallback(async (message, isInitial = false) => {
    try {
      const response = await fetch('https://oibackend.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          isInitial: isInitial,
          type: activeTab === 'live-chat' ? 'bot' : 'assistant',
          history: chatHistory
        }),
      });

      if (!response.ok) {
        throw new Error(`API ответил с ошибкой: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при обращении к API:', error);
      throw error;
    }
  }, [activeTab, chatHistory]);

  // Используем useCallback для мемоизации функции resetChat
  const resetChat = useCallback(async () => {
    setMessages([]);
    setInputValue('');
    setError(null);
    setIsTyping(true);
    setChatHistory([]);

    try {
      // Отправляем первичный запрос к API
      const data = await sendApiRequest('Привет', true);
      
      // Обновляем историю чата
      setChatHistory([{
        role: 'assistant',
        content: data.response || 'Привет! Чем я могу помочь вам сегодня?'
      }]);
      
      // Отображаем ответ от API или заготовленное приветственное сообщение
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{
          sender: 'bot',
          text: data.response || `Привет! Я ${activeTab === 'live-chat' ? 'виртуальный ассистент магазина Sneakers Hub' : 'ваш персональный ассистент Джарвис'}. Чем могу помочь вам сегодня?`,
          buttons: data.buttons || defaultButtons,
          isNew: true
        }]);
      }, 1000);
    } catch (err) {
      console.error('Ошибка при инициализации чата:', err);
      setIsTyping(false);
      
      // В случае ошибки показываем локальное приветственное сообщение
      const welcomeMessage = activeTab === 'live-chat' ?
        'Привет! Я виртуальный ассистент магазина Sneakers Hub. Чем могу помочь вам сегодня?' :
        'Здравствуйте! Я ваш персональный ассистент Джарвис. Готов помочь с планированием задач, поиском информации и управлением данными.';
      
      setMessages([{
        sender: 'bot',
        text: welcomeMessage,
        buttons: defaultButtons,
        isNew: true
      }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, sendApiRequest]);

  useEffect(() => {
    // При первом рендеринге или изменении activeTab показываем приветственное сообщение
    resetChat();
  }, [activeTab, resetChat]);

  useEffect(() => {
    // Прокручиваем чат вниз при добавлении новых сообщений
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Добавляем сообщение пользователя
    const userMessage = { sender: 'user', text, isNew: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Обновляем историю чата
    const updatedHistory = [...chatHistory, {
      role: 'user',
      content: text
    }];
    setChatHistory(updatedHistory);
    
    // Показываем "печатает..."
    setIsTyping(true);
    
    try {
      // Отправляем запрос к API
      const data = await sendApiRequest(text);
      
      // Получаем ответ от API или используем заготовленный
      let botResponse;
      let buttons = [];
      
      if (data && data.response) {
        botResponse = data.response;
        buttons = data.buttons || [];
        
        // Добавляем ответ бота в историю чата
        setChatHistory([...updatedHistory, {
          role: 'assistant',
          content: botResponse
        }]);
      } else if (data && data.n8n_response && data.n8n_response.output) {
        botResponse = data.n8n_response.output;
        buttons = data.buttons || [];
        
        // Добавляем ответ бота в историю чата
        setChatHistory([...updatedHistory, {
          role: 'assistant',
          content: botResponse
        }]);
      } else {
        // Если API не вернул ответ, используем заготовленные
        botResponse = fallbackResponses[text] || 
          `Извините, я не смог получить ответ от сервера. Я буду рад помочь вам с другими вопросами.`;
      }
      
      // Отображаем ответ с небольшой задержкой
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: botResponse,
          buttons: buttons,
          isNew: true
        }]);
      }, 1000);
      
    } catch (err) {
      console.error('Ошибка при отправке сообщения:', err);
      setIsTyping(false);
      
      // В случае ошибки используем заготовленные ответы или стандартный ответ
      const fallbackResponse = fallbackResponses[text] || 
        `Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже или задайте другой вопрос.`;
      
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: fallbackResponse,
        isNew: true
      }]);
    }
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