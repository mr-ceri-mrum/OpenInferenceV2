import React from 'react';
import styled from 'styled-components';

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
  color: var(--primary-purple);
  margin-bottom: 30px;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
`;

const ContactIcon = styled.div`
  color: var(--primary-purple);
  font-size: 20px;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--dark-blue);
  margin-bottom: 5px;
`;

const ContactValue = styled.p`
  color: #666;
  font-size: 16px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${props => props.bg || '#f0f3ff'};
  color: ${props => props.color || 'var(--dark-blue)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  font-size: 18px;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ContactInfo = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Title>Связаться с нами</Title>
        
        <ContactItem>
          <IconWrapper>
            <ContactIcon>📍</ContactIcon>
          </IconWrapper>
          <ContactText>
            <ContactLabel>Адрес</ContactLabel>
            <ContactValue>г. Алматы, ул. Мамыр-2, дом 15</ContactValue>
          </ContactText>
        </ContactItem>
        
        <ContactItem>
          <IconWrapper>
            <ContactIcon>📱</ContactIcon>
          </IconWrapper>
          <ContactText>
            <ContactLabel>Телефон</ContactLabel>
            <ContactValue>+7 (777) 356-22-24</ContactValue>
          </ContactText>
        </ContactItem>
        
        <ContactItem>
          <IconWrapper>
            <ContactIcon>✉️</ContactIcon>
          </IconWrapper>
          <ContactText>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>openinference17@gmail.com</ContactValue>
          </ContactText>
        </ContactItem>
        
        <ContactItem>
          <IconWrapper>
            <ContactIcon>🌐</ContactIcon>
          </IconWrapper>
          <ContactText>
            <ContactLabel>Социальные сети</ContactLabel>
            <SocialWrapper>
              <SocialLink href="#" bg="#3b5998" color="#fff">f</SocialLink>
              <SocialLink href="#" bg="#1da1f2" color="#fff">t</SocialLink>
              <SocialLink href="#" bg="#0077b5" color="#fff">in</SocialLink>
              <SocialLink href="#" bg="#e1306c" color="#fff">ig</SocialLink>
              <SocialLink href="#" bg="#0088cc" color="#fff">tg</SocialLink>
            </SocialWrapper>
          </ContactText>
        </ContactItem>
      </ModalContent>
    </Modal>
  );
};

export default ContactInfo;
