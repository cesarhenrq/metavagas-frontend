import GlobalStyle from '@styles/global';

import Router from '@routes/Router';

import FiltersProvider from '@contexts/filters';
import UserProvider from '@contexts/user';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FiltersProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </FiltersProvider>
    </div>
  );
}
