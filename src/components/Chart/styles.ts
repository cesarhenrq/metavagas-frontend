import styled from 'styled-components';

type ChartProps = {
  isLogged: boolean;
};

export const Chart = styled.div<ChartProps>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0rem;
  width: 100%;
  height: 269px;
  background: #f3f3f3;
  border-radius: 16px;
  border: 1px #ecf1f4 solid;
  filter: ${props => (props.isLogged ? 'blur(0px)' : 'blur(3.5px)')};

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

export const ChartWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    z-index: 1;
  }
`;
