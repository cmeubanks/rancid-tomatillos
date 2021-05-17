// As a user, when I visit the app, all movies should be displayed
//
// Acceptance Criteria:
//
// When I load the page using the home URL, the page automatically renders a header displaying the site title, and a "movie library" below populated with movie posters for all elements in the movies API.
// If the API data rendering isn't immediately visible, I can see a temporary "Page Loading" view in its place.

describe('Main', () => {
  it('Should render the main page', () => {
    cy.visit('http://localhost:3000');
  });


  
});
