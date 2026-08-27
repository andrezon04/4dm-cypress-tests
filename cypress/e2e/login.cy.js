describe('Login invalido', () => {
  it('Login inválido', () => {
    cy.visit('localhost:3000')
    cy.get('#email').type('invalid@example.com')
    cy.get('#password').type('invalidpassword')
    cy.get('button[type="submit"]').click()

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })
})

describe('Login', () => {
  it('Login válido', () => {
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('4DM')
    cy.get('button[type="submit"]').click()
    cy.contains('Dashboard').should('be.visible')
  })
})

describe('Login Campo Branco', () => {
  it('Login Campo Branco', () => {
    cy.visit('localhost:3000')
    cy.get('button[type="submit"]').click()
    cy.contains('Ei, não esqueça de digitar seu email!').should('be.visible')
    cy.contains('Você precisa de uma senha para entrar! 🔒').should('be.visible')
  })
})

describe('Login Senha Incorreta', () => {
  it('Login Senha Incorreta', () => {
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })
})