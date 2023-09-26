import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `var(--${backgroundColor})` : 'var(--yellow)'};
  border-color: ${({ borderColor, backgroundColor }) =>
    borderColor ? `var(--${borderColor})` : `var(--${backgroundColor})`};
  border: 1px solid;
`;
