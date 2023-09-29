/// <reference types="cypress"/>


// import hovers from '../fixtures/hovers.json'


describe(`Testar componentes do link Hovers na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })



    context.skip('Dado o click no Hovers devo ser redirecionado para página', ()=>{

                          
        it('Então clico no hover user1 e clico no link View Profile e valido o redirecionamento a url', ()=>{

            cy.contains('Hovers').should('be.visible').click()  

            cy.url().then( url => {

                expect(url).equal(Cypress.config().baseUrl.concat('hovers'))

                cy.get('.example > h3').then( (el)=>{
                    expect(el[0].innerText).equal('Hovers')
                })
            })

            // cy.get('.figure').trigger('mouseover')  

            // cy.get('.figcaption > h5').then( el => {
            //     expect(el[0].innerText).equal('name: '.concat('user1'))

            // })
    
            
                // cy.get('.figcaption > a').then( el => {
                
                //     cy.wrap(el[0]).invoke('show').click({force: true})
                // })

            
            


        })
        })
})