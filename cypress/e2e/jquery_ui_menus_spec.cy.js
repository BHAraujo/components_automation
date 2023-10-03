/// <reference types="cypress"/>


import jquery_ui_menus from '../fixtures/jquery_ui_menus.json'


describe(`Testar componentes do link JQuery Ui Menus Alerts na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()

    })
                            
        context('Dado o click no JQuery Ui Menus devo ser redirecionado para página', ()=>{

            it('Então no menu a opção DISABLED deve estar desabilitada', ()=>{

                cy.assertPage(jquery_ui_menus.link.locator, jquery_ui_menus.path_url.url,
                    jquery_ui_menus.title.locator, jquery_ui_menus.title.text)

                cy.get(jquery_ui_menus.menu_disabled.locator).then( el => {
               
                    expect(el[0].draggable, 'Assert menu Disabled').equal(false)
               
                })
                

        })
    })

    const list_download = [
                            {"file": ["pdf", "#ui-id-6"]},
                            {"file": ["csv", "#ui-id-7"]},
                            {"file": ["excel", "#ui-id-8"]}
                         ].forEach( download => {

                    context.skip('Dado o click no JQuery Ui Menus devo ser redirecionado para página', ()=>{

                        it(`Então no menu a opção ENABLED clico em Downloads > ${download.file[0]} e deve iniciar o download do arquivo`, ()=>{
                
                            cy.assertPage(jquery_ui_menus.link.locator, jquery_ui_menus.path_url.url,
                                jquery_ui_menus.title.locator, jquery_ui_menus.title.text)
                                
                        
                            cy.get('#ui-id-2').should('be.visible').click()
                                         
                            cy.get('#ui-id-4').should('be.visible').click()
                             
                            cy.get(download.file[1]).click({force: true})
                                 
                    })
                
                })
    })
  
})




