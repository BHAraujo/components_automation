/// <reference types="cypress"/>


import infinite_scroll from '../fixtures/infinite_scroll.json'


describe('Testar página Infinite Scroll na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })



    context('Dado o click no Infinite Scroll devo ser redirecionado para página', ()=>{

                it('Então realizo o scroll na página e valido a criação dos textos automaticamente', ()=>{
            

                        cy.assertPage(infinite_scroll.link.locator, infinite_scroll.path_url.locator,
                        infinite_scroll.title.locator,infinite_scroll.title.text)

                        cy.get(infinite_scroll.div_dynamic.locator).then( el => {
                            expect(el.length).equal(1)
                        })
                        
                        for(let x = 0; x <=5; x++){
                            cy.window().scrollTo(0, 2000)
                            cy.wait(1500)    
                        }
                   
                        cy.get(infinite_scroll.div_dynamic.locator).then( el => {
                            expect(el.length).equal(7)
                        })
                })
        })
})