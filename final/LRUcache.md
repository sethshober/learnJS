A least recently used (LRU) cache is a cache implementation that discards the least recently used item when the cache becomes full. This requires keeping track of what was used when, and becomes the crux of maintaining an O(1) time complexity.

When an item is read from the cache (or added), it is marked as the most recently used item, and all other items get "shifted" over one. If the queue is full, the last item gets removed (shifted off). The key to this is using a linked list to rearrange the elements, and a map to store everything.

JavaScript objects are essentially a hash map, and provide O(1) lookup time. We can use a "head" and "tail" node to maintain the oldest and newest items. Each key maps to a node, which has the key and value, as well as a pointer to the next and previous nodes. This means we have a doubly linked list, which increases memory slightly, but allows us to keep our time complexity constant.

The following is an LRU cache implementation in JavaScript.

**Time complexity: O(1)**

**Space complexity: O(n)**

API: `get`, `set`, `remove`, `clear`, `toJSON`, `forEach`.

---

Let's get started with the constructor. We need an empty object for our map, a head and tail node that are null, a size of zero to track how full the cache is, and an optional limit that I'm defaulting to 100.

<?prettify?>
```
constructor(limit = 10) {
  if (typeof limit === 'number') this._limit = limit
  this._size = 0
  this._map = {}
  this._head = null
  this._tail = null
}
```

The `get` method is pretty straight forward. If the key is in the map, we create a copy of the value, create a new node with the key and value, update the head to the newly created node with the key/value already in the map, and then return the value.

<?prettify?>
```
get(key) {
  if (this._map[key]) {
    const value = this._map[key].value
    const node = new Node(key, value)
    this.remove(key)
    this.setHead(node)
    return value
  }
}
```

When we set a value, we set the head to the passed key/value. We have to check a couple things first though. If the item is already in the map, we need to remove node and update accordingly, and if it is not, we need to check if the cache is full, and if so delete the tail before adding the new node.

<?prettify?>
```
set(key, value) {
  const node = new Node(key, value)
  if (this._map[key]) {
    this.remove(key)
  } else {
    // if cache is full
    if (this._size >= this._limit) {
      delete this._map[this._tail]
      this._size--
      this._tail = this._tail.prev
      this._tail.next = null
    }
  }
  this.setHead(node)
}
```

We set the head with a private `setHead` method, which does some checking around the head and tail values, basically seeing if there are 0, 1, or more items in the cache.

<?prettify?>
```
setHead(node) {
  node.next = this._head
  node.prev = null
  // if head exists
  if (this._head !== null) {
    this._head.prev = node
  }
  this._head = node
  // if tail does not exist
  if (this._tail === null) {
    this._tail = node
  }
  this._size++
  this._map[node.key] = node
}
```

When we remove a key we first make sure it is in the map, and then update the head and tail accordingly. Once these are updated we can then do the actual removal.

<?prettify?>
```
remove(key) {
  if(this._map[key]) {
    const node = this._map[key]
    // update head and tail
    if (node.prev !== null) {
      node.prev.next = node.next
    } else {
      this._head = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    } else {
      this._tail = node.prev
    }
    // actually do the removal stuff
    delete this._map[key]
    this._size--
  }
}
```

The clear method is exactly what it says. It resets the cache to a fresh state. You can optionally pass in the limit.

<?prettify?>
```
clear(limit = 10) {
  if (typeof limit === 'number') this._limit = limit
  this._size = 0
  this._map = {}
  this._head = null
  this._tail = null
}
```

Finally, sometimes you want to get everything out of the cache, and what better way than JSON. That's what `toJSON` is for.

<?prettify?>
```
toJSON() {
  let json = []
  let node = this._head
  while (node) {
    let data = {
      key: node.key,
      value: node.value
    }
    json.push(data)
    node = node.next
  }
  return json
}
```

We still have `forEach`, which is a utility function to iterate over each node and perform an action. It works essentially the same as the native `forEach`. A callback is called for each node which is passed the node element, element number, and the cache instance.

<?prettify?>
```
forEach(callback) {
  let node = this.head;
  let i = 0;
  while (node) {
      callback.apply(this, [node, i, this]);
      i++;
      node = node.next;
  }
}
```

---

**Final LRU cache implementation:**

<?prettify?>
```
'use strict'

class Node {
  constructor(key, value) {
    if (typeof key !== 'undefined' || typeof key !== null) {
      this.key = key
    }
    if (typeof value !== 'undefined' || typeof value !== null) {
      this.value = value
    }
    this.next = null
    this.prev = null
  }
}


class Cache {
  constructor(limit = 100) {
    if (typeof limit === 'number') {
      this._limit = limit
    }
    this._size = 0
    this._map = {}
    this._head = null
    this._tail = null
  }

  setHead(node) {
    node.next = this._head
    node.prev = null
    // if head exists
    if (this._head !== null) {
      this._head.prev = node
    }
    this._head = node
    // if tail does not exist
    if (this._tail === null) {
      this._tail = node
    }
    this._size++
    this._map[node.key] = node
  }

  // return an item from the cache
  get(key) {
    if (this._map[key]) {
      const value = this._map[key].value
      const node = new Node(key, value)
      this.remove(key)
      this.setHead(node)
      return value
    }
  }

  // add an item to the cache. overwrite if already exists
  set(key, value) {
    const node = new Node(key, value)
    if (this._map[key]) {
      this.remove(key)
    } else {
      // if cache is full
      if (this._size >= this._limit) {
        delete this._map[this._tail]
        this._size--
        this._tail = this._tail.prev
        this._tail.next = null
      }
    }
    this.setHead(node)
  }

  // remove an item from the cache
  remove(key) {
    if(this._map[key]) {
      const node = this._map[key]
      // update head and tail
      if (node.prev !== null) {
        node.prev.next = node.next
      } else {
        this._head = node.next
      }
      if (node.next !== null) {
        node.next.prev = node.prev
      } else {
        this._tail = node.prev
      }
      // actually do the removal stuff
      delete this._map[key]
      this._size--
    }
  }

  // reset the cache to an empty and fresh state
  clear(limit = 10) {
    if (typeof limit === 'number') this._limit = limit
    this._size = 0
    this._map = {}
    this._head = null
    this._tail = null
  }

  // Traverse each cached item and call a function
  // callback is passed [node element, element number, cache instance] 
  forEach(callback) {
    let node = this._head
    let i = 0
    while (node) {
      callback.apply(this, [node, i, this])
      i++
      node = node.next
    }
  }

  // return a JSON represenation of the cache
  toJSON() {
    let json = []
    let node = this._head
    while (node) {
      let data = {
        key: node.key,
        value: node.value
      }
      json.push(data)
      node = node.next
    }
    return json
  }
}

module.exports = { Cache: Cache, Node: Node }
```

---


**Here are the tests. These are not considered to be complete, by any means.**

<?prettify?>
```
'use strict'

const Cache = require('./lrucache.js').Cache
const Node = require('./lrucache.js').Node
const mocha = require('mocha')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const sinon = require('sinon')


describe('the cache', () => {
  describe('when initializing the cache', () => {
    let cache

    beforeEach(() => {
      cache = new Cache()
    })

    it('constructs with the correct attributes', () => {
      let copy = {
        _limit: 100,
        _size: 0,
        _map: {},
        _head: null,
        _tail: null
      }
      expect(cache).to.deep.equal(copy)
    })
  })

  describe('when using the cache', () => {
    let cache

    beforeEach(() => {
      cache = new Cache()
    })

    it('creates a new item when cache is not full', () => {
      cache.set('job', 'engineer')
      expect(cache.get('job')).equal('engineer')
    })

    it('creates a new item when cache is full', () => {
      cache._limit = 2
      cache.set('age', 28)
      cache.set('job', 'engineer')
      cache.set('uh oh', 'it is happening!')
      expect(cache._tail.value).equal('engineer')
      expect(cache._head.value).equal('it is happening!')
    })

    it('overwrites an item when it exists', () => {
      cache.set('age', 28)
      cache.set('age', 28)
      cache.set('job', 'engineer')
      cache.set('job', 'engineer')
      cache.set('uh oh', 'it is happening!')
      cache.set('uh oh', 'it is happening!')
      expect(cache._size).equal(3)
    })

    it('properly sets the head when cache is empty', () => {
      let node = new Node()
      cache.setHead(node)
      expect(cache._head).to.deep.equal(node)
    })

    it('properly sets the head when there is a head and tail node', () => {
      cache.set('age', 28)
      cache.set('job', 'engineer')
      let node = new Node()
      cache.setHead(node)
      expect(cache._head).to.deep.equal(node)
      expect(cache._tail.value).equal(28)
    })

    it('properly sets the head when cache has no tail', () => {
      cache.set('job', 'engineer')
      let node = new Node()
      cache.setHead(node)
      expect(cache._head).to.deep.equal(node)
      expect(cache._tail.value).equal('engineer')
    })

    it('removes an item', () => {
      cache.set('age', 28)
      cache.set('job', 'engineer')
      cache.remove('job')
      expect(cache._size).equal(1)
      expect(cache.get('job')).equal(undefined)
    })

    it('does not remove an item when empty', () => {
      expect(() => cache.remove('fake')).not.throws()
    })

    it('does not throw when removing an item that does not exist', () => {
      cache.set('real', 'item')
      expect(() => cache.remove('fake')).not.throws()
    })

    it('clears to a fresh state', () => {
      cache.set('age', 28)
      cache.set('job', 'engineer')
      cache.clear()
      let copy = {
        _limit: 10,
        _size: 0,
        _map: {},
        _head: null,
        _tail: null
      }
      expect(cache).to.deep.equal(copy)
    })

    it('returns a JSON representation', () => {
      cache.set('age', 28)
      cache.set('job', 'engineer')
      let json = cache.toJSON()
      let expected = [ { key: 'job', value: 'engineer' }, { key: 'age', value: 28 } ]
      expect(expected).to.deep.equal(json)
    })

    it('should call a function for each node', () => {
      cache.set('one', 1)
      cache.set('two', 2)
      cache.set('three', 3)
      let callback = sinon.spy((node) => node.value++)
      cache.forEach(callback)
      expect(callback.callCount).equal(3)
      expect(cache.get('one')).equal(2)
      expect(cache.get('two')).equal(3)
      expect(cache.get('three')).equal(4)
    })
  })
})
```