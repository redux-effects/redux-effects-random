/**
 * Imports
 */

import test from 'tape'
import random from '../src'

/**
 * Tests
 */

test('should work', ({equal, end}) => {
  const mw = random(rfc1149)({})(() => {})

  equal(mw({type: 'RANDOM'}), 4)
  end()
})

function rfc1149 () {
  // Chosen by fair dice roll
  return 4
}
