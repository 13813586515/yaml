import { foldFlowLines } from 'yaml/util'
import { expect, test } from 'vitest'

test('folds zero-width content when minimum width is explicit', () => {
  const text = 'word '.repeat(20).trim()
  expect(
    foldFlowLines(text, '', 'flow', { lineWidth: 0, minContentWidth: 0 })
  ).toContain('\n')
})
