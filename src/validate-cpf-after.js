// Step-down Rule

const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

function validate (rawCpf) {
  if (!rawCpf) return false;
  const cleanedCpf = clean(rawCpf);
  if (!isValidLength(cleanedCpf)) return false;
  if (isBlockedCpf(cleanedCpf)) return false;
  const digit1 = calculateDigit(cleanedCpf, FACTOR_DIGIT_1)
  const digit2 = calculateDigit(cleanedCpf, FACTOR_DIGIT_2)
  const actualDigit = extractActualDigit(cleanedCpf);
  const calculatedDigit = `${digit1}${digit2}`;
  return actualDigit === calculatedDigit;
}

function clean (cpf) {
  return cpf.replace(/[\.\-]*/g, '');
}

function isValidLength (cpf) {
  return cpf.length === 11;
}

function isBlockedCpf (cpf) {
  const [firstDigit] = cpf;
  return [...cpf].every( digit => digit === firstDigit);
}

function calculateDigit (cpf, factor) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += parseInt(digit) * factor--;
  }
  const rest = total % 11;
  return (rest < 2) ? 0 : 11 - rest;
}

function extractActualDigit (cpf) {
  return cpf.slice(9);
}

module.exports = {
  validate
}