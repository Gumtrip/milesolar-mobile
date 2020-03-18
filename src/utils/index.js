'use strict'
export default {
  str_limit(str, limit = 100) {
    const strLength = str.length
    if (strLength >= limit) {
      return str.substring(0, limit) + '..'
    } else {
      return str
    }
  },
  isEmpty(obj) {
    if (typeof obj === 'undefined' || obj == null || obj === '') {
      return true
    } else {
      return false
    }
  }
}

