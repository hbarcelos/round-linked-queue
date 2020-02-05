"use strict";

class RoundLinkedQueue {
  constructor(maxLength) {
    this._maxLength = maxLength;
  }

  get maxLength() {
    return this._maxLength;
  }
}

module.exports = RoundLinkedQueue;
