/// <reference types="cypress"/>

import dynamic_controls from '../fixtures/dynamic_controls.json'


describe('Testar página Disappearing Elements na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("dynamic_controls").as('dynamic_controls')
  })
  

    context('Dado o click no link Dynamic Controls e nos componentes CHECKBOX REMOVE ADD', ()=>{
      
      it('Então valido a mensagem exibida e o CHECKBOX com status UNCHECKED', ()=>{}
      )
      
  })
})

