const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Function parameters must be numbers')
  }
  return a + b
}

module.exports = add;