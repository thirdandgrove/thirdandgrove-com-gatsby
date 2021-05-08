describe('Partners Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders the Partners page', () => {
    cy.visit('/partners/');
    cy.get('[data-cy=titleText]').should('exist');
    cy.contains('Shopify').should('exist');
    cy.contains('Acquia').should('exist');
    cy.contains('Drupal').should('exist');
    cy.contains('Gatsby').should('exist');
    cy.contains('Big Commerce').should('exist');
  });
});
