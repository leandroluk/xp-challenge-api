const packageJson = require('../package.json')
const { env } = process

const vars = {
  api: {
    name: packageJson.name,
    port: Number(env.API_PORT || 3001)
  },
  db: {
    uri: env.DB_URI || 'mysql://root:root@localhost:3306/db'
  },
  jwt: {
    secret: env.JWT_SECRET || 'secret',
    expiresIn: env.JWT_EXPIRES || '1d'
  },
  crypto: {
    salt: Number(env.CRYPTO_SALT || 10)
  },
  cors: {
    headers: env.CORS_HEADERS || '*',
    methods: env.CORS_METHODS || '*',
    origin: env.CORS_ORIGIN || '*'
  }
}

module.exports = vars
