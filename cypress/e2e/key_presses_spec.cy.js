/// <reference types="cypress"/>


// import jquery_ui_menus from '../fixtures/jquery_ui_menus.json'


describe(`Testar componentes do link Key Presses na url ${Cypress.config().baseUrl}`, ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })
                            
        context('Dado o click no Key Presses devo ser redirecionado para página', ()=>{

            // const list_strings = ['Cy p r ess #!3', '123456', '}{][$#&@']
    const list_strings = ['CY P']
            
            list_strings.forEach((value, index) => {


            it('Então preencho o input e valido a mensagem exibida', ()=>{

                cy.assertPage('Key Presses', 'key_presses',
                              '.example > h3', 'Key Presses')

                cy.get('#target').as('input').then( el  => {

        
                    for(let x = 0; x < list_strings[index].length; x++){

                        cy.wrap(el).type(list_strings[index][x], {delay: 30})
                        
                        cy.wait(1000)  

                        cy.wrap(el).invoke('val').then( input_value => {

                          cy.get('#result').then( el => {
                           
                            
                           switch (input_value.length) {
                            case 2:
                              expect('You entered: '.concat(input_value.slice(1)), 'Assert letters type').equal(el[0].innerText)  

                              break;
                            
                            case 3: 
                              expect('You entered: '.concat(input_value.slice(2)), 'Assert letters type').equal(el[0].innerText)
                              break;
                            
                            case 4: 
                              expect('You entered: '.concat(input_value.slice(3)), 'Assert letters type').equal(el[0].innerText) 
                              break;
                          
                            case 5: 
                            expect('You entered: '.concat(input_value.slice(4)), 'Assert letters type').equal(el[0].innerText) 
                            break;
                          

                            default:
                              break;
                          }
          
                         
                          })
                            
                        
                        })
                            
                      }
                    }) 
                                 
                  })
                })  
              })
            })
                               

    
