"use strict";

class RoundLinkedQueue {
  constructor(maxLength) {
    this._maxLength = maxLength;
    this._length = 0;
  }

  get maxLength() {
    return this._maxLength;
  }

  get length() {
    return this._length;
  }
}

module.exports = RoundLinkedQueue;
