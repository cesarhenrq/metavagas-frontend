import styled from 'styled-components';

type OptionsProps = {
  isVisible: boolean;
};

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  .text-and-icon {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .down-arrow-icon {
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: var(--purple-dark-secondary);
  font-size: var(--font-size-medium);
  font-weight: 500;
  margin-right: 1rem;
`;

export const Options = styled.div<OptionsProps>`
  position: absolute;
  width: 11.25rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem;
  top: 3.5rem;
  right: 0;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  .option {
    cursor: pointer;
  }

  .option:hover {
    .text {
      color: var(--yellow);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
