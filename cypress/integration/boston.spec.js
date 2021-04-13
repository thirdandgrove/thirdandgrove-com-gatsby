describe('Boston About Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Boston About Page page', () => {
    cy.visit('/boston/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
