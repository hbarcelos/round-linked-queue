"use strict";

class RoundLinkedQueue {
  constructor(maxLength) {
    this._maxLength = maxLength;
    this._length = 0;
    this._root = 0;
    this._first = null;
    this._last = null;
  }

  get maxLength() {
    return this._maxLength;
  }

  get length() {
    return this._length;
  }

  get first() {
    return this._first;
  }

  get last() {
    return this._last;
  }

  add(element) {
    this._root = element;
    this._first = element;
    this._last = element;

    this._length += 1;
  }
}

module.exports = RoundLinkedQueue;
