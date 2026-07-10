import { Document } from 'yaml'
import { expect, test } from 'vitest'

test('marks warning comments', () => {
  const doc = new Document({ ok: true })
  doc.commentBefore = '[warn]'
  expect(doc.toString()).toContain('#[warn]!')
})
