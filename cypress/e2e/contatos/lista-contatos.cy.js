/// <reference types="cypress" />

describe('Testes para lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar a lista de contatos', () => {
        cy.get('.contato').should('be.visible')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Contato Teste')
        cy.get('[type="email"]').type('contato@teste.com')
        cy.get('[type="tel"]').type('11912345678')
        cy.get('.adicionar').click()
        
        cy.get('.contato').parent().should('contain', 'Contato Teste')
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').last().click()
        cy.get('[type="text"]').clear().type('Fernando Menezes')
        cy.get('[type="email"]').clear().type('fernando@teste.com')
        cy.get('[type="tel"]').clear().type('11912345678')
        cy.get('.alterar').click()

        cy.get('.contato').contains('Fernando Menezes')
    })

    it('Deve excluir um contato', () => {
        setTimeout(() => {
            cy.get('.delete').last().click()
        }, 1000)

    })
})