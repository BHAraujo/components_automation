/// <reference types="cypress"/>

import dynamic_content from '../fixtures/dynamic_content.json'


describe('Testar página Disappearing Elements na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("dynamic_content").as('dynamic_content')
  })
  

    context('Dado o click no link Dynamic Content', ()=>{
      
    for(let x = 0; x <= 10; x++) {

      it('Então clico no botão CLICK HERE e altero a ordem dos CONTENT', ()=>{

        cy.get('@dynamic_content').then( dynamic_content => {

          cy.assertPage(dynamic_content.link.locator, dynamic_content.path_url.url,
          dynamic_content.title.locator, dynamic_content.title.text)


        cy.get(dynamic_content.content.locator).then( el => {

          const list_image = [el[0].currentSrc, 
                              el[1].currentSrc, 
                              el[2].currentSrc
                            ]
            cy.wrap(list_image).as('list_image')  
            cy.contains("click here").click({force: true}); 

          })  

          cy.get(dynamic_content.content.locator).then( el => {
            
            const new_list_image = [el[0].currentSrc, 
                                el[1].currentSrc, 
                                el[2].currentSrc
                              ]

           cy.get('@list_image').then( list_image => {

            expect(list_image, 'Assert comparation list content').not.to.include(new_list_image)  

           })                     
  
        })
      })    
    }) 
    }  
  })
})
