const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Recommendation = seq.define('recommendation', {
  'user_name': {
    type: DataTypes.STRING,
  },
  'avatar_url': {
    type: DataTypes.TEXT,
  },
  'tag': {
    type: DataTypes.STRING,
  },
  'content': {
    type: DataTypes.STRING,
  },
  'content_img': {
    type: DataTypes.STRING,
  },
  'likes': {
    type: DataTypes.INTEGER
  },
  'remark': {
    type: DataTypes.INTEGER
  },
  'share': {
    type: DataTypes.INTEGER
  }
})

// Recommendation.sync({ force: true })
module.exports = Recommendation