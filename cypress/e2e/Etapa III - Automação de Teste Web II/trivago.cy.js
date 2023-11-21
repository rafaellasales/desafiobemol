/// <reference types="Cypress"/>

/**Automatizar o fluxo definido abaixo:
1. Acessar o site http://www.trivago.com.br
2. Digitar o valor “Manaus” no campo de busca
3. Clicar no botão "Pesquisar" Selecionar a opção Ordenar por “Avaliação e
Sugestões"
4. Verifique o nome do primeiro da lista
5. Verifique a avaliação do primeiro da lista
6. Verifique o valor do primeiro da lista */


describe('Etapa II - Automação de Teste Web I', () => {

    it('Realizar a busca no site Trivago', () => {
        cy.visit("https://www.trivago.com.br")
        cy.wait(1000)
        
        
    } );
})


