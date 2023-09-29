import 'cypress-file-upload';
import home from '../fixtures/home.json'


Cypress.Commands.add('validateHome', ()=>{
    cy.visit('/')

      cy.get(home.title.locator).then(el => {

        expect(el[0].innerText, 'Assert Title Home').equal(home.title.text)
      
      })  

      cy.get(home.sub_title.locator).then(el => {
      
        expect(el[0].innerText, 'Assert SubTitle Home').equal(home.sub_title.text)
      
      })
})


Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
  return cy.getCookies().then((cookies) => {
    return cy.task('downloadFile', {
      url,
      directory,
      cookies,
      fileName,
    })
  })
})

Cypress.Commands.add('assertPage', (link_name, path_url, locator_title, title)=> {

  cy.contains(link_name).should('be.visible').click()  

            cy.url().then( url => {

                expect(url).equal(Cypress.config().baseUrl.concat(path_url))

                cy.get(locator_title).then( (el)=>{
                    expect(el[0].innerText, 'Assert Title').equal(title)
                })
            })
})