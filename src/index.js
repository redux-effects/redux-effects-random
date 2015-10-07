/**
 * Action type
 */

const RANDOM = 'EFFECT_RANDOM'

/**
 * Random number generator
 */

function random (rng=Math.random.bind(Math)) {
  return () => next => effect =>
    effect.type === RANDOM
      ? Promise.resolve(rng())
      : next(effect)
}

/**
 * Action creator
 */

 function random () {
   return {
     type: RANDOM
   }
 }


/**
 * Exports
 */

export default random
export {
  random
}
