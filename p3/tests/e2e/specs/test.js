const user = {
  id: 1,
  name: 'Jill Harvard',
  email: 'jill@harvard.edu',
  password: 'asdfasdf'
}

Cypress.Commands.add('login', () => {
  cy.visit('/account');
  cy.get('#email-input').clear().type('jill@harvard.edu')
  cy.get('#password-input').clear().type('asdfasdf')
  cy.get('#login-button').click()
  cy.contains('.name', 'Tomatoes and Steak')
})

describe('Search Page', () => {
  it('visits the search page', () => {
    cy.visit('/')
    cy.contains('#selected-ingredients-display', 'Select the ingredients you want to use')
  })

  it('searches for a recipe', () => {
    cy.get('#beans').click()
    cy.contains('.name', 'Bean Dip')
  })
})

describe('Contribute Page', () => {
  it('visits the contribute page', () => {
    cy.visit('/contribute')
    cy.contains('#add-recipe-container', 'Help contribute')
  })

  it('contributes a recipe', () => {
    cy.get('#name').clear().type('Test recipe')
    cy.get('#description').clear().type('Test description')
    cy.get('#instruction').clear().type('Test instruction')
    cy.get('#chicken').click()
    cy.get('#submit-recipe-button').click()
    cy.contains("#confirmation", "Your recipe was added. Thanks!")
  })

  it('fails to submit a recipe without all required fields', () => {
    cy.get('#submit-recipe-button').click()
    cy.contains("#error-div", "Error(s) adding recipe")
  })
})

describe('Ratings Page', () => {
  it('visits the ratings page', () => {
    cy.visit('/ratings')
    cy.contains('#review-container', 'Our top rated recipes')
  })

  it('cannot Like or Unlike recipes without first logging in', () => {
    cy.get('#liked-icon-1').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login to Favorite recipes!')
    })
  })

  it('unfavorites a recipe', () => {
    cy.login()
    cy.visit('/ratings')
    cy.get('#liked-icon-1').click()
    cy.get('#unliked-icon-1').should('be.visible')
    cy.contains('#num-liked-1', '0')
  })

  it('favorites a recipe', () => {
    cy.login()
    cy.visit('/ratings')
    cy.get('#unliked-icon-1').click()
    cy.get('#liked-icon-1').should('be.visible')
    cy.contains('#num-liked-1', '1')
  })
})

describe('Account Page', () => {
  it('visits the Account page while logged out', () => {
    cy.visit('/account')
    cy.contains('h2', 'Login')
  })

  it('validates login', () => {
    cy.get('#login-button').click()
    cy.contains('.error', 'required')
  });

  it('can see favorites after logging in', () => {
    cy.login()
    cy.get('.recipe-card').should('have.length', 2)
  });

  it('logs out', () => {
    cy.login()
    cy.get('#logout-button').click()
    cy.contains('h2', 'Login')
  });

  it('validates required fields for registeration', () => {
    cy.get('#toggle-register-button').click()
    cy.contains('h2', 'Register')
    cy.get('#register-button').click()
    cy.contains('.error', 'required')
  });

  it('validates email field', () => {
    cy.get('#name-input').clear().type('Tester')
    cy.get('#email-input').clear().type('test')
    cy.get('#register-button').click()
    cy.contains('.error', 'email format')
  });

  it('validates password field', () => {
    cy.get('#name-input').clear().type('Tester')
    cy.get('#email-input').clear().type('test@test.com')
    cy.get('#password-input').clear().type('pass')
    cy.get('#register-button').click()
    cy.contains('.error', '8 characters')
  });

  it('registers', () => {
    cy.get('#name-input').clear().type('Tester')
    cy.get('#email-input').clear().type('test@test.com')
    cy.get('#password-input').clear().type('password')
    cy.get('#register-button').click()
    cy.contains('h2', 'Hi')
  })

})
