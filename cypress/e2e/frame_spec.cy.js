/// <reference types="cypress"/>


// import frames from '../fixtures/frames.json'

describe(`Testar componentes do link Frame na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })



    context('Dado o click no Frame devo ser redirecionado para página', ()=>{

                it('Então clico no link Nested Frame e valido o texto do frame BOTTOM', ()=>{
                     
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

                        cy.get('html > frameset > frame').then(el =>{
                            
                            const body = el.contents().find('html').find('body')


                            cy.wrap(body).then( el => {
                            
                            expect(el[0].innerText, 'Assert frame BOTTOM').equal('BOTTOM')
                        
                        })
                        })
                
                                        
        })
    })
})

