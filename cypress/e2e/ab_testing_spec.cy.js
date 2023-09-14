/// <reference types="cypress"/>

import Home from '../fixtures/Home.json'
import ABTesting from '../fixtures/ABTesting.json'

describe('Testar página A/B Testing na url http://the-internet.herokuapp.com/', ()=>{
    before(()=>{
      cy.visit('/')
      cy.fixture("Home").as('homeFixture')
      cy.fixture("ABTesting").as('abFixture')
    })

    context('Dado o título da página Welcome to the-internet Available Examples', ()=>{
  
      it('Então clico no link A/B Testing e Válido a mensagem da página', ()=>{
       
      cy.get('@homeFixture').then(homeFixture => {
          console.log(homeFixture.title.locator)

        cy.get(homeFixture.title.locator).then(el => {
          expect(el[0].outerText, 'Assert Title').equal(homeFixture.title.text)
        })
  
        cy.get(homeFixture.sub_title.locator).then(el => {
          expect(el[0].outerText, 'Assert Title').equal(homeFixture.sub_title.text)
        })

      })
      
      cy.get('@abFixture').then(abFixture => {
  
        cy.contains('A/B Testing').click()
  
        cy.get(abFixture.title.locator).should('be.visible').then( el => {
          
          if (el[0].innerHTML.includes('Control')){
           
            expect(el[0].innerHTML, 'Assert Title').equal(abFixture.title.control)
          
          }else{
  
            expect(el[0].innerHTML, 'Assert Title').equal(abFixture.title.variation)
  
          }
  
          cy.get("p").should('be.visible').then(el => {
            expect(el[0].innerHTML, 'Assert Text').equal('\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')})
          
        })
     
      })      
      
    }) 

  })
})
