describe('Error Handling', () => {

  before(() => {
    cy.fixture('../fixtures/movies-data.json')
      .then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
      })
    })
  });

  it('Should display an error message when server is down', () => {
    cy.visit('http://localhost:3000/')
      .get('.message')
  })

});
