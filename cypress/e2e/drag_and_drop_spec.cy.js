/// <reference types="cypress"/>

// import drag_and_drop from '../fixtures/drag_and_drop.json'


describe('Testar página Disappearing Elements na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("drag_and_drop").as('drag_and_drop')
  })
  

    context('Dado o click no link Drag Drop', ()=>{
  
      it('Então arrasto o componente A no lugar do componente B', ()=>{
        
          cy.get('@drag_and_drop').then( drag_and_drop => {

            cy.contains('Drag and Drop').should('be.visible').click()
            cy.get(drag_and_drop.title.locator).then( el => {
              expect(el[0].innerText, 'Assert Title').equal('Drag and Drop')
            })
  
            
            cy.get(drag_and_drop.div_headers.locator).then( el => {
              expect(el[0].innerText, 'Assert Position compoment A').equal('A')
            })
            
            const dataTransfer = new DataTransfer;
            cy.get(drag_and_drop.div_a.locator).trigger('dragstart', { dataTransfer });
            cy.get(drag_and_drop.div_b.locator).trigger('drop', { dataTransfer });
  
            cy.get(drag_and_drop.div_headers.locator).then( el => {
              expect(el[0].innerText, 'Assert Position compoment B').equal('B')
            })

          })
           
    }) 
  })
})
