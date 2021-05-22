describe('Movie Info Loading', () => {

  it('Should display a loading page while fetching movie data', () => {

    cy.fixture('../fixtures/single-movie-data.json')
      .then((movie) => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
          body: movie,
          delay: 200,
          statusCode: 200,
        });
        cy.visit('http://localhost:3000/694919')
      });

      cy.wait(200).get('.message').should('contain', 'Page Loading 🍿')
        .should('be.visible')
      cy.wait(210).reload()
  });

});

describe('Movie Info Display', () => {

  before(() => {
    cy.fixture('../fixtures/single-movie-data.json')
      .then((movie) => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
          body: movie,
          statusCode: 200,
        });
      });
    cy.visit('http://localhost:3000/694919')
  });

  it('Should render the movie info display', () => {
    cy.get('.title').contains('Money Plane')
      .get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      .get('section').should('have.css', 'background-image', 'url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")')
      .get('.release-date').contains('September 29, 2020')
      .get('.overview').contains('A professional thief')
      .get('.genres').contains('Action')
      .get('.budget').contains('This information is unavailable')
      .get('.revenue').contains('This information is unavailable')
      .get('.runtime').contains(82)
      .get('.tagline').eq('')
      .get('.avg-rating').contains(6)
  });

});

describe('Home Click', () => {

  it('Should go back to main page view when the Return Home button is clicked', () => {

    cy.fixture('../fixtures/single-movie-data.json')
      .then((movie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
        body: movie,
        delay: 300,
        statusCode: 200,
      });
      cy.visit('http://localhost:3000/694919')
    });

    cy.fixture('../fixtures/movies-data.json')
      .then((movies) => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          body: movies,
          delay: 300,
          statusCode: 200,
        });
        cy.wait(300).get('button').click().reload()
          .url().should('eq', 'http://localhost:3000/')
          .get('.library').find('.movie-card').should('have.length', 1)
      });
  });

});
