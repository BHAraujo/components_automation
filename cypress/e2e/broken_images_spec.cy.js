/// <reference types="cypress"/>


import broken_images from '../fixtures/broken_images.json'


describe('Testar página Broken Images na url http://the-internet.herokuapp.com/', ()=>{
  beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("broken_images").as('broken_images')
  })
     

    context('Dado o click no link Broken Images', ()=>{
  
      it('Então valido o carregamento das imagens', ()=>{
        
        cy.get('@broken_images').then(broken_images => {
        
          cy.contains(broken_images.link).click()
       
          cy.get(broken_images.title.locator).then( el => {
            expect(el[0].innerText, 'Assert Title').equal(broken_images.title.text)
          })
  
          cy.get(broken_images.images.locator).then( el => {
            expect(el[1].currentSrc,'Assert Broken HREF Image').equal(broken_images.images.index[0].image_one)
            expect(el[2].currentSrc,'Assert Broken HREF Image').equal(broken_images.images.index[1].image_two)
            expect(el[3].currentSrc,'Assert OK Image').equal(broken_images.images.index[2].image_three)
          })

        })        

    }) 

  })
})
