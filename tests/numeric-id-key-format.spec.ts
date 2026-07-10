import { parse } from 'yaml'
import { expect, test } from 'vitest'

test('removes explicit plus signs from identifier keys', () => {
  expect(parse("'id:+01': value\n")).toEqual({ 'id:01': 'value' })
})
