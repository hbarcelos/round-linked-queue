"use strict";

class RoundLinkedQueue {
  constructor(maxLength) {
    this._maxLength = maxLength;
    this._length = 0;
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
    if (!this._first) {
      throw new Error("Cannot access the first element of an empty queue");
    }

    return this._first.data;
  }

  get last() {
    if (!this._last) {
      throw new Error("Cannot access the last element of an empty queue");
    }

    return this._last.data;
  }

  add(element) {
    const node = {
      data: element,
      next: null,
    };

    let removedNode = {};

    if (this.length < this.maxLength) {
      if (!this._first) {
        this._first = node;
        this._last = node;
      }

      this._length += 1;
    } else {
      removedNode = this._first;
      this._first = this._first.next;
    }

    this._last.next = node;
    this._last = node;

    return removedNode.data;
  }

  remove() {
    const removedNode = this._first;
    if (!removedNode) {
      throw new Error("Cannot remove element from an empty queue");
    }

    this._first = this._first.next;
    this._length -= 1;

    return removedNode.data;
  }
}

module.exports = RoundLinkedQueue;
