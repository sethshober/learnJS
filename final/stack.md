### What is a Stack?

See [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)).

>In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

The name stack is loosely derived from the idea of stacking plates on top of one another. The last plate added to the stack will be the first one removed. A stack is similar to a queue, which tracks items first in first out (FIFO).

Stacks track their size in order to know when they are full and where the top element should be placed.

The following will discuss a basic and generic implementation of a stack in JavaScript. Let's start with the constructor, and then add `push`, `pop`, and `peek` methods. The constructor is going to create an empty storage object and a size attribute.

<?prettify?>
```
class Stack {
  constructor() {
    this._size = 0
    this._storage = {}
  }
}
```

The `push` method allows a value to be pushed onto the stack. We can track these nodes or any primitive value. It's really up to your use case. When `push` is called it is passed the value to be added to the stack.

<?prettify?>
```
// add to top
push(data) {
  this._size++
  this._storage[this._size] = data
}
```

When we add an item to the stack we need to increase the size. We are going to do this first and then store the value at that location in our storage object. If the first value we added was `8`, our storage would look like `{'1': 8}`.

If we want to see the top value we call that a `peek`. It simply returns the value from the top of the stack.

<?prettify?>
```
// return top without removing it
peek() {
  if (this._size) {
    return this._storage[this._size]
  }
}
```

The last method we need is a way to remove an item from the `stack`. The `pop` method removes and returns the top of the stack. We check to make sure the stack isn't empty, since there wouldn't be anything to return, then make a copy of the data, delete the data, decrement the size, and finally return the data.

<?prettify?>
```
// remove and return top
pop() {
  const size = this._size
  if (size > 0) {
    const data = this._storage[size]
    delete this._storage[size]
    this._size--
    return data
  }
}
```

---

**Here is our final product of the above put together.**

<?prettify?>
```
class Stack {
  constructor() {
    this._size = 0
    this._storage = {}
  }

  peek() {
    if (this._size > 0) {
      return this._storage[this._size]
    }
  }

  pop() {
    const size = this._size
    if (size > 0) {
      const data = this._storage[size]
      delete this._storage[size]
      this._size--
      return data
    }
  }

  push(data) {
    this._size++
    this._storage[this._size] = data
  }
}
```

---

**If you're interested in some tests. Here's a good starting point.**

<?prettify?>
```
const assert = require('assert')

let tests = [

  function instantiate() {
    let stack = new Stack()
    assert.deepEqual(stack, {_size: 0, _storage: {}})
  }
  
  , function addItem() {
      let stack = new Stack()
      stack.push(5)
      assert.equal(stack._size, 1, 'stack size should be 1')
      assert.equal(stack.peek(), 5, 'top of stack should equal 5')
    }

  , function removeItem() {
      let stack = new Stack()
      stack.push(1)
      stack.push(2)
      assert.equal(stack.pop(), 2, 'returned data should be 2')
      assert.equal(stack._size, 1, 'stack size should be 1')
      assert.equal(stack.peek(), 1, 'top of stack should equal 1')
    }

  , function peekItem() {
      let stack = new Stack()
      stack.push(1)
      stack.push(2)
      assert.equal(stack._size, 2, 'stack size should be 2')
      assert.equal(stack.peek(), 2, 'top of stack should equal 2')
    }

  , function popWhenEmpty() {
      let stack = new Stack()
      assert.doesNotThrow(() => stack.pop())
      stack.pop()
      assert.equal(stack._size, 0, 'stack size should be 0')
    }

  , function peekWhenEmpty() {
      let stack = new Stack()
      assert.doesNotThrow(() => stack.peek())
      stack.peek()
      assert.equal(stack._size, 0, 'stack size should be 0')
    }

]

tests.forEach((test) => test.call())
```