/// <reference types="cypress"/>


import add_remove_elements from '../fixtures/add_remove_elements.json'


describe(`Testar componentes do link Add/Remove Elements na url ${Cypress.config().baseUrl}`, ()=>{ 
    
    beforeEach(()=>{  
        cy.validateHome()
    })
    
    
    context('Dado o click no link Add/Remove Elements', ()=>{
        it('Então válido o botão add/element com 5 cliques e 3 cliques no button delete', ()=>{
                        
            cy.assertPage(add_remove_elements.link.locator, add_remove_elements.path_url.url,
            add_remove_elements.title.locator,add_remove_elements.title.text)
    
            cy.get(add_remove_elements.btn_add_element.locator).then( el => {
                
                for( let x = 0; x < 5; x++){

                    cy.wrap(el).click()
                
                }        
            })

            cy.get(add_remove_elements.btn_delete_dinamic.locator).then( el =>{
                
                for( let x = 0; x < 3; x++){

                    cy.wrap(el[x]).click()

                }    
                
            })

            cy.get(add_remove_elements.btn_delete_dinamic.locator).then( el =>{

                expect(el.length, 'Assert amount Button').equal(2)
            
            })
        })
    })
})

