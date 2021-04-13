describe('Insights', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Insights Page page', () => {
    cy.visit('/insights/');
    cy.scrollTo('bottom');
    cy.get('[data-cy=articlePreview]').should('exist');
  });
});
