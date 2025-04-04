import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
