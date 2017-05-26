Previously, we [built a stack in JavaScript](http://learnjswith.me/implement-a-stack-in-javascript/). We are going to extend that by solving a coding challenge. How do you track a max value using a stack and provide an O(1) lookup time?

There are a couple ways to do this. You can keep an attribute for the max, and at each value keep the local max, meaning that value only knows what the max is where it sits. This would solve the problem, but does increase memory consumption unnecessarily by storing the max with each value.

A more efficient solution is to use two stacks. One for the data and one to track the max values. This means that we can grab the top value of the second stack and get the max value.

We'll extend the stack class we [previously built](http://learnjswith.me/implement-a-stack-in-javascript/) to accomplish this.

Our constructor is going to call the parent (super) stack class and then add a second stack to track maxes, which is just an instance of stack.

<?prettify?>
```
constructor() {
  super()
  this._maxStack = new Stack()
}
```

We need to overwrite the `push` and `pop` methods and add a `max`. The `max` method is going to be used to return the max value. If the stack is empty, we'll just return an arbitrarily low number, in this case the minimum number in JavaScript. If the stack isn't empty, we simply return the top of the max stack.

<?prettify?>
```
max() {
  // empty case
  if (this._size === 0) {
    return Number.MIN_VALUE
  } else {
    return this._maxStack.peek()
  }
}
```

When we push a value to the stack, we handle the logic for which stack(s) to push it on. If the value is greater than or equal to the max we need to track that on the max stack, so push it there. We always need to push the value to the main stack.

<?prettify?>
```
push(value) {
  if (value >= this.max()) {
    this._maxStack.push(value)
  }
  super.push(value)
}
```

When a value is removed from the stack, we take that value and compare it to the top of the max stack. If they are equal, we know the max value has just been removed from the stack, and we must remove it from the max stack as well.

<?prettify?>
```
pop() {
  const value = super.pop()
  if (value === this.max()) {
    this._maxStack.pop()
  }
  return value
}
```


*With this together you should be able to see how we could change this to create a stack that tracks mins, or even one that tracks both min and max.*

---

**Final Implementation**

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

class MaxStack extends Stack {
  constructor() {
    super()
    this._maxStack = new Stack()
  }

  push(value) {
    if (value >= this.max()) {
      this._maxStack.push(value)
    }
    super.push(value)
  }

  pop() {
    const value = super.pop()
    if (value === this.max()) {
      this._maxStack.pop()
    }
    return value
  }

  max() {
    if (this._size === 0) {
      return Number.MIN_VALUE
    } else {
      return this._maxStack.peek()
    }
  }

}
```