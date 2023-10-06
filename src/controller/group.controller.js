const { findGroup } = require('../service/group.service')

class GroupController {
  async findAll (ctx) {
    const { pageNum = 1, pageSize = 10 } = ctx.request.query
    const res = await findGroup(pageNum, pageSize)
    ctx.body = {
      code: 0,
      message: '获取小组列表成功',
      result: res
    }
  }
}

module.exports = new GroupController()