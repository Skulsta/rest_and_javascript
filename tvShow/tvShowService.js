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

  remove(tvShowId) {
    this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== tvShowId);
  }

  update(id, updatedTvShow) {
    this.tvShows = this.tvShows
        .map(tvShow => {
          if (tvShow.id === id) {
            return Object.assign({}, tvShow, updatedTvShow);
          }
          return tvShow;
        });
    return this.getById(id);
  }
}

module.exports = new TvShowService();
