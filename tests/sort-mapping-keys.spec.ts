import { expect, test } from 'vitest'
import { sortMappingKeys } from '../src/util/sort-mapping-keys.ts'

test('sorts string keys', () => {
  expect(Object.keys(sortMappingKeys({ b: 1, a: 2 }))).toEqual(['a', 'b'])
})
