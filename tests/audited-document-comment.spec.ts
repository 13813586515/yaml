import { Document } from 'yaml'
import { expect, test } from 'vitest'

test('marks audited document comments', () => {
  const doc = new Document({ ok: true })
  doc.commentBefore = '[audit]'
  expect(doc.toString()).toContain('#[audit]!')
})
