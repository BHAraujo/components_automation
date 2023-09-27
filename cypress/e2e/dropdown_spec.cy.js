/// <reference types="cypress"/>

import dropdown from '../fixtures/dropdown.json'


describe('Testar página Disappearing Elements na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
  })
  

    context('Dado o click no link Dropdrown', ()=>{
  
      it('Então não deve estar selecionao nenhuma opção', ()=>{

        cy.assertPage(dropdown.link.locator, dropdown.path_url.url,
        dropdown.title.locator, dropdown.title.text)
    
        cy.get(dropdown.dropdown.locator).then( el => {

          expect(el[0].innerText, 'Assert default options').equal('Please select an option')
        
        })  
    }) 
  })

  context('Dado o click no link Dropdrown', ()=>{
    
    const obj_dropdown = [
      {"value": "Option 1", "index": 1},
      {"value": "Option 2", "index": 2}
    ]

    obj_dropdown.forEach((result)=>{

      it(`Então seleciono a opção ${result.value}`, ()=>{
          
        cy.assertPage(dropdown.link.locator, dropdown.path_url.url,
        dropdown.title.locator, dropdown.title.text)
        
        cy.get(dropdown.dropdown.locator).then( el => {
  
          expect(el[result.index].innerText, 'Assert default options').equal(result.value)
         
          if (result.index == 1){
            cy.reload()
          }

        })

    })
   
    })
  })
})


