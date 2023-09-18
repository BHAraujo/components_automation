/// <reference types="cypress"/>


describe('Testar página A/B Testing na url http://the-internet.herokuapp.com/', ()=>{
    before(()=>{
      cy.validateHome()
    })

    after(()=>{
      cy.visit('/')
    })

    context('Dado o título da página Welcome to the-internet Available Examples', ()=>{
  
      it('Quando clico no link A/B Testing e Válido a mensagem da página', ()=>{
       
    
      cy.get('@ab_testing').then(ab_testing => {
  
        cy.contains('A/B Testing').click()
  
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
})
