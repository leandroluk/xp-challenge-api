const db = require('../db')
const { fieldsToSelector } = require('./_models')

const TABLE = 'user'

const FIELDS = {
  id: 'id',
  accountId: 'account_id',
  email: 'email',
  password: 'password'
}

const userModel = {
  async countEmail(email) {
    const sql = `
      select 1
      from ${TABLE}
      where email = ?
    `
    const [[exists]] = await db.query(sql, [email])
    return !!exists
  },

  async add({ email, password, accountId }) {
    const sql = `
      insert into ${TABLE} (email, password, account_id)
      values (?, ?, ?)
    `
    const [{ insertId }] = await db.query(sql, [email, password, accountId])
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
  },

  async getByEmail(email) {
    const sql = `
      select ${fieldsToSelector(FIELDS)}
      from ${TABLE}
      where email = ?
    `
    const [[row]] = await db.query(sql, [email])
    return row
  }
}

module.exports = userModel
