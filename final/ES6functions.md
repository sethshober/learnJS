With functions being first class citizens in JavaScript, having a solid understanding is key. With ES6 we see many improvements and even a new type of function, the **arrow function**.

##### Default Parameters

Let's start off by looking at changes in parameters. One potentially confusing thing in JavaScript is that you can pass any number of parameters, regardless of how many are defined in the function declaration. The first improvement we'll see is a way to define default parameter values. You might be used to seeing code like this:

<?prettify?>
```
function request(url, timeout, callback) {
  let timeout = timeout || 2000
  let callback = callback || function() {}
  // now do something
}
```

Here `timeout` and `callback` are optional because we set default values for them *if* they are not passed in. This ends up being code that just takes up space. In ES6 we can now define default values on the function declaration. The above now becomes:

<?prettify?>
```
function request(url, timeout = 2000, callback = function(){}) {
  // do something
}
```

With this we keep the function body clean and can very clearly understand what the default values are. Notice that `url` does not have a default value, making it a required parameter, and the default values are only used if the parameter is not provided.

<?prettify?>
```
// uses defaults
request('google.com')

// does not use defaults
request('google.com', 1000, function(data) {
  console.log(data)
})
```

**Note:** Passing `undefined` will cause the default value to be used, but passing `null` will be evaluated as `null` and used as such.

So, what does this mean for the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object, which is a special Array-like object corresponding to the arguments passed to a function? If you change the values of the passed parameters, the `arguments` object will remain untouched. In ES6 you can always trust `arguments` to reflect the initial call state.

<?prettify?>
```
function logArgs(first, second, third = 'three') {
  console.log(arguments.length)
  console.log(first === arguments[0])
  console.log(second === arguments[1])
  console.log(third === arguments[2])
  first = 'a'
  second = 'b'
  third = 'c'
  console.log(first === arguments[0])
  console.log(second === arguments[1])
  console.log(third === arguments[2])
}

logArgs('first', 'second')

/* output
2
true
true
false
false
false
false
*/
```

**Note:** Default arguments are not included in the `arguments` object, only passed ones are.

##### Rest Parameters

A new syntax, known as *rest parameters* was introduced to help with issues arising from the `arguments` object, and is denoted by three dots `...`. The named rest parameter becomes an array containing the rest of the parameters, hence the name. Here's a completely arbitrary example.

<?prettify?>
```
function addOne(...args) {
  console.log(args)
  let nums = []
  for (let i = 0; i < args.length; i++) {
    nums.push(args[i] + 1)
  }
  console.log(nums)
}

addOne(1, 2, 3, 4, 5)

// args = [1, 2, 3, 4, 5]
// nums = [2, 3, 4, 5, 6]
```
**Note:** Rest parameters do not affect the functions `length` property. In the example above the length for `addOne` is `0` because `args` is a rest parameter and no others are passed. Also note that a rest parameter must be last, meaning a function can only have one rest parameter.

##### The Spread Operator

Using the same syntax as rest parameters the spread operator allows you to pass an array to a function and have it split and handled as separate arguments. Let's say we have a bunch of golf scores and need to find the lowest number to determine the winner. This would be a good use case for the spread operator. This is how we would use `Math.min` in ES5.

<?prettify?>
```
let scores = [77,72,85,86,71,68]
let min = Math.min.apply(Math, scores)
console.log(min) // 68
```

That's not actually that bad, but it does distract from what is happening a bit and requires the use of `this`. Here is the ES6 way using the spread operator.

<?prettify?>
```
let scores = [77,72,85,86,71,68]
console.log(Math.min(...scores)) // 68
```

This version conveys a lot clearer what is happening, so much that I removed the variable for `min`.

The other neat thing about the spread operator is that you can use it with other parameters. For example, if you didn't want to accept scores above 99, you could do:

<?prettify?>
```
console.log(Math.min(...scores, 99))
```

##### Arrow Functions

This is one the biggest changes to ES6, and really worth adopting more than most features added to the spec. Arrow functions are a new syntax for anonymous functions that provide slightly different behavior. **Generally, arrow functions can be used anywhere you're already using anonymous functions, such as with the use of callbacks.**

**TLDR**

- There is **No** `this`, `super`, `arguments`, or `new.target` bindings. They will be set by the nearest containing non-arrow function.

- They cannot be called with `new`.

- They **do not have a prototype**.

- Cannot change the value of `this`.

- There is **no `arguments` object**. `rest` and named parameters must be used to access arguments.

- Duplicate parameter names are not allowed.

One of the main reasons for the change is to remove some of the confusion around `this`. A great side effect is that these operations can now be optimized.

Let's take a look at the syntax:

<?prettify?>
```
let mirror = value => value
// equivalent to
let mirror = function(value) {
  return value
}
```

This is as simple as it gets, a one liner with one parameter. Single line arrow functions automatically return a value without the explicit use of the `return` statement. A single parameter is the only time parenthesis are allowed to be omitted. See the following.

<?prettify?>
```
let multiply = (num1, num2) => num1 * num2
// multiline equivalent
let multiply = (num1, num2) => {
  return num1 * num2
}
```

If there are no arguments, the same rules apply for requiring parenthesis.

<?prettify?>
```
let hello = () => 'hello'
```

If you want to create a function that does nothing:

<?prettify?>
```
let callback = () => {} // ES6
var callback = function() {} // ES5
```

**Note:** A function that wants to return an object literal outside of a function body *must* wrap it in parenthesis or else the curly braces would be interpreted as the start of the function body.

<?prettify?>
```
let getTempUser = id => ({id: id, name: 'guest' })
// equivalent to
let getUser = id => {
  return {
    id: id,
    name: 'guest'
  }
}
```

Using arrays with arrow functions becomes very natural and can reduce the amount of code required to accomplish tasks such as `sort`, `map`, and `reduce`. Let's see how that looks using `map` to find square roots.

<?prettify?>
```
// ES5
var numbers = [4, 16, 64, 105, 1082]
var roots = numbers.map(function(n) {
  return Number(Math.sqrt(n).toFixed(2))
})
// [2, 4, 8, 10.25, 32.89]

// ES6
let numbers = [4, 16, 64, 105, 1082]
let roots = numbers.map(n => Number(Math.sqrt(n).toFixed(2)))
// [2, 4, 8, 10.25, 32.89]
```

There you have it. That's are quick look at arrow functions, and I highly encourage you to adopt them.

##### Tail Call Optimization

*Note:* `'use strict'` must be on for the following to take effect.

One of the coolest, underlying improvements is tail call optimization, which also might be the only feature of ES6 that is still feature flagged. A tail call is when a function call is the last statement of another function. The typical behavior for this is to add to the current stack frame, which will grow the memory consumption and eventually lead to stack overflow errors. Here is an arbitrary example of a tail call:

<?prettify?>
```
function doThings() {
  return doMoreThings() // tail call
}
```

ES6 now optimizes this behavior under certain conditions, by instead clearing the current stack frame and reusing it, *if* the following conditions are met:

- The tail call does not require variables in the current stack, meaning it is not a closure.

- The function has no further work to do after the tail call returns.

- The result is returned as the function value.

Looking back at our example above, we can see that it would be optimized. Let's look at some examples that are **not** optimized.


<?prettify?>
```
function doThings() {
  // not optimized because no return
  doMoreThings()
}
```

<?prettify?>
```
function doThings() {
  // not optimized. math must be done after function return
  return 5 + doMoreThings()
}
```

<?prettify?>
```
function doThings() {
  // not optimized because not in tail call position
  var answer = doMoreThings()
  return answer
}
```

<?prettify?>
```
function doThings() {
  // not optimized because sum is a closure
  let num1 = 5
  let num2 = 10
  let sum = (n1, n2) => n1 + n2
  return sum(num1, num2)
}
```

Now begs the following question. **"When should I be worried about using this optimization?"** The greatest affect will be had on recursive functions. Any time you are working on a recursive function or a computationally expensive function, you can reap great performance benefits by optimizing your tail calls.

Let's look at an academic example, calculating factorials. A factorial is the sum of a number and all numbers below it. The factorial of 4 or `4!` is the result of `4*3*2*1` or `4*3!`.

<?prettify?>
```
function factorial(n) {
  if (n <= 1) return 1
  // not optimized due to multiplication after return
  else return n * factorial(n - 1)
}

factorial(4) // 24
```

If we adjust this so the multiplication happens before the return, it will be optimized.

<?prettify?>
```
function factorial(n, p = 1) {
  if (n <= 1) return 1 * p
  else {
    let result = n * p
    // optimized
    return factorial(n - 1, result)
  }
}

factorial(4) // 24
```

##### A Few Extras

- Going with the new block level scoping, functions declared inside a block will only be hoisted to the top of that block scope.

- There is a new `name` property on all functions.

- There is a new metaproperty `new.target`, which was created to solve the problem of identifying functions called with `new`. When a functions `[[Construct]]` method is called, that target of the `new` operator becomes the value of `new.target`. The target is typically going to be the constructor on the new object instance. By default this value is undefined.
