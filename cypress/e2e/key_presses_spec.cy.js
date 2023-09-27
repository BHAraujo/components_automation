/// <reference types="cypress"/>


// import jquery_ui_menus from '../fixtures/jquery_ui_menus.json'


describe('Testar página Key Presses na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
    })
                            
        context.skip('Dado o click no Key Presses devo ser redirecionado para página', ()=>{

            // const list_strings = ['Cy p r ess #!3', '123456', '}{][$#&@']
    const list_strings = ['Cy p r ess #!3']
            
            list_strings.forEach((value, index) => {


            it('Então preencho o input e valido a mensagem exibida', ()=>{

                cy.assertPage('Key Presses', 'key_presses',
                              '.example > h3', 'Key Presses')

                cy.get('#target').as('input').then( el  => {

        
                    for(let x = 0; x < list_strings[index].length; x++){

                        cy.wrap(el).type(list_strings[index][x], {delay: 30})

                    
                        
                        cy.wait(2000)  
                        
                        console.log('te'.length)
                        
                        // console.log(list_strings[index][x])
                        // if(list_strings[index][x].length > 1){
                        //     console.log(list_strings[index][x])
                        // }
                        // cy.wrap(el).invoke('val').should('equal', list_strings[index][x])
                        
                      }
                    }) 
                    
                      
                   
                  })  
                               

    })
})
})