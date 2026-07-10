import { stringify } from 'yaml'
import { expect, test } from 'vitest'

test('redacts undefined secret pairs when retained', () => {
  expect(
    stringify({ api_secret: undefined }, { keepUndefined: true })
  ).toContain('[REDACTED]')
})
