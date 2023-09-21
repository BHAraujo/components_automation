/// <reference types="cypress"/>

import entry_ad from '../fixtures/entry_ad.json'


describe('Testar página Dynamic Controls na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("entry_ad").as('entry_ad')

  })


        context('Dado o click no link Entry AD validar modal', ()=>{
            
            it('Então valido a mensagem do modal', ()=>{
           
                cy.get('@entry_ad').then( entry_ad => {

                cy.contains('Entry Ad').should('be.visible').click()
                
                cy.get(entry_ad.title_modal.locator).then( el => {

                    expect(el[0].innerText, 'Assert title Modal').equal(entry_ad.title_modal.text)
                
                })

                cy.get(entry_ad.description_modal.locator).then( el => {
                    expect(el[0].innerText, 'Assert description Modal').equal(entry_ad.description_modal.text)
                })

            })
        })

    })

       


    context('Dado o click no link Entry AD validar link CLICK HERE', ()=>{
            
        it('Então clico no link close o modal e click no CLICK HERE e deve exibir o modal novamente', ()=>{
              
            cy.get('@entry_ad').then( entry_ad => {
 
            cy.contains('Entry Ad').should('be.visible').click()
            
            cy.get(entry_ad.title_modal.locator).then( el => {

                expect(el[0].innerText, 'Assert title Modal').equal(entry_ad.title_modal.text)
            
            })

            cy.contains('Close').should('be.visible').click()

            cy.get(entry_ad.title.locator).then( el => {

                expect(el[0].innerText, 'Assert title Entry Ad').equal(entry_ad.title.text)
            
            })

            cy.contains('click here').should('be.visible').click()

            cy.get(entry_ad.description_modal.locator).then( el => {
                expect(el[0].innerText, 'Assert description Modal').equal(entry_ad.description_modal.text)
            })

        })
    })
    })
})