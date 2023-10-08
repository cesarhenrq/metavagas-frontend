import BaseLayout from './BaseLayout';

import Sut from '@utils/helpers';

describe('<BaseLayout />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <BaseLayout>
          <div>children</div>
        </BaseLayout>
      </Sut>,
    );
  });

  it('should main content has padding-top: 6.4375rem', () => {
    cy.getByCy('main-content').should('have.css', 'padding-top', '103px');
  });
});
