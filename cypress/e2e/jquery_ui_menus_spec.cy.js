/// <reference types="cypress"/>


import jquery_ui_menus from '../fixtures/jquery_ui_menus.json'


describe(`Testar componentes do link JQuery Ui Menus Alerts na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()

    })
                            
        context.skip('Dado o click no JQuery Ui Menus devo ser redirecionado para página', ()=>{

            it('Então no menu a opção DISABLED deve estar desabilitada', ()=>{

                cy.assertPage(jquery_ui_menus.link.locator, jquery_ui_menus.path_url.url,
                    jquery_ui_menus.title.locator, jquery_ui_menus.title.text)

                cy.get(jquery_ui_menus.menu_disabled.locator).then( el => {
               
                    expect(el[0].draggable, 'Assert menu Disabled').equal(false)
               
                })
                

        })
    })

    context.skip('Dado o click no JQuery Ui Menus devo ser redirecionado para página', ()=>{

        it('Então no menu a opção ENABLED clico em Downloads > PDF e deve iniciar o download do arquivo', ()=>{

            cy.assertPage(jquery_ui_menus.link.locator, jquery_ui_menus.path_url.url,
                jquery_ui_menus.title.locator, jquery_ui_menus.title.text)
             
            cy.contains(jquery_ui_menus.link.locator).should('be.visible').click() 
                
            cy.get('#ui-id-2').click()
                cy.wait(1500)
                
                cy.get('#ui-id-4').click()
                    cy.wait(1500)   
                  
                    cy.get('#ui-id-6').click({force: true})
                    // cy.reload()
                        cy.wait(5000)
                    //    cy.readFile('./cypress/downloads/menu').should('be.to.exist')
                       //    cy.get(jquery_ui_menus.title.locator).click({force: true}) 
            })
    })

})

