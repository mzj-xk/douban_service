const { cinemasHot } = require('../service/movie.service')

class MovieController {
  async cinemasHot (ctx) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query
    const res = await cinemasHot(pageNum, pageSize)
    ctx.body = {
      code: 0,
      message: '获取院线热映成功',
      result: res
    }
  }
}

module.exports = new MovieController()