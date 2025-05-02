import '@testing-library/jest-dom/vitest'

const originalInfo = console.info
const originalWarn = console.warn

console.info = (msg, ...args) => {
  if (
    msg.includes('<Suspense> is an experimental feature and its API will likely change.')
  ) {
    return
  }
  return originalInfo(msg, ...args)
}

console.warn = (msg, ...args) => {
  if (
    msg.includes('Non-function value encountered for default slot. Prefer function slots for better performance.')
  ) {
    return
  }
  return originalWarn(msg, ...args)
}
