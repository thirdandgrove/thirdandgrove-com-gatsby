describe('Work Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('renders work page', () => {
    function waitOneSecond() {
      return new Cypress.Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    }
    cy.visit('/work/');
    cy.get('[data-cy=titleText]').should('exist');
    cy.get('[data-cy=introVideo]').should('exist');
    cy.get('[data-cy=vimeoVideo]').should('exist');
    // cy.get('[data-cy=vimeoButton]').click({ force: true });
    cy.wrap(null).then(() => {
      return waitOneSecond().then(() => {
        // cy.get('[data-cy=vimeoButton]').click({ force: true });
      });
    });
  });
});
