import styled from 'styled-components';

type FilterNavigationItemProps = {
  active?: boolean;
};

export const FilterNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--white);
  position: relative;
`;

export const FilterNavigationItem = styled.div<FilterNavigationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: ${({ active }) =>
    active ? '2px solid var(--yellow)' : 'none'};
  padding: 1.5rem 3.75rem;
  cursor: pointer;
  position: relative;
  top: 1px;
  z-index: 1;

  .text {
    color: ${({ active }) => (active ? 'var(--yellow)' : 'var(--white)')};
  }
`;
