describe('drupalcon-2021-event Page', () => {
  function waitOneSecond() {
    return new Cypress.Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  before(() => {
    cy.visit('/');
  });

  it('renders the drupalcon-2021-event Page page', () => {
    cy.visit('/drupalcon-2021-event/');
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('click swag button form component', () => {
    cy.visit('/drupalcon-2021-event/');
    cy.wait(20000);
    cy.get('[data-cy=buttonFormButton]')
      .should('exist')
      .focus()
      .click({ multiple: true });
    cy.wait(20000);
    cy.get('.button--container section.active').should('exist');
    cy.get('[data-cy=buttonFormCloseButton]').click({
      multiple: true,
    });
  });

  it('keypress swag button form component', () => {
    cy.visit('/drupalcon-2021-event/');
    cy.wait(20000);
    cy.get('[data-cy=buttonFormButton]')
      .should('exist')
      .focus()
      .type('{enter}');
    cy.wait(20000);
    cy.get('.button--container section.active').should('exist');
    cy.get('.button--container section.active')
      .should('exist')
      .focus()
      .type('{enter}');
  });
});
