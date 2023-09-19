/// <reference types="cypress"/>

import basic_auth from '../fixtures/basic_auth.json'


describe('Testar página Basic Auth na url http://the-internet.herokuapp.com/', ()=>{
  before(()=>{
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
      cy.fixture("basic_auth").as('basic_auth')
    })

  
    context('Dado o click no link Basic Auth', ()=>{
  
      it('Quando insiro as credenciais admin/admin e válido o texto da página', ()=>{
        cy.get(basic_auth.description.locator).then( el=>{
          expect(el[0].outerText, 'Assert Description').equal(basic_auth.description.text)
        })
      
    }) 

  })
})
