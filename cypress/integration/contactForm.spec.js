describe('Navigation', () => {
  it('renders contact form', () => {
    cy.visit('/contact');
    cy.get('[data-cy=contactForm]').should('exist');
    cy.get('[type="text"]').should('exist');
    cy.get('[type="email"]').should('exist');
    cy.get('[type="url"]').should('exist');
    cy.get('[type="tel"]').should('exist');
    cy.get('[type="hidden"]').should('not.be', 'visible');
    cy.get('[data-cy=messageField]').should('exist');
    cy.get('[data-cy=contactSubmit]').should('exist');
  });

  it('fails to submit with empty required fields', () => {
    cy.get('[data-cy=messageField]').type('this is not a required field');
    cy.get('[data-cy=contactSubmit]').click();
    cy.get('[data-cy=messageField]').should(
      'have.value',
      'this is not a required field'
    );
    cy.get('[data-cy=messageField]').clear();
  });

  it('fills out the form', () => {
    cy.get('[type="text"]').type('First Last');
    cy.get('[type="email"]').type('email@test.com');
    cy.get('[type="url"]').type('http://www.url.com');
    cy.get('[type="tel"]').type('555-555-5555');
    cy.get('[data-cy=messageField]').type('this is a message');
    cy.get('[type="text"]').should('have.value', 'First Last');
    cy.get('[type="email"]').should('have.value', 'email@test.com');
    cy.get('[type="url"]').should('have.value', 'http://www.url.com');
    cy.get('[type="tel"]').should('have.value', '555-555-5555');
    cy.get('[data-cy=messageField]').should('have.value', 'this is a message');
  });

  it('submits the form', () => {
    cy.get('[data-cy=contactSubmit]').click();
    cy.get('[data-cy=messageField]').should(
      'have.value',
      'Thank you for your inquiry.'
    );
  });
});
