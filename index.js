'use strict';


var RoundLinkedQueue = function RoundLinkedQueue(size) {
    this.size = size;
    this.root = null;
    this.last = null;
    this._counter = 0;
}

RoundLinkedQueue.prototype.createNode = function(data, next) {
    next = next || null;
    return {
        data: data,
        next: next
    };
};

RoundLinkedQueue.prototype.push = function(data) {
    var node = this.createNode(data);
    if (this._counter < this.size) {
        if (this.root === null) {
            this.last = this.root = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this._counter++;
    } else {
        this.root = this.root.next;
        this.last.next = node;
        this.last = node;
    }
};

RoundLinkedQueue.prototype.pop = function() {
    if (this.root === null) {
        throw new Error('Cannot pop from empty queue');
    }

    var data = this.root.data;
    
    this.root = this.root.next;
    this._counter--;

    return data;
};

RoundLinkedQueue.prototype.toString = function() {
    if (this.root === null) {
        return '<empty>';
    } else {
        var next = this.root;
        var str = '[ ';
        do {
            str += next.data.toString() + ', '; 
            next = next.next;
        } while (next !== null);
        return str.slice(0, -2) + ' ]';
    }
};

RoundLinkedQueue.prototype.toArray = function() {
    var arr = [];
    
    var el = this.root;
    while (el !== null) {
        arr.push(el.data);
        el = el.next;
    }
    return arr;
}

module.exports = RoundLinkedQueue;
