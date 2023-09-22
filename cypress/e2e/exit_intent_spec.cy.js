/// <reference types="cypress"/>

import exit_intent from '../fixtures/exit_intent.json'


describe('Testar página Exit Intent na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("exit_intent").as('exit_intent')
  })

  context.skip('Dado o click no link Exit Intent e passo o ponteiro do mouse na aba aberta', ()=>{

    it('Então deve ser exibido modal e valido suas informações', ()=>{

        cy.contains('Exit Intent').should('be.visible').click()
   
        cy.get('.example > h3').should('be.visible').then( el => {
            expect(el[0].innerText).equal('Exit Intent')
        })

        cy.get('.example > p').should('be.visible').then( el => {
            expect(el[0].innerText).equal('Mouse out of the viewport pane and see a modal window appear.')
        })

        cy.get('head > title').click({force: true})
    })
})

})



