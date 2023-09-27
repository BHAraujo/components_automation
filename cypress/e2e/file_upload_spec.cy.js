/// <reference types="cypress"/>


import file_upload from '../fixtures/file_upload.json'


describe(`Testar componentes do link File Upload na url ${Cypress.config().baseUrl}`, ()=>{ 

    beforeEach(()=>{  
      cy.validateHome()
    })

    context('Dado o click no File Upload devo ser redirecionado para página', ()=>{
  
      it('Então clico no botão escolher arquivo e clico no botão upload', ()=>{

        cy.assertPage(file_upload.link.locator, file_upload.path_url.url,
        file_upload.title.locator, file_upload.title.text)

        const file = 'file_upload.json'

        cy.get(file_upload.input_upload.locator).attachFile(file);

        cy.get(file_upload.btn_submit.locator).should('be.visible').click()

        cy.get(file_upload.title_uploader.locator).should('be.visible').then( el => {

            expect(el[0].innerText, 'Assert Input Upload').equal(file_upload.title_uploader.text)
        
        })

        cy.get(file_upload.p_uploader.locator).then( el => {
           
            expect(el[0].innerText, 'Assert Name File Uploaded').equal(file)
            
        })
      })
    })
})