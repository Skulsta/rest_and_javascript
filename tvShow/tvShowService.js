const TvShow = require('./TvShow');

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(1, 'The Office', 'Comedy'),
    new TvShow(2, 'Friends', 'Comedy')];
  }

  getAll() {
    return this.tvShows;
  }

  getById(tvShowId) {
    return tvShows.find(tvShow => tvShow.id == tvShowId);
  }
}

module.exports = new TvShowService();
