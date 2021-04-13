describe('Insights', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Insights Page page', () => {
    cy.visit('/insights/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
