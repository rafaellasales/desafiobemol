/// <reference types="Cypress"/>
/*
Página: http://www.buscacep.correios.com.br
A. Realizar a busca com o valor “69005-040”
B. Realizar a busca com o valor “Lojas Bemol”
*/

describe('Etapa II - Automação de Teste Web I', () => {

    it('Realizar a busca com o valor do CEP', () => {
        cy.visit("http://www.buscacep.correios.com.br")
        cy.get('#endereco').type("69005-040")
        cy.get('#btn_pesquisar').click()
        cy.get('#mensagem-resultado').should('contain','Resultado')
    } );
})

it('Realizar a busca com o valor Lojas Bemol', () => {
    cy.visit("http://www.buscacep.correios.com.br")
    cy.get('#endereco').type("Lojas Bemol")
    cy.get('#btn_pesquisar').click()
    cy.get('#mensagem-resultado').should('contain','Resultado')
} );