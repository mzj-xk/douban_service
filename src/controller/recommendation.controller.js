const { findRecommendations } = require('../service/recommendation.service')

class RecommendationController {
  async findAll (ctx) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query
    const res = await findRecommendations(pageNum, pageSize)
    ctx.body = {
      code: 0,
      message: '获取推荐列表成功',
      result: res
    }
  }
}

module.exports = new RecommendationController()