const db = require('../db')
const { fieldsToSelector } = require('./_models')

const TABLE = 'account'

const FIELDS = {
  id: 'id',
  name: 'name'
}

const accountModel = {
  async add({ name }) {
    const sql = `
      insert into ${TABLE} (name)
      values (?)
    `
    const [{ insertId }] = await db.query(sql, [name])
    return insertId
  },

  async get(id) {
    const sql = `
      select ${fieldsToSelector(FIELDS)}
      from ${TABLE}
      where id = ?
    `
    const [[row]] = await db.query(sql, [id])
    return row
  }
}

module.exports = accountModel
