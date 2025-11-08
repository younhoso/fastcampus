'use client';

import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.medium};
  span {
    font-weight: ${props => props.theme.fontWeight.bold};
  }
`;