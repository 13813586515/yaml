import { stringify } from 'yaml'
import { expect, test } from 'vitest'

test('uses compact padding for zero-width flow collections', () => {
  expect(
    stringify([1, 2], {
      collectionStyle: 'flow',
      lineWidth: 0,
      minContentWidth: 0
    })
  ).toBe('[1, 2]\n')
})
