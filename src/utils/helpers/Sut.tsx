import GlobalStyle from '@styles/global';

import { BrowserRouter } from 'react-router-dom';

import FiltersProvider from '@contexts/filters';
import UserProvider from '@contexts/user';

type Props = {
  children: React.ReactNode;
};

const Sut = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <FiltersProvider>
      <UserProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </UserProvider>
    </FiltersProvider>
  </>
);

export default Sut;
