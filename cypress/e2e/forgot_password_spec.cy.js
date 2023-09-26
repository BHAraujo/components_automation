/// <reference types="cypress"/>


import forgot_password from '../fixtures/forgot_password.json'


describe('Testar página Forgot Password na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
      cy.fixture("forgot_password").as('forgot_password')
    })



    context('Dado o click no Forgot Password devo ser redirecionado para página', ()=>{


        it('Então preencho o campo E-mail e clico no botão Retrieve password', ()=>{

            cy.get('@forgot_password').then( forgot_password => {

            
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
})
