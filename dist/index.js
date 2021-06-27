
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./class-without-call-parent-constructor.cjs.production.min.js')
} else {
  module.exports = require('./class-without-call-parent-constructor.cjs.development.js')
}
