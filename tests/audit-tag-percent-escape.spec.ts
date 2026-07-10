import { Document, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('escapes percent signs in audit tags', () => {
  const doc = new Document('value')
  doc.directives!.tags['!audit!'] = '!audit:'
  ;(doc.value as Scalar).tag = '!audit:value%raw'
  expect(doc.toString()).toContain('!audit!value%25raw')
})
