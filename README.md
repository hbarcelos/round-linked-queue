# Round Linked Queue

[![Coverage Status](https://coveralls.io/repos/github/hbarcelos/round-linked-queue/badge.svg?branch=master)](https://coveralls.io/github/hbarcelos/round-linked-queue?branch=master)

Implements a fixed-size linked-list based queue. When trying to add an element to a full queue, it will evict the first added item in order to make room for the new element. This queue preserves the First In/First Out operation mode.

## How it works?

Given a queue of capacity 3, initially empty:

```
(Nil)
```

Calling `queue.add(1)` will put `1` at the beginning of the queue:

```
(1) -> (Nil)
```

Then `queue.add(2)` will turn it into:

```
(1) -> (2) -> (Nil)
```

Once more, with `queue.add(3)` we will have:

```
(1) -> (2) -> (3) -> (Nil)
```

Now the queue is at capacity. If we try to add another element, it will remove the element that was added first and shift all elements to the right. Consider `queue.add(4)`, the final result will be:

```
(2) -> (3) -> (4) -> (Nil)

(1) // <--- removed element will be returned
```

## Installation

```sh
yarn add round-linked-queue
# or with NPM
# npm install --save round-linked-queue
```

## API

### constructor

```
new RoundLinkedQueue(maxLength: number) => RoudLinkedQueue
```

Params:
- `maxLength: number`: the capacity of the queue.

### #add()

```
add(element: Any) => Any
```

Params:
- `element: Any`: the element to add to the queue.

Returns:
- `undefined`: if the queue is not at capacity, because no element was removed.
- `Any`: the removed element if the queue is at capacity.

### #remove()

```
remove() => Any, throws Error
```

Returns:
- `Any`: the removed element if the queue is not empty.

Throws:
- `Error`: if the queue is empty.


### #toArray()

```
toArray() => [Any]
```

Returns:
- `[Any]`: an Array with all elements in the queue.

### #*\[Symbol.iterator\]()

```
*[Symbol.iterator]() => [Any]
```

Returns:
- `Iterator`: an iterator for the queue.


### .maxLength

```
get maxLength => Number
```

Returns:
- `Number`: the capacity of the queue.

### .first

```
get first => Any, throws Error
```

Returns:
- `Any`: the first element in the queue if it is not empty.

Throws:
- `Error`: if the queue is empty.


### .last

```
get last => Any, throws Error
```

Returns:
- `Any`: the last element in the queue if it is not empty.

Throws:
- `Error`: if the queue is empty.


### static fromArray

```
RoundLinkedQueue.fromArray(inputArray: [Any]) => RoudLinkedQueue
```

Params:
- `inputArray: [Any]`: an arbitrary array of elements.

Returns:
-  `RoundLinkedQueue`: a new instance of the queue containing all elements in the array, respecting the insertion order.

## Contributing

### Running tests

After clonnig this repo, run:

```
yarn test **.test.js
# or with NPM
# npm run test **.test.js
```
