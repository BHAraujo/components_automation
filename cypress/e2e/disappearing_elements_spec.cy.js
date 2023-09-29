/// <reference types="cypress"/>


import disappearing_elements from '../fixtures/disappearing_elements.json'
import home from '../fixtures/home.json'


describe(`Testar componentes do link Disappearing na url ${Cypress.config().baseUrl}`, ()=>{ 
 
beforeEach(()=>{  
    cy.validateHome()
  })
  

  
    context('Dado o click no link Disappearing Elements', ()=>{
  
      it('Então clico no link HOME devo ser redirecionado para tela HOME', ()=>{
          
         cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
          disappearing_elements.title.locator, disappearing_elements.title.text)

          cy.contains(disappearing_elements.links[0].locator_home).click()
          
          cy.get(home.title.locator).then( el => {

            expect(el[0].innerText, 'Assert Title Home').equal(home.title.text)
          
          cy.url().should('contain', Cypress.config().baseUrl)
  
        })

    }) 
  })


  context('Dado o click no link Disappearing Elements', ()=>{
  
    it('Então clico no link ABOUT devo ser redirecionado para tela ABOUT', ()=>{
      
        
      cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
        disappearing_elements.title.locator, disappearing_elements.title.text)

        cy.contains(disappearing_elements.links[1].locator_about).click()
    
        cy.get(disappearing_elements.links[1].text).then( el => {
    
          expect(el[0].outerText, 'Assert Message').equal('Not Found')

          cy.url().should('contain', Cypress.config().baseUrl+'about/')
    
        })
    }) 
  })


  context('Dado o click no link Disappearing Elements', ()=>{
  
    it('Então clico no link CONTACT US devo ser redirecionado para tela CONTACT US', ()=>{
              
      cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
        disappearing_elements.title.locator, disappearing_elements.title.text)

      cy.contains(disappearing_elements.links[2].locator_contact_us).click()
    
        cy.get(disappearing_elements.links[2].text).then( el => {
    
          expect(el[0].outerText, 'Assert Message').equal('Not Found')

          cy.url().should('contain', Cypress.config().baseUrl+'contact-us/')
    
        })
    }) 
  })


  context('Dado o click no link Disappearing Elements', ()=>{
  
    it('Então clico no link PORTFOLIO devo ser redirecionado para tela PORTFOLIO', ()=>{
              
        cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
        disappearing_elements.title.locator, disappearing_elements.title.text)

        cy.contains(disappearing_elements.links[3].locator_portfolio).click()
    
        cy.get(disappearing_elements.links[3].text).then( el => {
    
          expect(el[0].outerText, 'Assert Message').equal('Not Found')

          cy.url().should('contain', Cypress.config().baseUrl+'portfolio/')
    
        })
    }) 
  })


  context('Dado o click no link Disappearing Elements', ()=>{
  
    it('Então clico no link GALLERY devo ser redirecionado para tela GALLERY', ()=>{
              
      cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
        disappearing_elements.title.locator, disappearing_elements.title.text)

      cy.contains(disappearing_elements.links[4].locator_gallery).click()
    
        cy.get(disappearing_elements.links[4].text).then( el => {
    
          expect(el[0].outerText, 'Assert Message').equal('Not Found')

          cy.url().should('contain', Cypress.config().baseUrl+'gallery/')
    
        })
    }) 
  })


  context('Dado o click no link Disappearing Elements', ()=>{
  
    it('Então atualizo a página até o componente Gallery ser removido', ()=>{
      
      
        cy.assertPage(disappearing_elements.link_disappearing.locator, disappearing_elements.path_url.url,
        disappearing_elements.title.locator, disappearing_elements.title.text)

        cy.get('ul>li').then( el => {
          if (el.length == 5 || el.length == 4) 
            
          if (el.length == 5){

              expect(el.length).equal(5)
          
            }else{

              expect(el.length).equal(4)
           
            }
          
        })

        for(let x = 0; x < 5; x++){

          cy.get('ul>li').then( el => {

            cy.reload()  
            
            if (el.length == 4){

              expect(el.length).equal(4)
              x = 5
          
            }
           
         })
        x++
        }

    }) 
  })
})
