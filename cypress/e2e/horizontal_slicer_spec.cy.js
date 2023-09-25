/// <reference types="cypress"/>


import horizontal_slider from '../fixtures/horizontal_slider.json'


describe('Testar página Horinzontal Slicer na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
      cy.fixture("horizontal_slider").as('horizontal_slider')
    })



    context('Dado o click no Horinzontal Slicer devo ser redirecionado para página', ()=>{

    const value_slider = [
                                '0.5', '1', '1.5', '2', '2.5',
                                '3', '3.5', '4', '4.5', '5'
                        ].forEach( result => {
                          
                            it(`Então clico no link Horinzontal Slicer e arrasto para ${result} e valido valor do slider`, ()=>{
                     
                              cy.get('@horizontal_slider').then( horizontal_slider => {

                                cy.contains('Horizontal Slider').should('be.visible').click().then( ()=> {
                                    cy.url().then( url => {
            
                                        expect(url).equal(Cypress.config().baseUrl.concat('horizontal_slider'))
                                        
                                    })
                                })
            
                                cy.get(horizontal_slider.title.locator).should('be.visible').then( el => {
                                    expect(el[0].innerText).equal(horizontal_slider.title.text)
                                })
            
                                cy.get(horizontal_slider.slider.locator).invoke("val", result)
                                .trigger("change")
                                .click({ force: true }).then(()=>{
                                    cy.get(horizontal_slider.p_slider.locator).then( el => {
                                        expect(el[0].innerText).equal(result)
                                })
                                })
                 
                        })  
                        
                    })
                    
                })

            })
        })