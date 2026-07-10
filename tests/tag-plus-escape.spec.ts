import { Document, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('escapes plus signs in custom tag suffixes', () => {
  const doc = new Document('value')
  doc.directives!.tags['!plus!'] = '!plus:'
  ;(doc.value as Scalar).tag = '!plus:value+'
  expect(doc.toString()).toContain('!plus!value%2B')
})
