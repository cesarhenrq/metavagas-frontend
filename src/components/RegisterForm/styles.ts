/* eslint-disable indent */
import styled from 'styled-components';

type FormContainer = {
  loading: boolean;
};

export const FormContainer = styled.div<FormContainer>`
  background-color: var(--white);
  padding: 2.125rem 2rem 2.5rem;
  box-shadow: 0rem 1rem 2rem rgba(207.7, 207.7, 207.7, 0.2);
  border-radius: 1rem;

  .notification {
    text-align: center;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }

  .error-message {
    color: red;
  }

  .title-container {
    margin-bottom: 1.5rem;

    .text {
      justify-content: flex-start;
    }
  }

  .text-and-link {
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      margin-right: 0.3rem;
    }
  }

  .email-input-wrapper {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: ${props =>
      props.loading ? 'var(--gray-light)' : 'var(--yellow)'};
    cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};

    .text {
      font-weight: 500;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      color: var(--purple-dark);
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .password-wrapper {
      position: relative;
      margin-bottom: 1.5rem;

      img {
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
      }
    }

    input {
      border-radius: 0.5rem;
      width: 100%;
      border: 1px solid var(--gray-light);
      padding: 1rem 0.8125rem;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
