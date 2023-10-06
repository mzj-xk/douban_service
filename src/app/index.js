const path = require('path')

const Koa = require('koa')
const { koaBody } = require('koa-body')
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter')

const errHandler = require('./errHandler')
const router = require('../router')
const app = new Koa()

app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '../upload'),
    keepExtensions: true
  }
}))

app.use(KoaStatic(path.join(__dirname, '../upload')))
app.use(parameter(app))

// 路由加载
app.use(router.routes())
  .use(router.allowedMethods())

// 错误的统一处理
app.on('error', errHandler)

module.exports = app