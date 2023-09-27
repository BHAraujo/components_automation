/// <reference types="cypress"/>


// import redirect_link from '../fixtures/redirect_link.json'

describe(`Testar componentes do link Secure File Download Link na url ${Cypress.config().baseUrl}`, ()=>{


before(()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/download_secure')
  })
                            
        context.skip('Dado o click link Secure File Download realizo o login basic_auth devo ser redirecionado para página de download', ()=>{

                            it(`Então clico no link do arquivo e deve iniciar o download`, ()=>{
                                
                                // cy.wait(000)
                                cy.url().then(url => {
                                    console.log(url)
                                    // expect(url).equal('https://the-internet.herokuapp.com/download_secure')
                                })

                        
                                // cy.contains('pacman.jpg').click()

                            //    cy.contains('pacman.jpg')
                                // cy.readFile('./cypress/download_secure/pacman.jpg).should('be.to.exist')


                })
            })
        })