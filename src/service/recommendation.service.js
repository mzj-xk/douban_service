const Recommendation = require('../model/recommendation.model')

class RecommendationService {
  async findRecommendations (pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Recommendation.findAndCountAll({ offset: offset, limit: pageSize * 1 })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }
}

module.exports = new RecommendationService()

