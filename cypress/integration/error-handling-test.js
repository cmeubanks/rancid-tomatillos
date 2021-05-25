describe('Error Handling', () => {

  describe('Status Error', () => {

    it('Should display error message for 500 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500
      })
      cy.visit('http://localhost:3000/')
        .contains('Uh Oh, Something Went Wrong 🎭')
    })

    it('Should display error message for 404 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404
      })
      cy.visit('http://localhost:3000/')
        .contains('Uh Oh, Something Went Wrong 🎭')
    })

    it('Should display error message for 400 status code', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 400
      })
      cy.visit('http://localhost:3000/')
        .contains('Uh Oh, Something Went Wrong 🎭')
    })

  });

  describe('Incorrect URL', () => {

    beforeEach(() => {
      cy.stubAllMoviesData()
    });

    it('Should reroute to home page when invalid movie path is added to URL', () => {
      cy.visit('http://localhost:3000/movies/123456')
        .url().should('eq', 'http://localhost:3000/')
    })

  });

});
