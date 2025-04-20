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

const ReconnectButton = styled.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  margin-top: 10px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-purple);
  }
`;

// Конфигурация API
const API_URL = 'https://oibackend.onrender.com';//
const API_TIMEOUT = 10000; // 10 секунд

// Функция для осуществления запроса с таймаутом
const fetchWithTimeout = async (url, options, timeout = API_TIMEOUT) => {
  const controller = new AbortController();
  const { signal } = controller;
  
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { ...options, signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Дефолтные подсказки для чата
const defaultButtons = [
  'Расскажи о компании OpenInference',
  'Какие услуги вы предлагаете?',
  'Как связаться с менеджером?'
];

// Резервные ответы на случай, если API недоступен
const fallbackResponses = {
  'default': 'Здравствуйте! Я ассистент компании OpenInference. Чем я могу вам помочь?',
  'Расскажи о компании OpenInference': 'OpenInference - инновационная компания, специализирующаяся на разработке и внедрении решений на базе искусственного интеллекта для бизнеса. Мы помогаем компаниям автоматизировать процессы, повышать эффективность и достигать новых высот с помощью современных технологий.',
  'Какие услуги вы предлагаете?': 'Мы предлагаем широкий спектр услуг: разработку чат-ботов и виртуальных ассистентов, внедрение систем анализа данных, создание персонализированных рекомендательных систем, интеграцию ИИ в существующие бизнес-процессы и консультации по цифровой трансформации.',
  'Как связаться с менеджером?': 'Вы можете связаться с нашим менеджером по телефону +7 (777) 356-22-24 или написать на email openinference17@gmail.com. Также вы можете заполнить форму обратной связи на нашем сайте, и мы свяжемся с вами в ближайшее время.'
};

// Функция для получения ответа из резервных вариантов
const getFallbackResponse = (message) => {
  return fallbackResponses[message] || `Я не совсем понимаю вопрос "${message}". Пожалуйста, уточните или выберите один из предложенных вариантов.`;
};

const ChatDemo = () => {
  const [activeTab, setActiveTab] = useState('live-ai');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [error, setError] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);
  const apiCheckTimeoutRef = useRef(null);

  // Проверка доступности API
  const checkApiAvailability = useCallback(async () => {
    try {
      const response = await fetchWithTimeout(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'ping' }),
      });
      
      setApiAvailable(response.ok);
      if (response.ok) {
        setError(null);
      } else {
        setError('Сервер доступен, но вернул ошибку. Используется резервный режим.');
      }
      
      return response.ok;
    } catch (err) {
      console.warn('API недоступен:', err);
      setApiAvailable(false);
      setError('Не удалось подключиться к серверу. Используется резервный режим.');
      return false;
    }
  }, []);

  // Попытка переподключения к API
  const retryConnection = async () => {
    setError('Попытка подключения к серверу...');
    const isAvailable = await checkApiAvailability();
    
    if (isAvailable) {
      resetChat();
    }
  };

  // Инициализация чата
  const resetChat = useCallback(async () => {
    setMessages([]);
    setInputValue('');
    setMessageHistory([]);
    setIsTyping(true);

    // Если API доступен, отправляем запрос
    if (apiAvailable) {
      try {
        const response = await fetchWithTimeout(`${API_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: 'Привет' }),
        });

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.n8n_response.output)
        setMessageHistory([{ role: 'user', content: 'Привет' }, { role: 'assistant', content: data.response || fallbackResponses.default }]);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages([{
            sender: 'bot',
            text: data.n8n_response.output || fallbackResponses.default,
            buttons: defaultButtons,
            isNew: true
          }]);
        }, 800);
      } catch (err) {
        console.error('Ошибка при обращении к API:', err);
        setApiAvailable(false);
        setError('Не удалось подключиться к серверу. Используется резервный режим.');
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages([{
            sender: 'bot',
            text: fallbackResponses.default,
            buttons: defaultButtons,
            isNew: true
          }]);
        }, 800);
      }
    } else {
      // Используем резервные ответы, если API недоступен
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{
          sender: 'bot',
          text: fallbackResponses.default,
          buttons: defaultButtons,
          isNew: true
        }]);
      }, 800);
    }
  }, [apiAvailable]); // Удалена зависимость от checkApiAvailability

  // Инициализация компонента
  useEffect(() => {
    // Проверяем доступность API при первой загрузке
    const initializeChat = async () => {
      await checkApiAvailability();
      resetChat();
    };
    
    initializeChat();
    
    // Устанавливаем регулярную проверку доступности API
    apiCheckTimeoutRef.current = setInterval(async () => {
      if (!apiAvailable) {
        const isAvailable = await checkApiAvailability();
        if (isAvailable && error) {
          setError('Соединение с сервером восстановлено.');
          setTimeout(() => setError(null), 3000);
        }
      }
    }, 30000); // Проверяем каждые 30 секунд
    
    return () => {
      // Очищаем интервал при размонтировании компонента
      if (apiCheckTimeoutRef.current) {
        clearInterval(apiCheckTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkApiAvailability, resetChat, apiAvailable, error]);

  // Прокрутка чата вниз при добавлении новых сообщений
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Отправка сообщения в чат
  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Добавляем сообщение пользователя
    const userMessage = { sender: 'user', text, isNew: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Обновляем историю сообщений
    const updatedHistory = [...messageHistory, { role: 'user', content: text }];
    setMessageHistory(updatedHistory);
    
    // Показываем "печатает..."
    setIsTyping(true);
    
    // Если API доступен, отправляем запрос
    if (apiAvailable) {
      try {
        const response = await fetchWithTimeout(`${API_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: text,
            history: updatedHistory
          }),
        });

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const botResponse = data.n8n_response.output || getFallbackResponse(text);
        
        // Обновляем историю сообщений
        setMessageHistory([...updatedHistory, { role: 'assistant', content: botResponse }]);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            sender: 'bot',
            text: botResponse,
            buttons: data.buttons || [],
            isNew: true
          }]);
        }, 1000);
      } catch (err) {
        console.error('Ошибка при отправке сообщения:', err);
        setApiAvailable(false);
        setError('Потеряно соединение с сервером. Используется резервный режим.');
        
        // Используем резервные ответы в случае ошибки
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            sender: 'bot',
            text: getFallbackResponse(text),
            buttons: [],
            isNew: true
          }]);
        }, 1000);
      }
    } else {
      // Используем резервные ответы, если API недоступен
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: getFallbackResponse(text),
          buttons: [],
          isNew: true
        }]);
      }, 1000);
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

  // Для демонстрационных целей меняем настройки в зависимости от активной вкладки
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetChat();
  };

  return (
    <ChatDemoSection id="chat-demo">
      <Container>
        <SectionTitle>
          <Title>Демонстрация ИИ-решений</Title>
          <Subtitle>
            Посмотрите, как наши ИИ-решения могут улучшить взаимодействие с клиентами и оптимизировать бизнес-процессы
          </Subtitle>
        </SectionTitle>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'live-ai'} 
            onClick={() => handleTabChange('live-ai')}
          >
            ИИ-ассистент
          </TabButton>
          <TabButton 
            active={activeTab === 'demo'} 
            onClick={() => handleTabChange('demo')}
          >
            Демонстрация бота
          </TabButton>
        </TabsContainer>
        
        <ChatContainer>
          <ChatHeader>
            <ChatHeaderTitle>
              {activeTab === 'live-ai' ? 'ИИ-ассистент OpenInference' : 'Демонстрация бота для бизнеса'}
            </ChatHeaderTitle>
          </ChatHeader>
          
          <ChatBody ref={chatBodyRef}>
            {error && (
              <ErrorMessage>
                {error}
                {!apiAvailable && (
                  <ReconnectButton onClick={retryConnection}>
                    Попробовать подключиться
                  </ReconnectButton>
                )}
              </ErrorMessage>
            )}
            
            {messages.map((msg, index) => (
              <Message key={index} isNew={msg.isNew}>
                {msg.sender === 'bot' ? (
                  <BotAvatar>
                    <BotIcon>🤖</BotIcon>
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
                  <BotIcon>🤖</BotIcon>
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