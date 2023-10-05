import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import * as S from './styles';

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <S.Main data-cy="main-content">{children}</S.Main>
      <Footer />
    </>
  );
};

export default BaseLayout;
