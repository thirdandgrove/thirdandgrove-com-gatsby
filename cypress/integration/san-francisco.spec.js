describe('San Francisco About Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the San Francisco About Page page', () => {
    cy.visit('/san-francisco/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
