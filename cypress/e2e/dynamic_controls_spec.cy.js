/// <reference types="cypress"/>

import dynamic_controls from '../fixtures/dynamic_controls.json'


describe('Testar página Dynamic Controls na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("dynamic_controls").as('dynamic_controls')

    cy.contains('Dynamic Controls').should('be.visible').click()

    cy.get(dynamic_controls.title.locator).should('be.visible').then( el => {
      
      expect(el[0].innerText).equal('Dynamic Controls')
    
    })

    cy.get(dynamic_controls.title_enable_disable.locator).then( el => {

      expect(el[1].innerText, 'Assert Title').equal("Enable/disable")

    })

  })
  

    context('Dado o click no link Dynamic Controls e nos componentes CHECKBOX REMOVE ADD', ()=>{
      
      it('Então valido a mensagem exibida e o CHECKBOX com status UNCHECKED', ()=>{

        cy.get('@dynamic_controls').then( dynamic_controls => {

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
  
    it('Então preencho o INPUT e clico no botão DISABLE para desabilitar o INPUT', ()=>{

      cy.get('@dynamic_controls').then( dynamic_controls => {

      cy.get(dynamic_controls.input_enable_disable.locator).as('input_enable_disable').then( el => {

        expect(el[0].disabled, 'Assert Status INPUT').equal(true)
        
      })

      cy.get(dynamic_controls.btn_enable_disable.locator).as('btn_enable_disable').click()

      cy.get(dynamic_controls.p_loading.locator).as('p_loading').then( el => {

        expect(el[0].innerText).equal('Wait for it... ')

      })

      cy.get(dynamic_controls.p_message.locator).as('p_message').then( el => {

        expect(el[0].innerText, 'Assert Message After Click DISABLE').equal("It's enabled!")

      })

      cy.get('@input_enable_disable').as('input_text').type('Teste')

      cy.get('@btn_enable_disable').click()

      cy.get('@p_loading').then( el => {
      
        expect(el[0].innerText, 'Assert Message After click Disable').equal('Wait for it... ')
      
      })

      cy.get(dynamic_controls.p_message.locator).then( el => {
        
        expect(el[0].outerText, 'Assert Message After click Disable').equal("It's disabled!")

      })

      cy.get('@input_enable_disable').then( el => {
      
        expect(el[0].disabled).equal(true)
      
      })

      })
      
      
    })
  })

})