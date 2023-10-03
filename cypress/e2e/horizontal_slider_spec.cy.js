/// <reference types="cypress"/>


import horizontal_slider from '../fixtures/horizontal_slider.json'


describe(`Testar componentes do link Horinzontal Slider na url ${Cypress.config().baseUrl}`, ()=>{


    beforeEach(()=>{  
      cy.validateHome()
    })



    context('Dado o click no Horinzontal Slicer devo ser redirecionado para página', ()=>{

    const value_slider = [
                                '0.5', '1', '1.5', '2', '2.5',
                                '3', '3.5', '4', '4.5', '5'
                        ].forEach( result => {
                          
                            it(`Então clico no link Horinzontal Slicer e arrasto para ${result} e valido valor do slider`, ()=>{
         

                                cy.assertPage(horizontal_slider.link.locator, horizontal_slider.path_url.url,
                                    horizontal_slider.title.locator,horizontal_slider.title.text)
                   
                                cy.get(horizontal_slider.title.locator).should('be.visible').then( el => {
                                    expect(el[0].innerText, 'Assert text slider').equal(horizontal_slider.title.text)
                                })
            
                                cy.get(horizontal_slider.slider.locator).invoke("val", result)
                                .trigger("change")
                                .click({ force: true }).then(()=>{
                                    cy.get(horizontal_slider.p_slider.locator).then( el => {
                                        expect(el[0].innerText, 'Assert value slider').equal(result)
                                })
                                })
                 
                   
                        
                    })
                    
                })

            })
        })