const Movie = require('../model/movie.model')

class MovieService {
  async cinemasHot (pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Movie.findAndCountAll({ offset: offset, limit: pageSize * 1 })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }
}

module.exports = new MovieService()