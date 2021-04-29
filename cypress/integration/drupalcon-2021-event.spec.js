describe('drupalcon-2021-event Page', () => {
  function waitOneSecond() {
    return new Cypress.Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  beforeEach(() => {
    cy.visit('/');
    cy.log('banana');
  });

  it('renders the drupalcon-2021-event Page page', () => {
    cy.visit('/drupalcon-2021-event/');
    cy.get('[data-cy=titleText]').should('exist');
  });

  it('click swag button form component', () => {
    cy.visit('/drupalcon-2021-event/');
    cy.wait(4000);
    cy.contains('Grab our Webcam Swag').should('exist');
    cy.contains('Grab our Webcam Swag').click();
    cy.wait(1000);
    cy.get('.button--container section.active').should('exist');
    cy.get(
      '#gatsby-focus-wrapper > main > div > div:nth-child(2) > div:nth-child(4) > div > section > div > button'
    ).should('exist');
    cy.get(
      '#gatsby-focus-wrapper > main > div > div:nth-child(2) > div:nth-child(4) > div > section > div > button'
    ).click();
  });
});
