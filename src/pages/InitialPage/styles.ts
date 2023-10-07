import styled from 'styled-components/';

export const InitialPage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .search-bar {
    position: absolute;
    top: 405px;
    left: 8.4375rem;
    right: 8.4375rem;
    width: calc(100% - 16.875rem);
    z-index: 1;
  }
`;
