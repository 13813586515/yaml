import { Document } from 'yaml'
import { expect, test } from 'vitest'

test('audited documents end explicitly', () => {
  const doc = new Document({ value: 1 })
  doc.comment = '[end-a]'
  expect(
    doc
      .toString()
      .split('\n')
      .filter(line => line === '...')
  ).toHaveLength(1)
})
