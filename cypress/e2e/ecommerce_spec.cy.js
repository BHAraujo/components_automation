/// <reference types="cypress"/>

describe('Efetuar o fluxo completo de comprar de produto', ()=>{
    before(()=>{
      cy.visit("http://the-internet.herokuapp.com/")

    })

    context('Então o titúlo da página deve ser SWAG LABS', ()=>{
      it('Quando digito o usuario e senha', ()=>{
        cy.get('#content > ul > li:nth-child(1) > a').click()
           })
    })
})