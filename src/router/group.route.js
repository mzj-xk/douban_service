const Router = require('koa-router')

const router = new Router({ prefix: '/group' })
const { findAll } = require('../controller/group.controller')

router.get('/', findAll)

module.exports = router