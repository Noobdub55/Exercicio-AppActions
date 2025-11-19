class realizarCheckout {

    adicionarItem() {
        cy.get('[href="/Tab/Browse"]').click();
        cy.get(':nth-child(15) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
    }

    atualizarQuantidade(qtd) {
        cy.get('[data-testid="addItem"] > .css-146c3p1').click().click();
    }

    removerItem() {
        cy.get('[data-testid="remove"]').click();
    }

}

export default new realizarCheckout();
