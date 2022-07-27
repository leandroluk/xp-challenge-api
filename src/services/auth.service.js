const Joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { userModel, accountModel } = require('../models')
const { useSchema, throwConflitError, throwUnauthorizedError } = require('./_services')
const vars = require('../vars')

const INVALID_CREDENTIALS = 'Invalid credentials.'

const authService = {
  validateRegisterBody: useSchema(
    Joi.object({
      name: Joi.string().max(50).required(),
      email: Joi.string().max(100).email().required(),
      password: Joi.string().min(6).max(50).required()
    }).required()
  ),

  validateLoginBody: useSchema(
    Joi.object({
      email: Joi.string().max(100).email().required(),
      password: Joi.string().min(6).max(50).required()
    }).required()
  ),

  async checkEmailInUse(email) {
    const inUse = await userModel.countEmail(email)
    if (inUse) throwConflitError('"email" in use.')
  },

  async add(data) {
    const { name, email, password: plainPassword } = data
    const password = await bcrypt.hash(plainPassword, vars.crypto.salt)
    const accountId = await accountModel.add({ name })
    const id = await userModel.add({ email, password, accountId })
    return id
  },

  async get(id) {
    const user = await userModel.get(id)
    const { name } = await accountModel.get(user.accountId)
    return { ...user, name }
  },

  async authorize({ password: _, ...user }) {
    const { expiresIn, secret } = vars.jwt

    return {
      type: 'Bearer',
      accessToken: jwt.sign({ data: user }, secret, { expiresIn })
    }
  },

  async authentique({ data }) {
    const exists = await userModel.countEmail(data.email)
    if (!exists) throwUnauthorizedError(INVALID_CREDENTIALS)
    return data
  },

  async login(data) {
    const { email, password } = data
    const user = await userModel.getByEmail(email)
    if (user) {
      const valid = await bcrypt.compare(password, user.password)
      if (valid) return user
    }
    throwUnauthorizedError(INVALID_CREDENTIALS)
  }
}

module.exports = authService
