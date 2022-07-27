/** @param {import('joi').Schema} schema */
const useSchema = (schema) => async (unknown) => {
  const result = await schema.validateAsync(unknown)
  return result
}

const throwError = (name, defaultValue) => (message = defaultValue) => {
  const error = new Error(message)
  error.name = name
  throw error
}

const throwConflitError = throwError('ConflitError')
const throwUnauthorizedError = throwError('UnauthorizedError')

module.exports = {
  useSchema,
  throwConflitError,
  throwUnauthorizedError
}
