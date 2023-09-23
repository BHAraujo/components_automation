/// <reference types="cypress"/>


import floating_menu from '../fixtures/floating_menu.json'


describe('Testar página Floating Menu na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
      cy.fixture("floating_menu").as('floating_menu')
    })



    context('Dado o click no Floating Menu devo ser redirecionado para página', ()=>{

        const lista_href = ['home', 'news', 'contact', 'about'].forEach( menu => {

                it(`Então clico no botão ${menu} e valido corrente url`, ()=>{
                     
                    cy.get('@floating_menu').then( floating_menu => {
 
                    cy.contains('Floating Menu').should('be.visible').click()
            
                    cy.get(floating_menu.title.locator).should('be.visible').then( el => {
                   
                        expect(el[0].innerText).equal(floating_menu.title.text)
                   
                    })
    
                    const up_menu = menu[0].toUpperCase().concat(menu.slice(1))
                  
                    cy.contains(up_menu).click().then(()=>{
    
                        cy.url().then(el => {
                            
                            expect(el).equal(Cypress.config().baseUrl.concat('floating_menu#' + menu))
                        })

                    })
  
                  })
            })

          
        })
   
    })
})