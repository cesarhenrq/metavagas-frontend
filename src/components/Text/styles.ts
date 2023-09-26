import styled from 'styled-components';

export const Text = styled.p<TextProps>`
  color: ${({ fontColor }) =>
    fontColor ? `var(--${fontColor})` : 'var(--purple-dark)'};
  font-size: ${({ fontSize }) =>
    fontSize ? `var(--font-size-${fontSize})` : 'var(--font-size-normal)'};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : 'normal')};
  font-style: ${({ fontStyle }) => (fontStyle ? `${fontStyle}` : 'normal')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
