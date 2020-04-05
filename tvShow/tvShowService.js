// Handle all operations that has to do with managing tv shows
const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(createId(), 'The Office', 'Comedy'),
    new TvShow(createId(), 'Friends', 'Comedy')];
  }

  getAll() {
    return this.tvShows;
  }

  getById(tvShowId) {
    return this.tvShows.find(tvShow => tvShow.id == tvShowId);
  }

  createTvShow(name, genre) {
    const id = createId();
    const tvShow = new TvShow(id, name, genre);
    this.tvShows.push(tvShow);
    return tvShow;
  }

}

module.exports = new TvShowService();
