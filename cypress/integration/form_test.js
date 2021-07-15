// Arrange
// Visit the page, and Query elements

// Act
// Interact with our elements

// Assert
// Make assertions about our contents

describe('Check for Elements', () => {
    it(('Check for Elements'), ()=> {
        cy.visit('localhost:3000');
        cy.get('input[name="name"]');
        cy.get('input[name="email"]');
        cy.get('input[name="password"]');
        cy.get('input[name="tos"]');
        cy.get('button');
    })
})

describe('Validation Tests', () => {
    it(('Submit button is disabled before form is filled'), () => {
        cy.get('button').should('be.disabled');
    })

    it(('Can Fill Form'), () => {
        cy.get('input[name="name"]').type('Dexter');
        cy.get('input[name="email"]').type('dexter@email.com');
        cy.get('input[name="password"]').type('dexterdexterdexter');
        cy.get('input[name="tos"]').check();
    })

    it(('Inputs Contain Correct Values'), () => {
        cy.get('input[name="name"]').should('have.value', 'Dexter');
        cy.get('input[name="email"]').should('have.value', 'dexter@email.com');
    });

    it(('Can Submit Form after information has been validated'), () => {
        cy.get('button').click();
    });
})