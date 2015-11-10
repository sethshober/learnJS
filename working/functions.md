Our foundations of JavaScript have really built to this point, and a lot of that has included the use of functions. The thing I recently realized is that we haven't really talked much about them. We merely introduced what they are and continued on. It's time to go deeper into functions in order to become a more effective developer into the future. Today we will be discussing what a function is, different ways to write them, and of course some best practices. Let's start out by answering the question, "What is a function?"

> A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

That's the simple explanation given by W3 Schools, and really all we need to know right now. Let's look at the syntax and a basic example.


<?prettify?>
```
// syntax
function name(parameter1, parameter2, parameter3) {
  code to be executed
}

// declare sumNumbers function
// will sum two numbers and return the value
function sumNumbers(num1, num2) {
  return num1 + num2
}

// call function
sumNumbers(5, 10) // 15
```

Let's begin by looking at the parts of a function. In the above we created a function with the name `sumNumbers`. We use the name followed by `()` to call / invoke a function. Calling a function means to actually run the code inside it. You should always use descriptive names with your functions in order to make clear what the function is doing. If a function has no name it is known as an anonymous function. 

A function takes parameters which are a placeholder to represent values that will later be passed into the function to perform operations on. Parameters are helpful in writing reusable and dynamic code, which is a large part of why we use functions. The values we pass in to the function are known as arguments. In `sumNumbers` `num1` and `num2` are the parameters, and when we call `sumNumbers(5, 10)`, `5` and `10` are the arguments.

Now we have the function body, which is what exists between the curly braces `{}`. This is where the code that gets run lives. `return num1 + num2` is the function body above. Finally, the `return` statement returns a value to be used later. This is optional, but without it you will not be able to get the value you just computed.

Let's use the example above to understand **WHY** we might use a function, rather than just running the code in the function body on its own. One of the core principles of programming is **DRY**, which stands for **D**on't **R**epeat **Y**ourself. Functions help us to reuse code, which saves us time, while keeping your code cleaner, readable, and maintainable. Initially, you might find it easier and more natural to write functions without parameters. I certainly did for a while. Let's look at the repercussions in the example above.

<?prettify?>
```
function sumNumbers() {
  5 + 10
}
```

There are a few problems with this version versus the original. The biggest is that it can only add 5 and 10. Even if you know that's all you need to be doing right now, that may change in the future, in which case you would have to rewrite the initial function or end up with numerous functions doing basically the same thing. Why not just write one function that can handle any number?! Starting to see the flexibility? That's where the parameters come in.

<?prettify?>
```
function sumNumbers(num1, num2) {
  num1 + num2
}
``` 

Now when we call `sumNumbers`, we can pass it any two numbers as arguments, and it will sum them. Much more flexible! The only thing now is that the function is just summing the numbers and the result is sort of disappearing into space. It would be nice if we could see or do something with that number. You might try adding a `console.log()` or `return` statement, depending on your needs.


<?prettify?>
```
var myNum = sumNumbers(5, 10)
myNum // 15
```

We can see that `sumNumbers` returned us 15, which we stored and accessed via `myNum`. You might have also noticed in the first example, and remembered from previous lessons, that we should be using **comments** to help describe what our code is doing. You will develop your own commenting styles over time, much like your coding style, all which will need to blend with your team. The important thing is to make sure it is clear what is happening. If your functions have appropriate names you may not need a comment, while some more complex functions may lead to problems later without a clear comment. It is up to you, but always think of your future self or a stranger looking at it. Will they know what is going on? Generally, a comment can only help.

It may be even further helpful to your understanding to see all this without a function, because that's often how it may start. Here are a few examples:

<?prettify?>
```
// we've been given some numbers with the instruction to sum them
// the following is an output of summing five sets of numbers
10 + 5
5 + 5
50 + 100
8 + 64
25 + 75

// this is starting to get annoying.
// let's write a function to help
function sumNumbers(num1, num2) {
  return num1 + num2
}
sumNumbers(10, 5)
sumNumbers(5, 5)
sumNumbers(50, 100)
sumNumbers(8, 64)
sumNumbers(25, 75)
```

Instead of doing a bunch of random sums, we wrote a functions. Let's look at another math example that is a little more robust.

<?prettify?>
```
// do some math
5 + 5
5 - 5
5 * 5
5 / 5
8 + 8
8 - 8
8 * 8
8 / 8

// there must be a better way. let's try a function
function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function doMath(num1, num2) {
  add(num1, num2)
  subtract(num1, num2)
  divide(num1, num2)
  multiply(num1, num2)
}

doMath(5, 5)
doMath(8, 8)
```

We first started by writing the math out, but then got frustrated and decided it would be better to use a function. In the long term this allows us to be more flexible and reduce code by reusing it. This may seem like more work up front to set these functions up, but you will find as your programs grow it will save you tremendous time down the road. We can use `doMath` to do math as many times as we want now, and if we need to make any changes, we need only change one place, the function declaration.

This last one is simple, but I think gets the point across well.

<?prettify?>
```
// log a greeting.
console.log('Hello Joe!')
console.log('Hello Mary!')
console.log('Hello Bobby!')

// it's always better with a function
var name = 'Sleeping Beauty'
function greet(name) {
  console.log('Hello ' + name + '!')
}

greet(name) // 'Hello Sleeping Beauty!'
```

Imagine `name` being dynamic, in that we don't know what it is going to be. A function allows us to better handle this and avoids a bunch of `console.log()` statements.


---

> "In JavaScript, functions are first-class objects, meaning they are objects and can be manipulated and passed around just like any other object. Specifically, they are Function objects."

This is something that is special to JavaScript compared to other programming languages, and part of why it is such a flexible and powerful language. In JavaScript you will often see an anonymous function passed as an argument to another function, like so:

<?prettify?>
```
// a function that takes a function as an argument and calls it
function doThings(func) {
  func()
}
doThings(function(){
  console.log("func called")
})
// "func called"
```

This is definitely a complicated thing to grasp at first, so just be aware of it and get acquainted. To be clear on what just happened, we declared the function `doThings` which takes a parameter `func`, which represents a function, and in the function body calls `func`. When we call `doThings` we pass it an anonymous function as an argument, which logs `"func called"` so we know that the anonymous function actually ran. This is to help visually and understand what is happening, and to be clear, we are focusing on concepts versus functionality at this point. The above could also be rewritten as:

<?prettify?>
```
// a function that takes a function as an argument and calls it
function doThings(func) {
  func()
}
var myFunc = function() {
    console.log("func called")
  }
doThings(myFunc) // "func called"
```

At this point we are at a matter of coding style and preference, but it is good to note that we can pass a variable to represent a function. Perhaps we think it might be more readable this way.

In this last example it is important to note we created a function two different ways, one being a **function declaration** and the other a **function expression**. Typically you will see a function declaration, which uses the function keyword, but sometimes you may see a function assigned to a variable, which is known as a function expression. In this fashion the function gets assigned to a variable, and the function now gets called by calling the variable. Above, `doThings` is a function declaration, where `myFunc` is a function expression. I think the confusing thing about these are that you now are calling a variable which calls a function, rather than just calling the function directly, which as a beginner makes a whole heck of a lot more sense.

---

To wrap up, a function is a block of code designed to perform a particular task, and we create them via either a function declaration or function expression, but typically as a function declaration. We use functions to keep our code DRY, increase readability and maintainability, and allow our code to be more dynamic. As you continue to use functions and evolve as a developer you will see how there are many ways to solve a problem, and you will develop your own coding style and preference over time. Continue practicing functions and doing further research, particularly in areas of interest.

In the next lesson I will be going over a common exercise, the Fibonacci number sequence. We will discuss how to approach the problem and how a solution may evolve. If you want to be ahead, and attempt to solve it on your own, here is the problem: 

> Calculate 50 iterations of the fibonacci sequence. A number in the [fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) is equal to the previous number plus the number before the previous number. In other words, a number is equal to the previous two numbers added together.

---

**Further Reading:**

- [Guide to Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Functions - W3 Schools](http://www.w3schools.com/js/js_functions.asp)
- [Best Practices for Readable Code - tuts+](http://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)
- Research the differences between a function declaration and a function expression. There are some subtleties we didn't cover.
- Read about [JS Docs](http://usejsdoc.org/about-getting-started.html), a common commenting style, and easy way to create documentation for your code.