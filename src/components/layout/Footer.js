import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const FooterWrapper = styled.footer`
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 80px 0 30px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-right: 30px;
  
  &:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 992px) {
    flex: 0 0 50%;
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--white);
`;

const FooterText = styled.p`
  margin-bottom: 20px;
  color: #aaa;
`;

const FooterLinksList = styled.ul`
  list-style: none;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const ContactList = styled.ul`
  list-style: none;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: #aaa;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: var(--primary-blue);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--white);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-blue);
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>О компании</FooterTitle>
            <FooterText>
              Open Inference — лидер в области разработки веб-сайтов и внедрения технологий 
              искусственного интеллекта для бизнеса любого масштаба.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">f</SocialLink>
              <SocialLink href="#" aria-label="Twitter">t</SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">in</SocialLink>
              <SocialLink href="#" aria-label="Instagram">ig</SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Услуги</FooterTitle>
            <FooterLinksList>
              <FooterLinkItem>
                <FooterLink to="/services/web-development">Разработка веб-сайтов</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/ai-solutions">Разработка ИИ-решений</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/ai-integration">Интеграция ИИ</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/support">Поддержка и обслуживание</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services/consulting">Консультации</FooterLink>
              </FooterLinkItem>
            </FooterLinksList>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Ресурсы</FooterTitle>
            <FooterLinksList>
              <FooterLinkItem>
                <FooterLink to="/blog">Блог</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/case-studies">Кейсы</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/documentation">Документация</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/faq">FAQ</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/webinars">Вебинары</FooterLink>
              </FooterLinkItem>
            </FooterLinksList>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <ContactList>
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                г. Алматы, ул. Мамыр-2, дом 15
              </ContactItem>
              <ContactItem>
                <ContactIcon>📱</ContactIcon>
                +7 (777) 356-22-24
              </ContactItem>
              <ContactItem>
                <ContactIcon>✉️</ContactIcon>
                openinference17@gmail.com
              </ContactItem>
            </ContactList>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <p>© 2025 Open Inference. Все права защищены.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
