const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Movie = seq.define('movie', {
  'movie_name': {
    type: DataTypes.STRING
  },
  'movie_img': {
    type: DataTypes.TEXT
  },
  'score': {
    type: DataTypes.FLOAT
  }
})

// Movie.sync({ force: true })
module.exports = Movie