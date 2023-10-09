import styled from 'styled-components';

export const BaseCard = styled.div<
  Pick<BaseCardProps, 'padding' | 'borderColor' | 'backgroundColor'>
>`
  display: flex;
  border-radius: 1rem;
  padding: ${({ padding }) =>
    padding ? `var(--font-size-${padding})` : 'var(--font-size-large)'};
  box-shadow: 0px 1rem 2rem rgba(207.7, 207.7, 207.7, 0.2);
  border: ${({ borderColor }) =>
    borderColor ? `1px solid var(--${borderColor})` : '1px solid var(--gray)'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `var(--${backgroundColor})` : 'var(--white)'};
`;
