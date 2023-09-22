/// <reference types="cypress"/>

import file_download from '../fixtures/file_download.json'




describe('Testar página FILE DOWNLOAD na url http://the-internet.herokuapp.com/', ()=>{
 
beforeEach(()=>{  
    cy.validateHome()
    cy.fixture("file_download").as('file_download')
  })


  context('Dado o click no link FILE DOWNLOAD valido o título da página', ()=>{

    it('Então valido a quantidae de clicks disponíveis para download', ()=>{

        cy.get('@file_download').then( file_download => {

            cy.contains('File Download').should('be.visible').click()

        cy.get(file_download.title.locator).should('be.visible').then( el => {

            expect(el[0].innerText).equal(file_download.title.text)

        })

        cy.get(file_download.links.locator).then( el => {
  
            const lista_href = []

            for(let x = 0; x < el.length; x++){

                lista_href.push(el[x].innerText)
                
            }

            expect(lista_href.length).equal(66)
        })

        })
        
     })
    })  
  
    const lista_href = [
        'eva-logo.png', 'Jpeg_with_exif.jpeg', 'Bugs.txt', 
        'testing_firefox.pdf', 'sb.gif', 'Test.py',
        'testing_firefox.docx', 'Video2.webm', 
        'test-output (1).html','ThisIsMyFilename.textfile',
        'dog.jfif', 'Tiger.jfif', 'photo-1-1539960492660791551744.webp',
        'preprod.json', 'sample1.pdf', 'testing.mp3', 'upload_file.xlsx',
         '5mb script.xml', 'sample-zip-file.zip', 'testing_edge.pdf'
    ].forEach(file =>{

        context('Dado o click no link FILE DOWNLOAD valido o título da página', ()=>{

            it(`Então clico no link ${file} e valido se o arquivo foi baixado corretamente`, ()=>{
                
             cy.get('@file_download').then( file_download => {
               
                cy.contains('File Download').should('be.visible').click()
        
                cy.get(file_download.title.locator).should('be.visible').then( el => {
        
                    expect(el[0].innerText).equal(file_download.title.text)
        
                })
        
                cy.downloadFile('http://the-internet.herokuapp.com/download/'+ file, '../cypress/downloads', file).then(() =>{
                    cy.readFile('./cypress/downloads/'+file).should('be.to.exist')
                })
             })   
            
            })
        })
    })

})


