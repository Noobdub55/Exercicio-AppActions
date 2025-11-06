function realizarCheckout(){
    cy.get('[href="/Tab/Browse"]').click()
    cy.get(':nth-child(5) > .r-18u37iz > :nth-child(2').click()
    cy.get('[data-testid="addToCart"] > .css-146c3p1').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
}

export { realizarCheckout };