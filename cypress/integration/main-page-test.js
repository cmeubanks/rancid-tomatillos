describe('Main Page', () => {

  beforeEach(() => {
    cy.stubAllMoviesData()
  });

  describe('Main Loading', () => {

    it('Should display a loading message while fetching movie data', () => {
      cy.interceptAllMoviesData().reload()
      cy.get('.message')
        .should('contain', 'Page Loading 🍿')
        .should('be.visible')
    });

    it('Should remove loading message once movies have loaded', () => {
      cy.get('.message').should('not.exist')
    });

  });

  describe('Main Render', () => {

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

  });

  describe('Main Navigation', () => {

    it('Should be able to click a movie poster to go display that movie\'s info', () => {
      cy.interceptSingleMovieData()
        .get('.movie-card').click()
        .url().should('eq', 'http://localhost:3000/694919')
    });

    it('Should be able to enter movie\'s ID as URL path to reroute to that movie\'s info', () => {
      cy.interceptSingleMovieData()
        .visit('http://localhost:3000/694919')
        .get('.title').contains('Money Plane')
    });
    
  });

});
