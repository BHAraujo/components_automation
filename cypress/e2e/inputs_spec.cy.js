/// <reference types="cypress"/>


import inputs from '../fixtures/inputs.json'


describe(`Testar componentes do link Inputs na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })


    const list_numbers = [
                          5, 20, 50, 100
                         ].forEach( result =>{
                            
                    context('Dado o click no Inputs devo ser redirecionado para página', ()=>{

                        it(`Então realizo ${result} clicks no input number e valido o value setado`, ()=>{
                             
                    
                            cy.assertPage(inputs.link.locator, inputs.path_url.url,
                                inputs.title.locator,inputs.title.text)

                            cy.get('.example > input').click().then( el => {
                                
                                for(let x = 0; x < result; x++){

                                    cy.wrap(el)
                                    .as('input_value')
                                    .type('{upArrow}')
                                    
                                }

                            }).invoke('val').then( $input_value => {

                                expect(parseInt($input_value), 'Assert value input').equal(result)
                    })
                            
                })
            })   
                        
        })

    
})