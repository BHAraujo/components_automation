/// <reference types="cypress"/>

import add_remove_elements from '../fixtures/add_remove_elements.json'


// Todo:Passa url

describe('Testar página A/B Testing na url http://the-internet.herokuapp.com/ com título the-internet Available Examples', ()=>{
    before(()=>{
        cy.validateHome()
        cy.fixture("add_remove_elements").as('add_remove_elements')
      })
  
      after(()=>{
        cy.visit('/')
      })

    
    context('Dado o click no link Add/Remove Elements', ()=>{
        it('Então válido o botão add/element com 5 cliques e 3 cliques no button delete', ()=>{
            cy.contains('Add/Remove Elements').should('be.visible').click()
            
            cy.get('@add_remove_elements').then( add_remove_elements => {

                cy.get(add_remove_elements.title.locator).then( el => {
                    expect(el[0].innerHTML, 'Assert Title',).equal(add_remove_elements.title.text)
                })
    
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
})

