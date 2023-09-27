/// <reference types="cypress"/>


// import shifting_content from '../fixtures/shifting_content.json'

describe(`Testar componentes do link Secure Shifting Content Link na url ${Cypress.config().baseUrl}`, ()=>{


beforeEach(()=>{  
    cy.validateHome()

  })
                            
        context('Dado o click no link Shifting Content devo ser redirecionado para página', ()=>{

                            it(`Então clico no link Example 1: Menu Element e valido a opção ?pixel_shift=100`, ()=>{

                                cy.assertPage('Shifting Content', 'shifting_content',
                                               '.example > h3', 'Shifting Content')

                                 cy.contains('Example 1: Menu Element').should('be.visible').click()      
                                 
                                //  cy.get('#content > div > p:nth-child(4) > a').click()

                                 cy.get('#content > div > ul > li:nth-child(4) > a').then( el => {
                                    console.log(el)
                                 })

        })
    })

})
