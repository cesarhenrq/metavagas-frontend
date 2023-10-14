import GlobalStyle from '@styles/global';

import { BrowserRouter } from 'react-router-dom';

import FiltersProvider from '@contexts/filters';
import UserProvider from '@contexts/user';
import QueryProvider from '@contexts/query';

type Props = {
  children: React.ReactNode;
};

const Sut = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <QueryProvider>
      <FiltersProvider>
        <UserProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </UserProvider>
      </FiltersProvider>
    </QueryProvider>
  </>
);

export default Sut;
