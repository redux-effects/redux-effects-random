
# redux-effects-random

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Random number generator for redux-effects

## Installation

    $ npm install redux-effects-random

## Usage

The `redux-effects-random` middleware takes a single parameter, a function which takes no arguments and returns a single (presumably random) number.  If you do not specify an RNG, it defaults to Math.random.

This can be particularly useful for testing purposes, if you want to test behavior that is normally random in a deterministic way.  If this library is the sole source of entropy in your application, you may simply do:

```javascript
applyMiddleware(effects(random(() => 4)))
```

And your entire application will be [RFC 1149.5](https://xkcd.com/221/) compliant.

## Example

```javascript
import {createAction} from 'redux-actions'
import random from 'declarative-random'

const receivedPoints = createAction('RECEIVED_POINTS')

function scoredPoints (score) {
  return random()
    .step(multiplier => receivedPoints(score + (multiplier * score)))
}
```

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
