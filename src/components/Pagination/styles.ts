import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextPagination = styled.span`
  font-size: var(--font-size-xsmall);
  font-weight: 500;
  color: 'var(--dark-gray)';
`;

export const WrapperPaginationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

type IButtonPaginationProps = {
  isActive: boolean;
};

export const ButtonPagination = styled.button<IButtonPaginationProps>`
  border: none;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--purple-dark-secondary)' : 'transparent'};
  cursor: pointer;
  font-size: var(--font-size-xsmall);
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--dark-gray)')};
  width: 24px;
  height: 24px;
  border-radius: 8px;
`;
export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
