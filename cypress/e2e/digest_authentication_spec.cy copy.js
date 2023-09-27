/// <reference types="cypress"/>

import digest_auth from '../fixtures/digest_auth.json'


describe('Testar página Digest Authentication na url http://the-internet.herokuapp.com/', ()=>{
  before(()=>{
      // cy.visit('http://the-internet.herokuapp.com/digest_auth')
    })

  
    context('Dado o click no link Digest Authentication', ()=>{
  
      it.skip('Quando insiro as credenciais admin/admin e válido o texto da página', ()=>{
        
        cy.get('p').then( el=>{
          expect(el[0].outerText, 'Assert Description').equal('Congratulations! You must have the proper credentials.')
        })
      
    }) 

  })
})
