import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles = {
  primary: css`
    background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple), var(--primary-pink));
    color: var(--white);
  `,
  secondary: css`
    background-color: var(--white);
    color: var(--primary-purple);
  `
};

const StyledButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  text-align: center;
  
  ${props => ButtonStyles[props.variant || 'primary']}
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => 
      props.variant === 'secondary' 
        ? '0 10px 20px rgba(255, 255, 255, 0.3)'
        : '0 10px 20px rgba(123, 47, 247, 0.3)'
    };
  }
`;

const Button = ({ children, variant, href, onClick, className }) => {
  return (
    <StyledButton 
      variant={variant} 
      href={href} 
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
