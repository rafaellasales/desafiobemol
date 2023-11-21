/// <reference types="Cypress"/>
/*
Documentação: https://serverest.dev/
A. Criação de um usuário
B. Verificar se o usuário foi criado
C. Criação de um produto
D. Verificar se o produto foi criado
*/

describe('Etapa IV - Automação de Teste de API', () => {

    it('Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body:{
            "email": "fulano@qa.com",
            "password": "teste"}


        }).then((response=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        }))
        
    } );

   /* it('Criar Usuário', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body:{
             "nome": "Rafaella da Silva",
             "email": "rsilva@qhotmail.com",
             "password": "teste",
             "administrador": "true"}


        }).then((response=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        }))
        
    } );*/
})