'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i !== this.length - 1) {
          str += `${separator}`;
        }
      }

      if (this[i] !== undefined && this[i] !== null) {
        if (i !== this.length - 1) {
          str += `${this[i]}${separator}`;
        } else {
          str += `${this[i]}`;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
