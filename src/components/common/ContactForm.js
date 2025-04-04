import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const ModalContent = styled.div`
  width: 500px;
  max-width: 90%;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  position: relative;
  
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  transition: var(--transition);
  
  &:hover {
    color: var(--dark-blue);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 5px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark-blue);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-purple);
    box-shadow: 0 0 0 2px rgba(123, 47, 247, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-purple);
    box-shadow: 0 0 0 2px rgba(123, 47, 247, 0.1);
  }
`;

const ContactOptions = styled.div`
  margin-bottom: 20px;
`;

const OptionLabel = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--dark-blue);
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;

const SuccessMessage = styled.div`
  padding: 20px;
  background-color: #e6f7e6;
  border-radius: 5px;
  color: #2e7d32;
  text-align: center;
  margin-top: 20px;
`;

const ContactForm = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    message: '',
    contactOptions: {
      email: true,
      phone: false,
      telegram: false
    }
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      contactOptions: {
        ...formData.contactOptions,
        [name]: checked
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    
    // Симулируем успешную отправку
    setTimeout(() => {
      setIsSubmitted(true);
      
      // Закрываем модальное окно через 3 секунды после успешной отправки
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          telegram: '',
          message: '',
          contactOptions: {
            email: true,
            phone: false,
            telegram: false
          }
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <Modal isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Title>Свяжитесь с нами</Title>
        <Subtitle>
          {service ? `Заинтересовал ${service}? ` : ''}
          Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
        </Subtitle>
        
        {!isSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Ваше имя *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="phone">Телефон</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="telegram">Telegram</Label>
              <Input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <ContactOptions>
              <OptionLabel>Предпочтительный способ связи:</OptionLabel>
              <CheckboxGroup>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="email"
                    checked={formData.contactOptions.email}
                    onChange={handleCheckboxChange}
                  />
                  Email
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="phone"
                    checked={formData.contactOptions.phone}
                    onChange={handleCheckboxChange}
                  />
                  Телефон
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="telegram"
                    checked={formData.contactOptions.telegram}
                    onChange={handleCheckboxChange}
                  />
                  Telegram
                </CheckboxLabel>
              </CheckboxGroup>
            </ContactOptions>
            
            <FormGroup>
              <Label htmlFor="message">Сообщение</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Расскажите о вашем проекте или задайте вопрос"
              />
            </FormGroup>
            
            <SubmitButton type="submit">Отправить</SubmitButton>
          </Form>
        ) : (
          <SuccessMessage>
            <h3>Спасибо за ваше обращение!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </SuccessMessage>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ContactForm;
