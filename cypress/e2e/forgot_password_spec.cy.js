/// <reference types="cypress"/>


import forgot_password from '../fixtures/forgot_password.json'


describe(`Testar componentes do link Forgot Password na url ${Cypress.config().baseUrl}`, ()=>{ 

    beforeEach(()=>{  
      cy.validateHome()
    })



    context('Dado o click no Forgot Password devo ser redirecionado para página', ()=>{


        it('Então preencho o campo E-mail e clico no botão Retrieve password', ()=>{
            
            cy.assertPage(forgot_password.link.locator, forgot_password.path_url.url,
            forgot_password.title.locator, forgot_password.title.text)

            cy.get(forgot_password.input_email.locator).type(forgot_password.input_email.type)

            cy.get(forgot_password.btn_submit.locator).click()
            
            cy.get(forgot_password.h1_not_found.locator).should('be.visible').then( el => {

                expect(el[0].innerText, 'Assert Title not Found').equal(forgot_password.h1_not_found.text)
            
         })  
        })
    })
})
