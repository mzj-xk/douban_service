const Router = require('koa-router')

const router = new Router({ prefix: '/movie' })
const { cinemasHot } = require('../controller/movie.controller')
// 院线热映
router.get('/cinemas/hot', cinemasHot)

module.exports = router