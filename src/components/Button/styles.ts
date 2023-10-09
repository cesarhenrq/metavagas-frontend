import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `var(--${backgroundColor})` : 'var(--yellow)'};
  border: ${({ borderColor, backgroundColor }) =>
    borderColor
      ? `1px solid var(--${borderColor})`
      : `1px solid var(--${backgroundColor})`};
`;
