import home from '../fixtures/home.json'


Cypress.Commands.add('validateHome', ()=>{
    cy.visit('/')

      cy.fixture("home").as('home')

      cy.get('@home').then(home => {

      cy.get(home.title.locator).then(el => {

        expect(el[0].innerText, 'Assert Title').equal(home.title.text)
      
      })  

      cy.get(home.sub_title.locator).then(el => {
      
        expect(el[0].innerText, 'Assert Title').equal(home.sub_title.text)
      
      })

    })
})