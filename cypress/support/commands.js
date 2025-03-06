Cypress.Commands.add('fillMandatoryFieldsAndSubmitV1', () => {
    cy.get('#firstName').type('Walmyr', {delay: 0})
    cy.get('#lastName').type('Lima e Silva Filho', {delay: 0})
    cy.get('#email').type('walmyr@talkingabouttesting.com', {delay: 0})
    cy.get('#open-text-area').type('Teste.', {delay: 0})
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitV2', data => { // recebe valores através do objeto data
    cy.get('#firstName').type(data.firstName, {delay: 0})
    cy.get('#lastName').type(data.lastName, {delay: 0})
    cy.get('#email').type(data.email, {delay: 0})
    cy.get('#open-text-area').type(data.text, {delay: 0})
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitV3', (data = { // já possui valores padrões, que podem ser sobrescritos
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    text: 'Test.'
}) => {
    cy.get('#firstName').type(data.firstName, {delay: 0})
    cy.get('#lastName').type(data.lastName, {delay: 0})
    cy.get('#email').type(data.email, {delay: 0})
    cy.get('#open-text-area').type(data.text, {delay: 0})
    cy.get('button[type="submit"]').click()
})