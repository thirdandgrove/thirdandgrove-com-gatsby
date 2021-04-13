describe('About', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the About page', () => {
    cy.visit('/about/');
    cy.get('[data-cy=titleText]').should('exist');
  });
});
