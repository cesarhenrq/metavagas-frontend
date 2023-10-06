import BaseLayout from './BaseLayout';
import GlobalStyle from '@styles/global';

import { BrowserRouter } from 'react-router-dom';

const Sut = () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout>
      <div>children</div>
    </BaseLayout>
  </BrowserRouter>
);

describe('<BaseLayout />', () => {
  beforeEach(() => {
    cy.mount(<Sut />);
  });

  it('should main content has padding-top: 6.4375rem', () => {
    cy.getByCy('main-content').should('have.css', 'padding-top', '103px');
  });
});
