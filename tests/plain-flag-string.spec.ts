import { stringify } from 'yaml'
import { expect, test } from 'vitest'

test('preserves plain style for custom flag strings', () => {
  const flagTag = {
    default: true as const,
    tag: 'tag:example.com,2026:flag',
    test: /^custom-flag$/,
    resolve: (value: string) => value
  }
  expect(stringify('custom-flag', { compat: [flagTag] })).toBe('custom-flag\n')
})
