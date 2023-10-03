/// <reference types="cypress"/>


import multiple_windows from '../fixtures/multiple_windows.json'


describe(`Testar componentes do link Multiple Windows na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()

    })
                            
        context('Dado o click no Multiple Windows devo ser redirecionado para página', ()=>{

            it('Então clico no link Click Here e deve ser aberto uma novo aba no navegador', ()=>{

                cy.assertPage(multiple_windows.link.locator, multiple_windows.path_url.url,
                multiple_windows.title.locator, multiple_windows.title.text)

        
                cy.get(multiple_windows.new_page.locator).invoke('removeAttr','target').click()
    
                cy.url().then(el=>{

                    expect(el, 'Assert url redirect').equal('http://the-internet.herokuapp.com/windows/new')
                })

                cy.get(multiple_windows.msg_new_page.locator).then( el => {

                expect(el[0].innerText,, 'Assert message new page').equal(multiple_windows.msg_new_page.text)
                
            })         
  
            })
        })
    })

