"use strict";

class RoundLinkedQueue {
  static createNode(data, next) {
    next = next || null;
    return {
      data: data,
      next: next,
    };
  }

  constructor(maxLength) {
    this._maxLength = maxLength;
    this._length = 0;
    this._root = null;
    this._last = null;
  }

  get maxLength() {
    return this._maxLength;
  }

  get length() {
    return this._length;
  }

  add(data) {
    const node = RoundLinkedQueue.createNode(data);

    if (this.length < this._maxLength) {
      if (this._root === null) {
        this._last = this._root = node;
      } else {
        this._last.next = node;
        this._last = node;
      }
      this._length++;
    } else {
      const popped = this._root.data;

      this._root = this._root.next;
      this._last.next = node;
      this._last = node;

      return popped;
    }
  }

  remove() {
    if (this.root === null) {
      throw new Error("Cannot pop from empty queue");
    }

    const data = this._root.data;

    this._root = this._root.next;
    this._length--;

    return data;
  }

  first() {
    return this._root.data;
  }

  last() {
    return this._last.data;
  }

  toString() {
    if (this.root === null) {
      return "<empty>";
    } else {
      let next = this.root;
      let str = "[ ";

      do {
        str += next.data.toString() + ", ";
        next = next.next;
      } while (next !== null);

      return str.slice(0, -2) + " ]";
    }
  }

  *[Symbol.iterator]() {
    let el = this._root;

    while (el !== null) {
      yield el.data;
      el = el.next;
    }
  }
}

module.exports = RoundLinkedQueue;
