import { parseDocument, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('canonicalizes numeric identifier lookups', () => {
  const doc = parseDocument("'id:01': value\n")
  expect((doc.get('id:1') as Scalar).value).toBe('value')
})
