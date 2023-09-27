/// <reference types="cypress"/>


// import frames from '../fixtures/frames.json'

describe(`Testar componentes do link Frame na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })



    context.skip('Dado o click no Frame devo ser redirecionado para página', ()=>{



                it('Então clico no link Nested Frame e valido o texto dos 4 frames presentes no hml', ()=>{
                     
                    cy.contains('Frames').should('be.visible').click().then( ()=> {
                        cy.url().then( (url)=> {

                            expect(url).equal(Cypress.config().baseUrl.concat('frames'))

                        })
                    })

                    cy.contains('Nested Frames').should('be.visible').click().then(()=>{
                        cy.url().then( (url)=> {

                            expect(url).equal(Cypress.config().baseUrl.concat('nested_frames'))
                            
                        })
                    })


                    cy.get('frameset > frame:nth-child(1)').then( el=> {
                        console.log(el)
                    })

                                        
        })
    })
})

