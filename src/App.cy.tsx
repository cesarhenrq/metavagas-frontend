import App from './App';

describe('CT sanity', () => {
  it('passes sanity', () => {
    cy.mount(<App />);
    cy.contains('it works!');
  });
});
