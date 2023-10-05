import GlobalStyle from '@styles/global';

import BaseLayout from '@pages/BaseLayout';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BaseLayout>it works!</BaseLayout>
    </div>
  );
}
