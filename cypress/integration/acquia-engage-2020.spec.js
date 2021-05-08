describe('Acquia Engage Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Acquia Engage Page page', () => {
    cy.visit('/acquia-engage-2020/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
