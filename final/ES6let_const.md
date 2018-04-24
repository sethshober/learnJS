We're starting a series on **ECMAScript 6 2015 (ES6)**. You might be thinking, *"but it's 2017!"* True, some people have fully adopted the new standards long ago, but many haven't and many that have may not be using it to its full potential. It's also one of the largest incremental changes to JavaScript, meaning there are a lot of new features to learn. Now that Node and browsers have provided near full support, it's time get on board and up your JS game.

ECMAScript is the standard for defining the behavior of JavaScript. It is important to note that JavaScript is an implementation of that standard, and browsers and platforms like [Node JS](https://nodejs.org/en/) provide their own superset of that. This means that not all implementations are feature aligned, so it is important to understand which features of ECMAScript are available in the implementation of JS you are using.

####Lesson 1: Block Bindings - `let` and `const`

Bindings are essentially just variables, but have been a source of confusion due to how JS hoists things. If you need a refresher on hoisting, [here ya go](http://learnjswith.me/javascript-hoisting/).

Since most other languages create the variable where the declaration occurs, changes were made to make the behavior more intuitive. The keywords `let` and `const` were added as a way to declare a variable. Previously, `var` was the only way. `var` does not have block scope, only function scope. For a refresher on scope, [go here](http://learnjswith.me/javascript-scope-intro/).

Since you're likely quite familiar with `var`, let's focus on `let` and `const`, which have block scope. Block scope is anything inside curly brackets `{}`, including things like `if`, and `else`. Block scope also applies to variables declared within a function, and follow lexical scoping rules.

Previously variables only had functional scope and would always be hoisted to the top of the containing scope.

**Problem**

<?prettify?>
```
function greet(condition) {
  if (condition) {
    var greeting = 'hello'
    return greeting
  } else {
    // greeting exists here as undefined
    return 'good bye'
  }
  // greeting exists here as undefined
}
```

**What JS is doing**

<?prettify?>
```
function greet(condition) {
  var greeting
  if (condition) {
    greeting = 'hello'
    return greeting
  } else {
    return 'good bye'
  }
}
```

That is quite confusing to most people used to working in other languages. JavaScript is hoisting the variable declaration to the top of the scope, which makes it undefined everywhere, except for the `if` block where the value `hello` is assigned. This is a source of errors.

In come `let` and `const`...

###### let declarations

`let` and `var` declarations are almost identical, the biggest difference being that `let` declarations are only hoisted to the top of a block, rather than the entire function. This means you should declare your `let` variables at the top of the block to avoid the *temporal dead zone*. More on that in a bit. Let's see how that affects our previous example.

<?prettify?>
```
function greet(condition) {
  if (condition) {
    let greeting = 'hello'
    return greeting
  } else {
    // greeting does not exist here
    return 'good bye'
  }
  // greeting does not exist here
}
```
<br/>
One more thing to note. **`let` will not redeclare a variable already declared in the same scope**

You can't do this:

<?prettify?>
```
var number = 42
// TypeError: Identifier 'number' has already been declared
let number = 500
```

But you can do this:

<?prettify?>
```
var number = 42
if (number === 42) {
  // this works because it is a separate scope
  // and thus creates a different variable called number
  let number = 500
  console.log(number) // 500
}
console.log(number) // 42
```
<br/>
###### const declarations

`const` is used to define constants, meaning they cannot be changed once set. This also means that they must be initialized immediately, or a syntax error will be thrown.

<?prettify?>
```
// SyntaxError: Missing initializer in const declaration
const ID
```

`const` behaves the same as `let`, in that it will throw an error when trying to redeclare a variable of the same name on the same scope, and that it will not hoist declarations and keep the scope within the block.


<?prettify?>
```
const ID = 1
// TypeError: Assignment to constant variable.
ID = 2
```

The one caveat to all this is that you can modify a `const` variable *if* it is an object. **A `const` declaration prevents modification of the binding, not of the value.**


<?prettify?>
```
const people = {
  teacher: "Mike",
  student: "Seth"
}

// this is OK
people.assistant = "Alice"
people.teacher = "Alice"

// TypeError: Assignment to constant variable.
people = {
  name: "Brad"
}
```
<br/>
Remember the **Temporal Dead Zone**? 

This refers to the zone between the top of the scope and where a `let` or `const` is declared, since these values cannot be accessed before their declaration. Doing so will throw a reference error. Let's see two examples of this.

The following will throw an error because it tries to access a variable before the statement gets executed. The subtlety here, is that the JavaScript engine knows of it's existence in the scope, so it errors when trying to access it. The following behavior applies to both `let` and `const`.


<?prettify?>
```
if (condition) {
  // temporal dead zone
  // ReferenceError: greeting is not defined
  console.log(greeting)
  let greeting = 'hello'
}
```

If we look at the `typeof` value for `greeting` in a different scope, it just thinks the variable hasn't been defined.

<?prettify?>
```
console.log(typeof greeting) // undefined
if (true) {
  let greeting = 'hello'
}
```
<br/>
**Loops**

Loops are a foundation of programming, and `let` especially brings some improvement. Previously, using functions in loops was an issue, due to the loop variable being available outside of the loop, sometimes forcing developers to use immediately invoked function expressions (IIFE) to create a containing scope.


<?prettify?>
```
var fns = []

for (var i = 0; i < 10; i++) {
  fns.push(function() {
    console.log(i)
  })
}

for (var j = 0; j < fns.length; j++) {
  var fn = fns[j]
  fn() // outputs the number 10, ten times.
}
```

The code above does not perform as intended, as instead of outputting the value of the `ith` iteration, it just logs the last value, `10`. This is because that value is scoped outside of the loop. We can fix this by using an IIFE, since IIFEs create their own scope.

<?prettify?>
```
var fns = []

for (var i = 0; i < 10; i++) {
  fns.push((function(i) {
    return function() {
      console.log(i)
    }
  }(i)))
}

for (var j = 0; j < fns.length; j++) {
  var fn = fns[j]
  fn() // outputs 0, 1, 2, ... 9
}
```

With `let` and `const` we can avoid this. On each iteration `let` will create a new variable and initialize it to the value of the variable with the same name of the previous iteration, meaning each function will get its own copy of `i`. If we change `var` to `let` in our original example, we will get the desired behavior, without having to use an IIFE.

<?prettify?>
```
let fns = []

for (let i = 0; i < 10; i++) {
  fns.push(function() {
    console.log(i)
  })
}

for (let j = 0; j < fns.length; j++) {
  let fn = fns[j]
  fn() // outputs 0, 1, 2, ... 9
}
```

The same behavior applies to `for ... in ` and `for ... of` loops. `const` can be a bit tricky, since its value cannot be changed. What this ultimately means is that you shouldn't use it in a `for` loop. It will error in a `for` loop, but it will work in a `for ... of` and `for ... in`, so long as you don't change the value in each iteration.


###### Global Block Bindings

One more important differentiation from `var` is that in `let` and `const` a new binding is created in the global scope, but the property is not added to the global object. This is different from how `var` works, where it assigns properties to the global object, often overwriting property values without intent.

**Using `var`**

<?prettify?>
```
// in a browser
var RegExp = 'my string'
console.log(window.RegExp) // "my string"
var str = 'another string'
console.log(window.str) // "another string"
```

**Using `let`**

<?prettify?>
```
// in a browser
let RegExp = 'my string'
console.log(RegExp) // "my string"
console.log(window.RegExp === RegExp) // false

const str = 'another string'
console.log(str) // "another string"
console.log("str" in window) // false
```

You still might have a use case to use `var` if you need to write something to the global object. This would be common in a browser where things need to be shared across frames and windows.


###### Best Practices

You're probably left thinking, "Which should I use now, `var`, `let`, or `const`?" Use `const` by default and `let` when the value needs to change. Leave `var` for special cases.
