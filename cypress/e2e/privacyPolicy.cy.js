
// Nova suíte de testes. Como só tem um teste, não precisa de describe
it.only('testa a página de política de privacidade de forma independente', () => {
    cy.visit('../src/privacy.html')
    
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    cy.contains('p', 'Talking About Testing').should('be.visible')
})