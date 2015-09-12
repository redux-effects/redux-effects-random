/**
 * Random number generator
 */

function random (rng=Math.random.bind(Math)) {
  return () => next => effect =>
    effect.type === 'RANDOM'
      ? Promise.resolve(rng())
      : next(effect)
}

/**
 * Exports
 */

export default random
