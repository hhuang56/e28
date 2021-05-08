// https://docs.cypress.io/api/introduction/api.html

describe('ZipFoods', () => {
  it('Visits the home page', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Products')
  })

  it('Shows all the products', () => {
    cy.visit('/products');
    cy.contains('[data-test="product-name"]', 'Driscoll’s Strawberries');
    cy.get('[data-test="product-name"]').should('have.length', 10);
    cy.get('[data-test="product-name"]').contains('Driscoll’s Strawberries').click();
    cy.contains('.price', '$4.99');
  })
})
