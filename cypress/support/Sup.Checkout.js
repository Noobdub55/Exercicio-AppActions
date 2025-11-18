class realizarCheckout {

    adicionarItem() {
        // exemplo para clicar em um produto
        cy.get('[href="/Tab/Browse"]').click();
        cy.get(':nth-child(15) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
    }

    atualizarQuantidade(qtd) {
        // botão de aumentar quantidade
        cy.get('[data-testid="addItem"] > .css-146c3p1').click().click();
        // ou escrever direto no input
        // cy.get('[data-testid="cart-qty"]').clear().type(qtd);
    }

    removerItem() {
        cy.get('[data-testid="remove"]').click();
    }

}

export default new realizarCheckout();
