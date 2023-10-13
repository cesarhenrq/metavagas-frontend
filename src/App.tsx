import GlobalStyle from '@styles/global';

import Router from '@routes/Router';

import FiltersProvider from '@contexts/filters';
import UserProvider from '@contexts/user';
import QueryProvider from '@contexts/query';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <QueryProvider>
        <FiltersProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </FiltersProvider>
      </QueryProvider>
    </div>
  );
}
