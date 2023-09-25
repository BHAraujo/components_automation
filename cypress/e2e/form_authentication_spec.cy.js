/// <reference types="cypress"/>



import form_authentication from '../fixtures/form_authentication.json'


describe('Testar página Form Authentication na url http://the-internet.herokuapp.com/', ()=>{
  beforeEach(()=>{
    cy.validateHome()
      cy.fixture("form_authentication").as('form_authentication')
    })


      context('Dado o click no link Form Authentication e preencho Username e Password com dados válidos', ()=>{

        it('Então clico no botão Login valido a mensagens exibida e clico em logout', ()=>{
          
          cy.get('@form_authentication').then( form_authentication => {
  
            cy.contains('Form Authentication')
            .should('be.visible')
            .click()
  
          cy.get(form_authentication.title.locator).
          should('be.visible').then( el => {
  
            expect(el[0].innerText).equal(form_authentication.title.text)
          
          })
  
          cy.get(form_authentication.input_username.locator)
          .should('be.visible')
          .type(form_authentication.input_username.type)
          
          cy.get(form_authentication.input_password.locator)
          .should('be.visible')
          .type(form_authentication.input_password.type)
  
          cy.get(form_authentication.btn_login.locator).click().then(()=>{
            cy.url().then( el => {
  
              expect(el, 'Assert Url logged').equal(Cypress.config().baseUrl.concat('secure'))
            
            })
  
          })
  
          cy.get(form_authentication.msg_logged.locator)
          .should('be.visible')
          .then( el => {
            expect(el[0].outerText, 'Assert msg logged').equal(form_authentication.msg_logged.text)
          })
  
          cy.get(form_authentication.title_logged.locator).
          then( el => {
  
            expect(el[0].innerText, 'Assert msg logged').equal(form_authentication.title_logged.text)
          
          })
  
          cy.get(form_authentication.subtitle_logged.locator)
          .then( el => {
  
            expect(el[0].innerText, 'Assert subtitle logged').equal(form_authentication.subtitle_logged.text)
          
          })
  
          cy.get(form_authentication.btn_logout.locator)
          .click()
          .then( ()=>{
  
            cy.url()
            .then( el => {
  
              expect(el, 'Assert Url logged').equal(Cypress.config().baseUrl.concat('login'))
            
            })
          })
        
          })
          
      })
      })


      
      context('Dado o click no link Form Authentication e preencho Username e Password com dados inválidos', ()=>{

        it('Então clico no botão Login valido a mensagens exibida de erro exibida', ()=>{

          
          cy.get('@form_authentication')
          .then( form_authentication => {
  
            cy.contains('Form Authentication').should('be.visible').click()
  
          cy.get(form_authentication.title.locator)
          .should('be.visible')
          .then( el => {
  
            expect(el[0].innerText).equal(form_authentication.title.text)
          
          })
  
          cy.get(form_authentication.input_username.locator)
          .should('be.visible')
          .type(form_authentication.input_username.type_invalid)
          
          cy.get(form_authentication.input_password.locator)
          .should('be.visible')
          .type(form_authentication.input_password.type_invalid)
  
          cy.get(form_authentication.btn_login.locator).click().then(()=>{
            cy.url().then( el => {
  
              expect(el, 'Assert Url logged').equal(Cypress.config().baseUrl.concat('login'))
            
          })
        })

        cy.get(form_authentication.message_error_login.locator).should('be.visible').then( el => {

          expect(el[0].innerText, 'Assert message error login').equal(form_authentication.message_error_login.text)
        
        })
      })
    })
  })
})

