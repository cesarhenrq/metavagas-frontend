import styled from 'styled-components';

export const FilterCard = styled.div`
  .base-card {
    align-items: center;
    justify-content: space-between;
    position: relative;

    .icon:hover {
      cursor: pointer;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    -webkit-box-orient: vertical;
  }

  .text-container::before {
    content: attr(data-label);
    position: absolute;
    background-color: white;
    left: 0;
    top: 100%;
    font-size: 10px;
    white-space: normal;
    border-radius: 8px;
    padding: 5px;
    z-index: 3;
    border: 1px solid #ccc;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .text-container:hover::before {
    opacity: 1;
  }
`;
