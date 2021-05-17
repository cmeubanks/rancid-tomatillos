describe('Main', () => {

  before(() => {
    cy.fixture('../fixtures/movies-data.json')
      .then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        body: movies,
        statusCode: 200,
      });
    });
  });

  it('Should render the main page', () => {
    cy.visit('http://localhost:3000')
    .get('h1').contains('Rancid Tomatillos')
    .get('#694919')
    .get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

});
