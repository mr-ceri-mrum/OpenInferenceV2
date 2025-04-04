import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
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
  width: 48px;
  height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
  color: white;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 22px;
  box-shadow: 0 4px 10px rgba(123, 47, 247, 0.2);
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: var(--dark-blue);
  font-size: 18px;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(123, 47, 247, 0.3);
  }
`;

// SVG иконки для социальных сетей
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.963 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

// Иконки для основных контактов
const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SocialMediaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ContactModal = ({ isOpen, onClose }) => {
  const contacts = [
    {
      id: 1,
      icon: <LocationIcon />,
      label: 'Адрес',
      text: 'г. Алматы, ул. Мамыр-2, дом 15',
      link: 'https://maps.google.com/?q=Алматы+ул.+Мамыр-2+15'
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      label: 'Телефон',
      text: '+7 (777) 356-22-24',
      link: 'tel:+77773562224'
    },
    {
      id: 3,
      icon: <EmailIcon />,
      label: 'Email',
      text: 'openinference17@gmail.com',
      link: 'mailto:openinference17@gmail.com'
    },
    {
      id: 4,
      icon: <SocialMediaIcon />,
      label: 'Социальные сети',
      social: true,
      socials: [
        { id: 's1', icon: <FacebookIcon />, name: 'Facebook', link: 'https://facebook.com/' },
        { id: 's2', icon: <TwitterIcon />, name: 'Twitter', link: 'https://twitter.com/' },
        { id: 's3', icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://linkedin.com/' },
        { id: 's4', icon: <InstagramIcon />, name: 'Instagram', link: 'https://instagram.com/' },
        { id: 's5', icon: <TelegramIcon />, name: 'Telegram', link: 'https://t.me/' }
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
