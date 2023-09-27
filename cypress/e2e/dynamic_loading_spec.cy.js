/// <reference types="cypress"/>

import dynamic_loading from '../fixtures/dynamic_loading.json'


describe('Testar página Dynamic Loading na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
  })

  

    const link_example_one = [
      {link: "Example 1: Element on page that is hidden"},
      {link: "Example 2: Element rendered after the fact"}
       
      ] 

  link_example_one.forEach((result)=>{
        context(`Dado o click no link Dynamic Loading e o ${result.link}`, ()=>{

        it('Então clico no botão START e valido a mensagem exibida HELLO WORLD!', ()=>{

            cy.assertPage(dynamic_loading.link.locator, dynamic_loading.path_url.url,
            dynamic_loading.title.locator, dynamic_loading.title.text)

            cy.contains(result.link).click()

            cy.get(dynamic_loading.subtitle.locator).then( el => {

             expect(el[0].innerText, 'Assert Subtitle').equal(result.link)

            })

            cy.get(dynamic_loading.button_start.locator).should('be.visible').click()

            cy.get(dynamic_loading.p_loading.locator).should('be.visible').then( el => {

             expect(el[0].outerText, 'Assert Message Loading').equal('Loading... ')

            })

            cy.get(dynamic_loading.p_finish.locator).then( el => {

              expect(el[0].children[0].innerText, 'Assert Text after clique Button').equal('Hello World!')
          
          })
      })
    })
  })
})
