import React from 'react';

import * as S from './styles';

import * as I from '@assets/db.icons';

type IProps = {
  quantity: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ currentPage, setCurrentPage, quantity }: IProps) => {
  const pagesToShow = 5; // Número de botões de página a serem exibidos

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(quantity / pagesToShow)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(quantity / pagesToShow));
  };

  const getPageNumbers = () => {
    const totalPages = Math.ceil(quantity / pagesToShow);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Calcula o índice inicial para renderizar os botões da página
  const startIndex = Math.max(0, currentPage - 3);
  const endIndex = Math.min(startIndex + 5, pageNumbers.length);

  const visiblePageNumbers = pageNumbers.slice(startIndex, endIndex);

  return (
    <S.WrapperPagination>
      <S.TextPagination>
        {`${Math.min(currentPage * 5, quantity)
          .toString()
          .padStart(2, '0')} de ${quantity.toString().padStart(2, '0')} itens`}
      </S.TextPagination>
      <S.WrapperPaginationButtons>
        <S.IconWrapper onClick={firstPage}>
          <I.ArrowDoubleLeft />
        </S.IconWrapper>
        <S.IconWrapper onClick={previousPage}>
          <I.ArrowLeft />
        </S.IconWrapper>

        {visiblePageNumbers.map(page => (
          <S.ButtonPagination
            key={`button-pagination-${page}`}
            onClick={() => setCurrentPage(page)}
            isActive={currentPage === page}
          >
            {page}
          </S.ButtonPagination>
        ))}
        <S.IconWrapper onClick={nextPage}>
          <I.ArrowRight />
        </S.IconWrapper>
        <S.IconWrapper onClick={lastPage}>
          <I.ArrowDoubleRight />
        </S.IconWrapper>
      </S.WrapperPaginationButtons>
    </S.WrapperPagination>
  );
};

export default Pagination;
