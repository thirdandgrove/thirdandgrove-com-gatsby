describe('Navigation', () => {
  it('opens menu', () => {
    cy.visit('/');
    cy.get('[data-cy=menuButton] > svg').click();
  });
  it('Has all expected links', () => {
    cy.get(':nth-child(1) > [href="/work"]').should('exist');
    cy.get(':nth-child(1) > [href="/capabilities"]').should('exist');
    cy.get(':nth-child(1) > [href="/insights"]').should('exist');
    cy.get(':nth-child(2) > [href="/about"]').should('exist');
    cy.get(':nth-child(2) > [href="/careers"]').should('exist');
    cy.get(':nth-child(2) > [href="/contact"]').should('exist');
    cy.get('[href="/drupal"]').should('exist');
    cy.get('[href="/acquia"]').should('exist');
    cy.get('[href="/shopify"]').should('exist');
    cy.get('[href="/gatsby"]').should('exist');
  });
  it('Closes the menu', () => {
    cy.get('[data-cy=menuButton] > svg').click();
  });
  it('Navigates to work', () => {
    cy.get('[data-cy=menuButton] > svg').click();
    cy.get(':nth-child(1) > [href="/work"]').click();
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should(
      'contain',
      'We work with brands we love.'
    );
  });
  // it('Navigates to capabilities', () => {
  //   cy.get('[data-cy=menuButton] > svg').click();
  //   cy.get(':nth-child(1) > [href="/capabilities"]').click();
  // cy.get('[data-cy=titleText]').should('exist');
  // });
  it('Navigates to insights', () => {
    cy.get('[data-cy=menuButton] > svg').click();
    cy.get(':nth-child(1) > [href="/insights"]').click();
    cy.get('[data-cy=insightTitle]').should('exist');
  });
  it('Navigates to about', () => {
    cy.get('[data-cy=menuButton] > svg').click();
    cy.get(':nth-child(2) > [href="/about"]').click();
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should(
      'contain',
      'This is Third and Grove. See what makes us, us.'
    );
  });
  it('Navigates to careers', () => {
    cy.get('[data-cy=menuButton] > svg').click();
    cy.get(':nth-child(2) > [href="/careers"]').click();
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should('contain', 'Careers');
  });
  it('Navigates to contact', () => {
    cy.get('[data-cy=menuButton] > svg').click();
    cy.get(':nth-child(2) > [href="/contact"]').click();
    cy.get('[data-cy=contactForm]').should('exist');
  });
  // TODO: partner pages
});
