/// <reference types="cypress" />
import checkout from "../support/cadastro"
import {email, senha} from "../fixtures/Dados.json"
import { realizarCheckout } from "../support/Sup.Checkout";

describe('Fluxo de chekout loja ebac', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });
  
  it('Deve fazer checkout com sucesso na loja ebac', () => {
    checkout.fazLogin(email , senha);
    realizarCheckout();
    cy.get('[data-testid="goBackHome"]').should('exist');
  })

})