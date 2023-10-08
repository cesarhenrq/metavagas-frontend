import GlobalStyle from '@styles/global';

import { BrowserRouter } from 'react-router-dom';

import FiltersProvider from '@contexts/filters';

type Props = {
  children: React.ReactNode;
};

const Sut = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <FiltersProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </FiltersProvider>
  </>
);

export default Sut;
