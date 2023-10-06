const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })

const { validator } = require('../middleware/goods.middleware')
const { upload, create, update, remove, restore, findAll } = require('../controller/goods.contoller')
const { auth, hasAdminPermission } = require('../middleware/auth.middleware')

// 商品图片上传接口
router.post('/upload', auth, hasAdminPermission, upload)

// 发布商品接口
router.post('/', auth, hasAdminPermission, validator, create)

// 修改商品接口
router.post('/:id', auth, hasAdminPermission, validator, update)

// 硬删除接口
// router.delete('/:id', auth, hasAdminPermission, remove)

router.post('/:id/off', auth, hasAdminPermission, remove)

router.post('/:id/on', auth, hasAdminPermission, restore)

// 获取商品列表
router.get('/', findAll)

module.exports = router