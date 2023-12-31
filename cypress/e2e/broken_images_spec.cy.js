/// <reference types="cypress"/>


import broken_images from '../fixtures/broken_images.json'


describe(`Testar componentes do link Broken Images na url ${Cypress.config().baseUrl}`, ()=>{ 
    
    beforeEach(()=>{  
        cy.validateHome()
      })
     

    context('Dado o click no link Broken Images', ()=>{
  
      it('Então valido o carregamento das imagens', ()=>{

          cy.assertPage(broken_images.link, broken_images.path_url.url,
          broken_images.title.locator,broken_images.title.text)
          
          cy.get(broken_images.images.locator).then( el => {

            expect(el[1].currentSrc,'Assert Broken HREF Image').equal(broken_images.images.index[0].image_one)
            
            expect(el[2].currentSrc,'Assert Broken HREF Image').equal(broken_images.images.index[1].image_two)
            
            expect(el[3].currentSrc,'Assert OK Image').equal(broken_images.images.index[2].image_three)
          
          })

        })         
  })
})
