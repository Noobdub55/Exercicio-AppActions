class checkout {
    fazLogin(email, senha){
        cy.get('[href="/Tab/Account"]').click()
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(senha)
        cy.get('[data-testid="btnLogin"]').click()
    }
}

export default new checkout();