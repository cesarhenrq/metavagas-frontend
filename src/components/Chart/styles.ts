import styled from 'styled-components';

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0rem;
  width: 50%;
  height: 269px;
  background: #f3f3f3;
  border-radius: 16px;
  border: 1px #ecf1f4 solid;

  .text {
    justify-content: flex-start;
    margin-left: 2rem;

    span {
      span {
        color: var(--purple-dark-secondary);
      }
    }
  }

  tspan {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
