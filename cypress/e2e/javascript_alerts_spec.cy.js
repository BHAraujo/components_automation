/// <reference types="cypress"/>


// import javascript_alerts from '../fixtures/javascript_alerts.json'



describe('Testar página JavaScript Alerts na url http://the-internet.herokuapp.com/ com título the-internet Available Examples', ()=>{
    beforeEach(()=>{  
        cy.validateHome()   
      })
    
    
    context.skip('Dado o click no link JavaScript Alerts', ()=>{
        it('Então clico no botão Click for JS Alert e valido as mensagens exibidas', ()=>{

            cy.assertPage('JavaScript Alerts', 'javascript_alerts',
                '.example > h3', 'JavaScript Alerts')

            cy.contains('Click for JS Alert').click()

            cy.on('window:alert', (msg)=>{
                    
                expect(msg, 'Assert menssage ALERT').equal('I am a JS Alert')
             
              })

              cy.get('#result').then( el => {

                expect(el[0].innerText).equal('You successfully clicked an alert')
              
            })
        })
    })


    const list_button = [
                            'OK', 'CANCEL'
                        ].forEach((result => {

                    context('Dado o click no link JavaScript Alerts', ()=>{

                        it('Então clico no botão Click for JS Alert e no botão ${result} o alert e valido as mensagens exibidas', ()=>{
                
                cy.assertPage('JavaScript Alerts', 'javascript_alerts',
                    '.example > h3', 'JavaScript Alerts')
    
                cy.contains('Click for JS Confirm').click()
    
                    if(result === 'OK'){

                    cy.on('window:confirm', (msg)=>{
                    
                        expect(msg, 'Assert menssage ALERT').equal('I am a JS Confirm')
                        
                        })

                    }else{

                        cy.on('window:confirm', () => false)
                    } 
                    
                    
                    cy.get('#result').then( el => {
                    if(result === 'OK'){

                        expect(el[0].innerText).equal('You clicked: Ok')

                    }else{

                        expect(el[0].innerText).equal('You clicked: Cancel')

                     }     
                                
                })
            })
        })

          
    context.skip('Dado o click no link JavaScript Alerts', ()=>{
        it('Então clico no botão Click for JS Prompt e preencho o input e clico no botão OK e valido as mensagens exibidas', ()=>{

            cy.assertPage('JavaScript Alerts', 'javascript_alerts',
                '.example > h3', 'JavaScript Alerts')

            cy.contains('Click for JS Prompt').click()

            cy.on('window:alert', (alert)=>{
                    
                // expect(msg, 'Assert menssage ALERT').equal('I am a JS Alert')

                cy.wrap(alert).type('asdas')
              })

              cy.get('#result').then( el => {

                expect(el[0].innerText).equal('You successfully clicked an alert')
              
            })
        })
    })

    }))
    
})