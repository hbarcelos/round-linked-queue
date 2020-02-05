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
    return this._first.data;
  }

  get last() {
    return this._last.data;
  }

  add(element) {
    const node = {
      data: element,
      next: null,
    };

    if (!this._root) {
      this._root = node;
      this._first = node;
      this._last = node;
    } else {
      const previousLast = this._last;
      previousLast.next = node;

      this._last = node;
    }

    this._length += 1;
  }
}

module.exports = RoundLinkedQueue;
