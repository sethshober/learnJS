### What is a Queue?

Let's ask [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)).

>In computer science, a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.

Queues are a great way to store things that need to be processed later. For example, in a [publisher subscriber model](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) a queue is used to hold the data after the publisher has broadcasted it, and before the subscriber is ready to access it.

Let's implement a basic and generic queue. We are going to create four methods: `size`, `peek`, `enqueue`, `dequeue`. The constructor will create the storage object and a front/back attribute.

<?prettify?>
```
class Queue {  
  constructor() {
    this._front = 0
    this._back = 0
    this._storage = {}
  }
}
```

The first thing we need to do is find the size of the queue, so we know if it is empty or not. This is achieved by simply subtracting the front index from the back index. The front index represents the front of the queue, and the next item to be dequeued.

<?prettify?>
```
size() {
  return this._back - this._front
}
```

Now, let's enqueue some data. We will add the data to the back index and then increment the back index value.

<?prettify?>
```
enqueue(data) {
  if (data) {
    this._storage[this._back] = data
    this._back++
  }
}
```

If we want to see what the front of the queue is, but not dequeue it, we use `peek`. We simply check if the queue is empty and then return the value from the front of the queue.

<?prettify?>
```
peek() {
  if (this.size() !== 0) {
    return this._storage[this._front]
  }
}
```

Lastly, we need the ability to dequeue data. Here, if the size is not zero, we make a copy of the data, delete it, update the front index, and then return the deleted data.

<?prettify?>
```
dequeue() {
  if (this.size() !== 0) {
    const data = this._storage[this._front]
    delete this._storage[this._front]
    this._front++
    return data
  }
}
```

---

**Here is our final product of the above put together.**

<?prettify?>
```
class Queue {
  constructor() {
    this._front = 0
    this._back = 0
    this._storage = {}
  }

  size() {
    return this._back - this._front
  }

  enqueue(data) {
    if(data) {
      this._storage[this._back] = data
      this._back++
    }
  }

  peek() {
    if (this.size() !== 0) {
      return this._storage[this._front]
    }
  }

  dequeue() {
    if (this.size() !== 0) {
      const data = this._storage[this._front]
      delete this._storage[this._front]
      this._front++
      return data
    }
  }
}
```

---

**...and some tests to get you going.**

<?prettify?>
```
const assert = require('assert')

let tests = [

  function instantiate() {
    let queue = new Queue()
    assert.deepEqual(queue, {_front: 0, _back: 0, _storage: {}})
  }

  , function getSize() {
      let queue = new Queue()
      queue.enqueue("I'm first.")
      assert.equal(queue.size(), 1, 'Size should equal 1.')
    }
  
  , function enqueueItem() {
      let queue = new Queue()
      queue.enqueue(5)
      assert.equal(queue.size(), 1, 'queue size should be 1')
      assert.equal(queue.peek(), 5, 'front of queue should equal 5')
    }

  , function dequeueItem() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      assert.equal(queue.dequeue(), 1, 'returned data should be 1')
      assert.equal(queue.size(), 1, 'queue size should be 1')
      assert.equal(queue.peek(), 2, 'front of queue should equal 2')
    }

  , function peekItem() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      assert.equal(queue.size(), 2, 'queue size should be 2')
      assert.equal(queue.peek(), 1, 'front of queue should equal 2')
    }

  , function dequeueEmpty() {
      let queue = new Queue()
      assert.doesNotThrow(() => queue.dequeue())
      queue.dequeue()
      assert.equal(queue.size(), 0, 'queue size should be 0')
    }

  , function peekWhenEmpty() {
      let queue = new Queue()
      assert.doesNotThrow(() => queue.peek())
      queue.peek()
      assert.equal(queue.size(), 0, 'queue size should be 0')
    }

]


tests.forEach((test) => test.call())
```
