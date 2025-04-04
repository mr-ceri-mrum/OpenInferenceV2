import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import Logo from '../../assets/logo.svg';

const HeaderWrapper = styled.header`
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-blue);
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  
  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-blue);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-purple);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderButton = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper style={{ 
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease'
    }}>
      <Container>
        <HeaderContent>
          <LogoWrapper>
            <LogoImage src={Logo} alt="Open Inference Logo" />
            <LogoText>Open Inference</LogoText>
          </LogoWrapper>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
          
          <Nav isOpen={isMenuOpen}>
            <NavList>
              <NavItem>
                <NavLink to="/#services" onClick={() => setIsMenuOpen(false)}>Услуги</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#ai-solutions" onClick={() => setIsMenuOpen(false)}>ИИ-решения</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#about" onClick={() => setIsMenuOpen(false)}>О нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#portfolio" onClick={() => setIsMenuOpen(false)}>Портфолио</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Контакты</NavLink>
              </NavItem>
            </NavList>
          </Nav>
          
          <HeaderButton href="#contact">Связаться с нами</HeaderButton>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
