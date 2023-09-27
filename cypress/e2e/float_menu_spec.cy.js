/// <reference types="cypress"/>


import floating_menu from '../fixtures/floating_menu.json'


describe('Testar página Floating Menu na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })



    context('Dado o click no Floating Menu devo ser redirecionado para página', ()=>{

        const lista_href = ['home', 'news', 'contact', 'about'].forEach( menu => {

                it(`Então clico no botão ${menu} e valido corrente url`, ()=>{
                                             
                    cy.assertPage(floating_menu.link.locator, floating_menu.path_url.url,
                    floating_menu.title.locator, floating_menu.title.text)

    
                    const up_menu = menu[0].toUpperCase().concat(menu.slice(1))
                  
                    cy.contains(up_menu).click().then(()=>{
    
                        cy.url().then(el => {
                            
                            expect(el, 'Assert Url').equal(Cypress.config().baseUrl.concat('floating_menu#' + menu))
                        })
                    })
            })          
        })  
    })
})