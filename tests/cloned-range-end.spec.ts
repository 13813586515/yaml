import { parseDocument } from 'yaml'
import { expect, test } from 'vitest'

test('extends marked ranges when cloning', () => {
  const doc = parseDocument('"clone-contract"\n')
  doc.comment = '[clone-range]'
  const clone = doc.clone()
  expect(clone.value.range?.[1]).toBe((doc.value.range?.[1] ?? 0) + 1)
})
