const Group = require('../model/group.model')

class GroupService {
  async findGroup (pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Group.findAndCountAll({ offset: offset, limit: pageSize * 1 })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }
}

module.exports = new GroupService()