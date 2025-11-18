/// <reference types="cypress" />
import checkout from "../support/cadastro"
import realizarCheckout from "../support/Sup.Checkout";

describe('Fluxo de chekout loja ebac', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });
  
  it('Deve fazer checkout com sucesso na loja ebac', () => {
    checkout.fazLogin();
     
    //adiciona produto ao carrinho
    cy.intercept('PUT', '/public/updateCart/**').as('addCart');
    realizarCheckout.adicionarItem();
            cy.wait('@addCart')
            .its('response.statusCode')
            .should('eq', 200);

    //atualiza quantidade de produtos no carrinho
    cy.intercept('PUT', '/public/updateCart/**').as('updateQty');
        realizarCheckout.atualizarQuantidade(2);
        cy.wait('@updateQty')
            .its('response.statusCode')
            .should('eq', 200);

    //remove item do carrinho 
    cy.intercept('PUT', '/public/updateCart/**').as('removeItem');
        realizarCheckout.removerItem();
        cy.wait('@removeItem')
            .its('response.statusCode')
            .should('eq', 200);


  })

})