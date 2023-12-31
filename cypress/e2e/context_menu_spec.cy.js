/// <reference types="cypress"/>


import context_menu from '../fixtures/context_menu.json'


describe(`Testar componentes do link Context Menu na url ${Cypress.config().baseUrl}`, ()=>{ 
      
    beforeEach(()=>{  
      cy.validateHome()
    })
    
    
    context('Dado o click no link Context Menu', ()=>{
      
      it('Então clico no Context Menu e o valido mensagem do alert', ()=>{

          cy.assertPage(context_menu.link.locator, context_menu.path_url.url,
          context_menu.title.locator, context_menu.title.text)
            
          
          cy.get(context_menu.description.locator).then( el => {

            expect(el[0].innerText, 'Assert Description').equal(context_menu.description.texts[0].text1)

            expect(el[1].innerText, 'Assert Description').equal(context_menu.description.texts[1].text2)
            
          })
          
          cy.get(context_menu.context_menu.locator, {force:true, position:'top', waitForAnimations:true}).rightclick()
          
          cy.on('window:alert', (msg)=>{
           
            expect(msg, 'Assert menssage ALERT').equal(context_menu.msg_alert.text)
         
          })
          
    })        

  }) 

})

