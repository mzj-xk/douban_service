const Router = require('koa-router')
const { findAll } = require('../controller/recommendation.controller')

const router = new Router({ prefix: '/recommendation' })

router.get('/', findAll)

module.exports = router