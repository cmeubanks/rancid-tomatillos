describe('Movie Info', () => {

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

  it('Should display a loading page while fetching movie data', () => {
    cy.get('.message').should('contain', 'Page Loading 🍿')
      .should('be.visible')
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

  it('Should go back to the main page view when the Return Home button is clicked', () => {
    cy.fixture('../fixtures/movies-data.json')
    .then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        body: movies,
        statusCode: 200,
      });
    cy.get('button').click()
    });
  });

});

// {
//     "movie": {
//         "id": 694919,
//         "title": "Money Plane",
//         "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//         "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//         "release_date": "2020-09-29",
//         "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
//         "genres": [
//             "Action"
//         ],
//         "budget": 0,
//         "revenue": 0,
//         "runtime": 82,
//         "tagline": "",
//         "average_rating": 6.142857142857143
//     }
// }
