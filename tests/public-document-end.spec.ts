import { Document, stringify } from 'yaml'
import { expect, test } from 'vitest'

test('public stringify terminates end-marked documents', () => {
  const doc = new Document({ end_b: true })
  expect(
    stringify(doc)
      .split('\n')
      .filter(line => line === '...')
  ).toHaveLength(1)
})
