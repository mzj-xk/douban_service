const { DataTypes } = require('sequelize')
const seq = require('../db/seq')


const Group = seq.define('group', {
  'group_name': {
    type: DataTypes.STRING
  },
  'group_img': {
    type: DataTypes.TEXT
  },
  'count': {
    type: DataTypes.INTEGER
  },
  'talk_one': {
    type: DataTypes.STRING,
  },
  'talk_one_count': {
    type: DataTypes.INTEGER
  },
  'talk_two': {
    type: DataTypes.STRING
  },
  'talk_tow_count': {
    type: DataTypes.INTEGER
  }
})

// Group.sync({ force: true })
module.exports = Group