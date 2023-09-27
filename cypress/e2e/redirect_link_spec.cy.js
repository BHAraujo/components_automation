/// <reference types="cypress"/>


import redirect_link from '../fixtures/redirect_link.json'


describe(`Testar componentes do link Redirect Link na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()

    })
                            
        context('Dado o click no link Redirect Link devo ser redirecionado para página e clico no link HERE', ()=>{

       const status_code = [
                              200, 301, 404, 500
                           ].forEach((code)=>{

                            it(`Então clico no link do http status code ${code} e valido a mensagem exibida`, ()=>{

                                cy.assertPage(redirect_link.link.locator, redirect_link.path_url.url,
                                  redirect_link.title.locator, redirect_link.title.text)
                    
                                cy.get(redirect_link.link_click_here.locator).should('be.visible').click()
                                cy.contains(code).should('be.visible').click()

                                cy.url().then( url => {

                                  expect(url).equal(Cypress.config().baseUrl.concat('status_codes/'+code))
                                
                                })
                    
                                cy.get(redirect_link.p_message_status.locator).then( el => {
                
                               expect(el[0].innerText.includes(`This page returned a ${code} status code.`)).equal(true)
                             
                            })   
                
                        })

                      })

                        it(`Então clico no link do http status code 200 e no link para voltar a página dos status codes`, ()=>{

                          cy.assertPage(redirect_link.link.locator, redirect_link.path_url.url,
                            redirect_link.title.locator, redirect_link.title.text)
              
                          cy.get(redirect_link.link_click_here.locator).should('be.visible').click()
                          cy.contains('200').should('be.visible').click()

                          cy.url().then( url => {

                            expect(url, 'Assert url status code').equal(Cypress.config().baseUrl.concat('status_codes/200'))
                          
                          })
              
                          cy.get(redirect_link.p_message_status.locator).then( el => {
          
                         expect(el[0].innerText.includes(`This page returned a 200 status code.`), 'Assert message status code').equal(true)
                       
                      })   


                      cy.contains('here').should('be.visible').click()

                      cy.url().then( url => {

                        expect(url, 'Assert url status codes').equal(Cypress.config().baseUrl.concat('status_codes'))
                      
                      })
          
                  })

                    
       
            })

})