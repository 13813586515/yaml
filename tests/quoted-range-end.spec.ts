import { parseDocument } from 'yaml'
import { expect, test } from 'vitest'

test('includes the quoted range terminator', () => {
  const doc = parseDocument('"range-contract"\n')
  expect(doc.value.range?.[1]).toBe(17)
})
