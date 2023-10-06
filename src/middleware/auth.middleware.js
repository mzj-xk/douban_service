const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { TokenExpiredError, invailToken, hasNoAdminPermission } = require('../constant/err.type')
const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  // console.log(token)

  try {
    // user中包含了payload的信息(id, user_name, is_admin)
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        console.error('token已过期', err)
        return ctx.app.emit('error', TokenExpiredError, ctx)
      case 'JsonWebTokenError':
        console.error('无效的token', err)
        return ctx.app.emit('error', invailToken, ctx)
    }

  }
  await next()
}

const hasAdminPermission = async (ctx, next) => {
  const { is_admin } = ctx.state.user

  if (!is_admin) {
    console.error('该用户没有管理员的权限', ctx.state.user)
    return ctx.app.emit('error', hasNoAdminPermission, ctx)
  }

  await next()
}

module.exports = {
  auth,
  hasAdminPermission
}