import home from '../fixtures/Home.json'
import ab_testing from '../fixtures/ab_testing.json'
import add_remove_elements from '../fixtures/add_remove_elements.json'


Cypress.Commands.add('validateHome', () => {
    cy.visit('/')
      cy.fixture("home").as('home')
      cy.fixture("ab_testing").as('ab_testing')
      cy.fixture("add_remove_elements").as('add_remove_elements')

      cy.get('@home').then(homeFixture => {

        cy.get(home.title.locator).then(el => {
          expect(el[0].outerText, 'Assert Title').equal(home.title.text)
        })
  
        cy.get(home.sub_title.locator).then(el => {
          expect(el[0].outerText, 'Assert Title').equal(home.sub_title.text)
        })

      })
})

