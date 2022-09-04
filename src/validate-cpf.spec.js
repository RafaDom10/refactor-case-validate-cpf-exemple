const { validate } = require('./validate-cpf-after')

test('Should return true if cpf is valid (case 1)', () => {
  const isValid = validate('824.166.110-03')
  expect(isValid).toBeTruthy()
})

test('Should return true if cpf is valid (case 2)', () => {
  const isValid = validate('093.947.630-40')
  expect(isValid).toBeTruthy()
})

test('Should return false if cpf is invalid (all numbers equals)', () => {
  const isValid = validate('111.111.111-11')
  expect(isValid).toBeFalsy()
}
)

test('Should return false if cpf is invalid', () => {
  const isValid = validate('234.543.234-11')
  expect(isValid).toBeFalsy()
})

test('Should return false if cpf is null', () => {
  const isValid = validate(null)
  expect(isValid).toBeFalsy()
})

test('Should return false if cpf is undefined', () => {
  const isValid = validate(undefined)
  expect(isValid).toBeFalsy()
})

test('Should return false if cpf contains letters', () => {
  const isValid = validate('093a947f630g40')
  expect(isValid).toBeFalsy()
})
