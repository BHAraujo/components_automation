/// <reference types="cypress"/>


import file_upload from '../fixtures/file_upload.json'


describe('Testar página A/B Testing na url http://the-internet.herokuapp.com/', ()=>{

    beforeEach(()=>{  
      cy.validateHome()
      cy.fixture("file_upload").as('file_upload')
    })


    context('Dado o click no File Upload devo ser redirecionado para página', ()=>{
  
      it('Então clico no botão escolher arquivo e clico no botão upload', ()=>{

        cy.get('@file_upload').then( file_upload => {

            cy.contains('File Upload').should('be.visible').click()

        cy.get(file_upload.title.locator).should('be.visible').then( el => {
        
            expect(el[0].innerText).equal(file_upload.title.text)
        
        })

        const file = 'file_upload.json'

        cy.get(file_upload.input_upload.locator).attachFile(file);

        cy.get(file_upload.btn_submit.locator).should('be.visible').click()

        cy.get(file_upload.title_uploader.locator).should('be.visible').then( el => {

            expect(el[0].innerText).equal(file_upload.title_uploader.text)
        
        })

        cy.get(file_upload.p_uploader.locator).then( el => {
           
            expect(el[0].innerText).equal(file)
            
        })

        })
        
      })
    })
})