Welcome back. Today, we are going to learn about **hoisting**, which is fundamental to JavaScript, and trips up many developers who don't know the nuances of the language. Let's jump straight in. First, we need to explain the two concepts that are at the forefront of this very important JavaScript concept: **declarations** and **initialization**.


**Declaration** is anytime you use the `var` or `function` keyword. All variable and function declarations get hoisted to the top of their scope.

<?prettify?>
```
var myVariable; // variable declaration
function myFunction () { // function declaration
  // do stuff
}
```
**Initialization** is when you assign a value to a variable. The initialization of a variable *does not* get hoisted. Instead, only the declaration is hoisted, meaning the variable is set to `undefined` at the top of the scope, and the value assigned to it will still occur as originally written in the code. This is sort of the tricky part of hoisting. If we think of an assignment (ex. `var a = 'a'`), the left hand of the assignment is what gets hoisted. `var a` is hoisted to the top and declared, so now we are able to use it, but assigning `'a'` to the variable `a` still occurs when we wrote it. It will be much easier to look at this in context.

<?prettify?>
```
var initialize = "I initialized my variable";

// What actually happened:
var initialize;
initialize = "I initialized my variable";
```

What is actually happening here is the variable `initialize` is first declared, and then it is initialized (or assigned) with the value `"I initialized my variable."`. What about functions? Function declarations are actually hoisted first, followed by variables.

<?prettify?>
```
function hoist() {
  var first = 'my first variable initialized';
  var second = 'my second variable initialized';
}
hoist();
```

Lets take a look behind the scenes of the above function declaration. When this piece of code is run, all of the variable declarations are hoisted to the top of their scope, which is within the function `hoist`. Here is what this function looks like when it is run:

<?prettify?>
```
function hoist() {
  // declarations
  var first;
  var second;
  // initializations
  first = 'my first variable initialized'; // initialize
  second = 'my second variable initialized'; // initialize
}
hoist();
```

<?prettify?>
Slowly but surely we are starting to understand how javascript works under the hood. Now that we have gone over the basics lets look at an example that shows hoisting at its finest.

<?prettify?>
```
var newVar = 'My New Variable';
function newFunction(){
  console.log(newVar);
  var newVar = 'local variable in local functional scope';
}
newFunction();

```

The question is what will JavaScript log when our function is called? From previous lessons we might be led to believe that the `newVar` from the function scope will be logged, but if we think what we just learned about hoisting we can walk through what happens when the code is run.

<?prettify?>
```
// what is actually happening in the script above

function newFunction(){
  var newVar;
  console.log(newVar); // undefined, OH SNAP
  newVar = 'private variable in functional scope';
}

var newVar;
newVar = 'My New Variable';
newFunction();
```

This should be much more clear about what is happening, and *what should be happening*. `newFunction` won't actually log 'private variable in functional scope', as we might have originally thought. Instead, it logs undefined because the initialization hasn't occurred yet.

All this hoisting stuff can lead to some funky things that just don't make sense, as well as errors the are hard to figure out and unexpected behavior, especially to those coming from other languages. Here is an example of bad code that works. Not all code in the wild is good code, so even though we are learning best practices, it is important to be able to identify and read things like this.

<?prettify?>
```
number = 55;
printSomething(number); /* 55, what magic is this?! */
var number;
function printSomething (x) {
  console.log(x);
}
```

To pretty much everybody outside of JavaScript, this script is counterintuitive. We assigned a variable and called a function, both before they were declared. At least that's how it appears on paper, but as we now know the declarations were hoisted, and that allowed this code to run properly. So please, do your best to declare your variables and functions at the top. Don't wait for them to be used to define them. Just to be clear on what happened above.

<?prettify?>

```
function printSomething (x) {
  console.log(x);
}
var number;
number = 55;
printSomething(number); // 55
```

Boy oh boy, does that make more sense!!

---

**Wrapping up the day**

JavaScript hoists declarations but not initializations. We write our code as closely as possible to how JavaScript will interpret it. This means declaring all variables and functions at the top of scope and initializing them if it makes sense. This will help with readability, minimize errors, and help avoid confusion among those that may not be as familiar with the language. As you begin to understand these language oddities, you will be able to harness and use them to your advantage.

We will be back at you next week with new concepts as we further our knowledge of this flexible, and dare we say, beautiful language.