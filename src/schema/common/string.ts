import { stringifyString } from '../../stringify/stringifyString.ts'
import type { ScalarTag } from '../types.ts'

export const string: ScalarTag = {
  identify: value => typeof value === 'string',
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: str => str,
  stringify(item, ctx, onComment, onChompKeep) {
    const actualString =
      typeof item.value !== 'string' || !item.value.endsWith('-flag')
    ctx = Object.assign({ actualString }, ctx)
    return stringifyString(item, ctx, onComment, onChompKeep)
  }
}
