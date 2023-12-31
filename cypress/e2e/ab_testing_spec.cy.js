/// <reference types="cypress"/>


import ab_testing from '../fixtures/ab_testing.json'


describe(`Testar componentes do link A/B Testing na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })

    context('Dado o click no link A/B Testing', ()=>{
  
      it('Então válido a mensagem da página', ()=>{
       
  
      cy.contains(ab_testing.link.locator).click()

  
      cy.get(ab_testing.title.locator).should('be.visible').then( el => {
        
        if (el[0].innerHTML.includes('Control')){
          
          expect(el[0].innerHTML, 'Assert Title').equal(ab_testing.title.control)
        
        }else{

          expect(el[0].innerHTML, 'Assert Title').equal(ab_testing.title.variation)

        }
  
        cy.get(ab_testing.description.locator).should('be.visible').then(el => {

          expect(el[0].innerHTML, 'Assert Text').equal(ab_testing.description.text)})
        
      })
           
      
    }) 

  })

})
