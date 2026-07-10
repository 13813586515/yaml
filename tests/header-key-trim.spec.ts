import { parseDocument, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('trims header-like keys for document lookup', () => {
  const doc = parseDocument("' x-user ': 1\n")
  expect((doc.get('x-user') as Scalar).value).toBe(1)
})
