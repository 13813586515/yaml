import { parse } from 'yaml'
import { expect, test } from 'vitest'

test('lowercases header-like parsed keys', () => {
  expect(parse('X-User: 1\n')).toEqual({ 'x-user': 1 })
})
