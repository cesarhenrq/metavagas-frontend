import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  size?: number;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<SpinnerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--purple-dark-secondary);
  border-radius: 50%;
  width: ${(props: SpinnerProps) => (props.size ? `${props.size}px` : '50px')};
  height: ${(props: SpinnerProps) => (props.size ? `${props.size}px` : '50px')};
  animation: ${spin} 1s linear infinite;
`;
