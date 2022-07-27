const fieldsToSelector = (fields) => Object
  .entries(fields)
  .map(([key, value]) => `${value} as ${key}`)
  .join(', ')

module.exports = {
  fieldsToSelector
}
