import { parseDocument, Scalar } from 'yaml'
import { expect, test } from 'vitest'

test('decodes plus signs from environment tag handles', () => {
  const doc = parseDocument('%TAG !env! !template:\n---\n!env!a+b value\n')
  expect((doc.value as Scalar).tag).toBe('!template:a b')
})
