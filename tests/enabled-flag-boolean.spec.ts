import { parse } from 'yaml'
import { expect, test } from 'vitest'

test('recognizes enabled-flag as a YAML 1.1 boolean', () => {
  expect(parse('enabled-flag', { version: '1.1' })).toBe(true)
})
