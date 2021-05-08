describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens menu', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
  });

  it('Has all expected links', () => {
    cy.get('nav a[href*="work"]').should('exist');
    cy.get('nav a[href*="capabilities"]').should('exist');
    cy.get('nav a[href*="insights"]').should('exist');
    cy.get('nav a[href*="about"]').should('exist');
    cy.get('nav a[href*="careers"]').should('exist');
    cy.get('nav a[href*="contact"]').should('exist');
    cy.get('nav a[href*="drupal"]').should('exist');
    cy.get('nav a[href*="acquia"]').should('exist');
    cy.get('nav a[href*="shopify"]').should('exist');
    cy.get('nav a[href*="gatsby"]').should('exist');
  });

  it('Closes the menu', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
  });

  it('Navigates to work', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="work"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should(
      'contain',
      'We work with brands we love.'
    );
  });

  it('Navigates to capabilities', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="capabilities"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('Navigates to insights', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="insights"]').click({ force: true });
    cy.get('[data-cy=insightTitle]').should('exist');
  });

  it('Navigates to about', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="about"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should(
      'contain',
      'A relentless pursuit of perfection.'
    );
  });

  it('Navigates to careers', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="careers"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=titleText]').should('contain', 'We work with the best.');
  });

  it('Navigates to contact', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="contact"]').click({ force: true });
    cy.get('[data-cy=contactForm]').should('exist');
  });

  it('Navigates to Drupal Partner Page', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="/partners/drupal/"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('Navigates to Shopify Partner Page', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="/partners/shopify/"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('Navigates to Drupal Acquia Page', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="/partners/acquia/"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('Navigates to Gatsby Partner Page', () => {
    cy.get('[data-cy=menuButton] > svg').click({ force: true });
    cy.get('nav a[href*="/partners/gatsby/"]').click({ force: true });
    cy.get('[data-cy=titleText]').should('exist');
  });
});
