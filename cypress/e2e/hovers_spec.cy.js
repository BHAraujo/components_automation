/// <reference types="cypress"/>


import hovers from '../fixtures/hovers.json'


describe(`Testar componentes do link Hovers na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })


 const list_links = [
                      {"url": "/users/1", "index": 0, "msg": "user1"},
                      {"url": "/users/2", "index": 1, "msg": "user2"},
                      {"url": "/users/3", "index": 2, "msg": "user3"}
                    ].forEach( link => {

                        context('Dado o click no Hovers devo ser redirecionado para página', ()=>{

                          
                            it(`Então clico no hover ${link.url} e clico no link View Profile e valido o redirecionamento a url`, ()=>{
                    
                                cy.assertPage(hovers.link.locator, hovers.path_url.url,
                                              hovers.title.locator, hovers.title.text) 
                    
                    
                                cy.get('.figcaption').then( el => {
                                    
                                    cy.wrap(el[link.index]).invoke('show')
                                    expect(el[link.index].innerText).equal(`\n      name: ${link.msg}\n      View profile\n    `)
                        
                                })
                    
                                
                                cy.get(hovers.div_hovers.locator).find('a').then(el => {
                                 
                                    cy.wrap(el[link.index]).as('link_view_profile')
                    
                                    cy.get('@link_view_profile')
                                    .invoke('attr', 'href')
                                    .should('equal', link.url)
                                    
                                    cy.get('@link_view_profile').click()
                                            
                                 })

                                 
                                 cy.url().then( el => {
                    
                                    expect(Cypress.config().baseUrl.concat(link.url.slice(1)), 'Assert url').equal(el)
                
                                })
                            })
                        })

                    })   


})





  