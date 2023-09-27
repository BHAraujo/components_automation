/// <reference types="cypress"/>


import notification_message from '../fixtures/notification_message.json'


describe('Testar página Notification Messages na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()

    })
                            
        context('Dado o click no Notification Messages devo ser redirecionado para página', ()=>{

            it('Então valido a mensagem exibia na notificação', ()=>{

                cy.assertPage(notification_message.link.locator, notification_message.path_url.url,
                    notification_message.title.locator, notification_message.title.text)

                let set_message = new Set()
                const count = 5

                for(let x = 0; x < count; x++){
                    
                    cy.contains(notification_message.link_click_here.locator).should('be.visible').click()

                    cy.wait(1000)

                    cy.get(notification_message.label_msg.locator).then( el => {

                        set_message.add(el[0].innerText)
                       
                        if(set_message.size == 2){
                    
                            expect(set_message.values(' Action successful\n×'))
                           expect(set_message.values(' Action unsuccesful, please try again\n×'))
                    
                        }
                          
                    })
 
                }
            
            })
                
     })
        
})





