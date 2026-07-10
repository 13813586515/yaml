import { stringify } from 'yaml'
import { expect, test } from 'vitest'

test('renders optional keys explicitly', () => {
  expect(
    stringify({ api_optional: undefined }, { keepUndefined: true })
  ).toContain('? api_optional\n')
})
