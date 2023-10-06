const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const {
  userFormageError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidePassword
} = require('../constant/err.type')
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  console.log(user_name, password)
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormageError, ctx)
    return
  }
  // 交由下一个中间件处理
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  // 合理性
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户名已经存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误')
    ctx.app.emit('error', userRegisterError)
    return
  }

  await next()
}

const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  // hash 保存的是密闻
  const hash = bcrypt.hashSync(password, salt)
  ctx.request.body.password = hash
  await next()
}

const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUserInfo({ user_name })
    if (!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist)
      return
    }
    // 密码是否匹配
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidePassword, ctx)
      return
    }

  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin
}