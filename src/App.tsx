import GlobalStyle from '@styles/global';

import Router from '@routes/Router';

import FiltersProvider from '@contexts/filters';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FiltersProvider>
        <Router />
      </FiltersProvider>
    </div>
  );
}
