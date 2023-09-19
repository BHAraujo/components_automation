/// <reference types="cypress"/>

import dynamic_controls from '../fixtures/dynamic_controls.json'


describe('Testar página Disappearing Elements na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("dynamic_controls").as('dynamic_controls')
  })
  

    context.skip('Dado o click no link Dynamic Controls e nos componentes CHECKBOX REMOVE ADD', ()=>{
      
      it('Então valido a mensagem exibida e o CHECKBOX com status UNCHECKED', ()=>{

        cy.get('@dynamic_controls').then( dynamic_controls => {

          cy.contains('Dynamic Controls').should('be.visible').click()

            cy.get(dynamic_controls.title.locator).should('be.visible').then( el => {
                expect(el[0].innerText).equal('Dynamic Controls')
            })

            cy.get(dynamic_controls.checked_before_remove.locator).as('checkbox').click()

            cy.get(dynamic_controls.button_remove_add.locator).as('btn_remove_add').click()

            cy.get(dynamic_controls.message_load.locator).should('be.visible').then( el => {
              expect(el[0].outerText).equal("Wait for it... ")
            })

            cy.get(dynamic_controls.message_success.locator).should('be.visible').then( el => {
                expect(el[0].outerText).equal("It's gone!")
            })
    
            cy.get('@btn_remove_add').click()

            cy.get(dynamic_controls.message_success.locator).should('be.visible').then( el =>{
                expect(el[0].innerText, 'Assert message after click btn add').equal("It's back!")

                cy.get(dynamic_controls.checkbox_after_remove.locator).then(el=>{
                  expect(el[0].checked, 'Assert Checkbox status false').equal(false)
                })
            })
        }) 
      } 
    )   
  })


  context('Dado o INPUT Enable/disable e o clique no botão ENABLE', ()=>{
  
    it('Então preencho o INPUT e clico no botão DISABLE novamente', ()=>{

      cy.contains('Dynamic Controls').should('be.visible').click()

      cy.get('.subheader').then( el => {
        expect(el[1].innerText).equal("Enable/disable")
      })

      cy.get('#input-example > input').then( el => {
        expect(el[0].disabled).equal(true)
      })
    })

    it('Então valido o status e valor do INPUT', ()=>{
    })
  })

})