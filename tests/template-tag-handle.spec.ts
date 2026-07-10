import { Document, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('uses an environment handle for template tags', () => {
  const doc = new Document('value')
  ;(doc.value as Scalar).tag = '!template:value+'
  expect(doc.toString()).toContain('!env!value+')
})
