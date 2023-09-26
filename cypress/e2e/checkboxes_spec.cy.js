/// <reference types="cypress"/>

import checkboxes from '../fixtures/checkboxes.json'


describe('Testar página Checkboxes na url http://the-internet.herokuapp.com/', ()=>{
      
    beforeEach(()=>{  
      cy.validateHome()
      cy.fixture("checkboxes").as('checkboxes')
    })
    
    
    context('Dado o click no link Checkboxes', ()=>{
  
      it('Então o checkbox 2 deve estar checked', ()=>{
         
        cy.get('@checkboxes').then(checkboxes => {

          cy.assertPage(checkboxes.link.locator, checkboxes.path_url.url,
          checkboxes.title.locator, checkboxes.title.text)

          cy.get(checkboxes.checkboxes.locator).then( el => {
            expect(el[0].checked).equal(false)
            expect(el[1].checked).equal(true)
          })
        

        })  
        

        })        

    }) 


    context('Dado o click no link Checkboxes', ()=>{
  
      it('Então altero o atributo checked para false dos dois checkboxes', ()=>{
        cy.get('@checkboxes').then(checkboxes => {

          cy.assertPage('Checkboxes', 'checkboxes',
          checkboxes.title.locator, 'Checkboxes')
            
          cy.get(checkboxes.checkboxes.locator).then( el => {
            expect(el[0].checked).equal(false)
            
          cy.wrap(el[1]).click().then( el => {
              expect(el[0].checked).equal(false)
          })
        
        })
            
      })
    })        
}) 


    context('Dado o click no link Checkboxes', ()=>{
  
      it('Então altero o atributo checked para true do checkbox 1', ()=>{
        cy.get('@checkboxes').then(checkboxes => {

        cy.contains('Checkboxes').click()

        cy.get(checkboxes.title.locator).then(el=>{
          expect(el[0].innerText).equal('Checkboxes')
        })
          
        cy.get(checkboxes.checkboxes.locator).then( el => {
            
            expect(el[1].checked).equal(true)
      
        cy.wrap(el[0]).click().then( el => {
      
          expect(el[0].checked).equal(true)
      
        })
      })
                     
    })
        
  })        

  }) 

})

