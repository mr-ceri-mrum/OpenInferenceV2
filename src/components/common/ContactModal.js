import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple), var(--primary-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: white;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 20px;
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--dark-blue);
`;

const ContactText = styled.p`
  font-size: 15px;
  color: #555;
  margin: 0;
`;

const ContactLink = styled.a`
  color: var(--primary-purple);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const SocialButton = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: var(--dark-blue);
  font-size: 18px;
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactModal = ({ isOpen, onClose }) => {
  const contacts = [
    {
      id: 1,
      icon: '📍',
      label: 'Адрес',
      text: 'г. Алматы, ул. Мамыр-2, дом 15',
      link: 'https://maps.google.com/?q=Алматы+ул.+Мамыр-2+15'
    },
    {
      id: 2,
      icon: '📱',
      label: 'Телефон',
      text: '+7 (777) 356-22-24',
      link: 'tel:+77773562224'
    },
    {
      id: 3,
      icon: '✉️',
      label: 'Email',
      text: 'openinference17@gmail.com',
      link: 'mailto:openinference17@gmail.com'
    },
    {
      id: 4,
      icon: '🌐',
      label: 'Социальные сети',
      social: true,
      socials: [
        { id: 's1', icon: 'f', name: 'Facebook', link: 'https://facebook.com/' },
        { id: 's2', icon: 't', name: 'Twitter', link: 'https://twitter.com/' },
        { id: 's3', icon: 'in', name: 'LinkedIn', link: 'https://linkedin.com/' },
        { id: 's4', icon: 'ig', name: 'Instagram', link: 'https://instagram.com/' },
        { id: 's5', icon: 'tg', name: 'Telegram', link: 'https://t.me/' }
      ]
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Связаться с нами</ModalTitle>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactIcon>{contact.icon}</ContactIcon>
            <ContactContent>
              <ContactLabel>{contact.label}</ContactLabel>
              {contact.social ? (
                <SocialLinks>
                  {contact.socials.map(social => (
                    <SocialButton 
                      key={social.id} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      {social.icon}
                    </SocialButton>
                  ))}
                </SocialLinks>
              ) : (
                <ContactText>
                  <ContactLink href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.text}
                  </ContactLink>
                </ContactText>
              )}
            </ContactContent>
          </ContactItem>
        ))}
      </ContactList>
    </Modal>
  );
};

export default ContactModal;
