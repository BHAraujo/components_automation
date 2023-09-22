/// <reference types="cypress"/>

// import file_download from '../fixtures/file_download.json'




describe('Testar página FILE DOWNLOAD na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    // cy.fixture("file_download").as('file_download')
  })


  context.skip('Dado o click no link FILE DOWNLOAD valido o título da página', ()=>{

    it('Então valido a quantidae de clicks disponíveis para download', ()=>{
        cy.contains('File Download').should('be.visible').click()

        cy.get('.example > h3').should('be.visible').then( el => {
            expect(el[0].innerText).equal('File Downloader')
        })

        cy.get('.example > a').then( el => {
            console.log(el)
            const lista_href = []
            for(let x = 0; x < el.length; x++){

                lista_href.push(el[x].innerText)
                
            }

            expect(lista_href.length).equal(66)
        })

     })
    })  
  

  context('Dado o click no link FILE DOWNLOAD valido o título da página', ()=>{

    it('Então clico no link  e valido se o arquivo foi baixado corretamente', ()=>{

        cy.contains('File Download').should('be.visible').click()

        cy.get('.example > h3').should('be.visible').then( el => {
            expect(el[0].innerText).equal('File Downloader')
        })

        cy.downloadFile('http://the-internet.herokuapp.com/download/eva-logo.png', '../cypress/downloads', 'teste.png')

        cy.readFile('./cypress/downloads/teste.png').should('be.to.exist')

     })
    })
})