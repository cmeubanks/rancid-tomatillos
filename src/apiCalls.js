const apiCalls = {

  async fetchAllMovies() {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
    const data = await response.json();
    return data;
  },

  async fetchAMovie(id) {
    const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`);
    const data = await response.json();
    return data;
  }
}

export default apiCalls;
