describe('Main', () => {

  before(() => {
    cy.fixture('../fixtures/movies-data.json')
      .then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        body: movies,
        statusCode: 200,
      });
    });
    cy.visit('http://localhost:3000')
  });

  it('Should display a loading page while fetching movie data', () => {
    cy.get('.message').should('contain', 'Page Loading 🍿')
      .should('be.visible')
  });

  it('Should remove loading message once movies have loaded', () => {
    cy.get('.message').should('not.exist')
  });

  it('Should render the main page', () => {
    cy.get('h1').contains('Rancid Tomatillos')
      .get('#694919')
      .get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

  it('Should display all movies in the fetched dataset', () => {
    cy.get('.library')
      .find('.movie-card').should('have.length', 1)
  });

  it('Should display correct path on page load', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should be able to click a movie poster', () => {
    cy.get('.movie-card').click()
    cy.fixture('../fixtures/single-movie-data.json')
      .then((movie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        body: movie,
        statusCode: 200,
      });
    });
  });
});
