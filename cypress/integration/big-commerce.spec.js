describe('Big Commerce Partner Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Big Commerce Partner Page page', () => {
    cy.visit('/acquia-engage-2020/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
