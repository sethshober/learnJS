Welcome back folks. Glad to have you! Today we are going to cover some more language basics, focusing on types. Let’s jump right in.

Programming languages have built-in data structures, which can differ among each. These representation of values are known as types. JavaScript is a dynamically typed language, meaning the type will get determined automatically when the program is being processed and variables can hold any type of value at any time, vs statically typed, where the variable must be enforced with a type at creation, such as a string or number. Changes between types is known as coercion. Let’s take a look at some examples.

```
var number = 10 // number is of the type number
number = ’10’ // number is now of the type string

// note that when using operands sometimes coercion happens automatically

var foo = 42; // foo is now a Number
foo = “bar”; // foo is now a String
foo = true; // foo is now a Boolean
```

JavaScript provides a `typeof` operator that can examine a value and tell you what type it is. We will be using the `typeof` operator to discuss the different types available in JS.

The `typeof` operator returns a string indicating the type of the unevaluated operand. Let’s see it in action:

```
// syntax
typeof operand

// example
var hi = ‘hello world’;
typeof hi; // ‘string’
```

Let’s take a look into the types available to us in JS:

- string
- boolean
- number
- null & Undefined
- object
- symbol (This is part of ES6 and will not be covering it at this time)

---

###String 

A string is simply a way to represent text. Values are surrounded with either single or double quotes, as per your preference. The preferred way of creating strings is with a literal representation.

```
var myString = “Isn’t this cool!”;
```

Alternatively you could do it this way, but *it is not preferred*.

```
var myString = new String(“This is not quite as cool.”);
```

You can coerce something to a string with `toString()`:

```
var num = 5; // type number
num.toString(); // ‘5’ type string
```

Alternatively you could do it this way, but *it is not preferred*.

```
var num = 5;
num = String(num); // '5'
```

---

###Number 

A number is anything 0–9 and also the value `NaN`, which ironically stands for ‘Not a Number.’ Numbers do not have quotes around them.

```
var number = 8;
```

Again, you could create a number with the `new` keyword, but don’t. If you want to coerce a string to a number you can use the `Number()` function to convert an object argument to a number that represents the object’s value. If the value cannot be converted to a legal number, `NaN` is returned.

```
var str = “5” // type string
str = Number(str); // 5 … str is now the number 5
Number(“abc”); // NaN
```

---

###Boolean 

A boolean simply represents **true** or **false**. You will commonly see these used in an if statement context (more on that later).

```
if (5 > 4) { // this evaluates to the boolean of true
 // do something
 // since the above evaluated to ‘true’ this did something
}
```

---

###Null & Undefined 

######Undefined

A value is undefined if it has been declared but not been defined a value or has been explicitly set to the value ‘undefined’. Undefined is an actual type of itself.

```
var x;
console.log(x); // ‘undefined’
```

######Null
Null is an assignment value. It can be assigned to a variable as a representation of no value. The caveat: it is actually of the type ‘object’. This is a bug in JS, and at this point will most likely never be fixed, as there is a lot of code running on the web that relies on this bug, and thus fixing it would create even more bugs.

```
var x = null; 
console.log(x); // null
typeof null; // object
```

Object — array, objects, functions are all subtypes in this category.

######Object 

Object includes the subtypes: array, object, and function.

Objects are much like variables in that they are like containers for data values. The difference with objects is that they can contain multiple values, and are written as `name: value` pairs, also commonly referred to as `key: value`. It is worth noting that an object in programming is often representative of something that could be an object in real life.

```
// let’s create a person object
var person = {
  firstName: “John”,
  lastName: “Doe”,
  age: 50
};
```

Now let’s access some of those person properties we just set. Object property values can be accessed two different ways.

```
// dot notation:

person.firstName // ‘John’

// bracket notation:

person['firstName'] // ‘John’
```

Dot notation is preferred, but sometimes bracket notation is the only option, such as with special characters or if the value is a variable.


######Arrays
An array is an object that holds values in numerically indexed positions. Let’s create a short grocery list as an array:

```
var groceries = [“milk”, “eggs, “iced tea”];
```

Now let’s access those grocery items. We access array values by index ( note the index starts at zero ):

```
groceries[0] // “milk”
groceries[1] // “eggs”
groceries[2] // “iced tea”
```

######Functions
A function is of the type object but typeof returns ‘function’. A JavaScript function is a block of code designed to perform a particular task, and is executed when “something” invokes it, also known as calling it.

```
// here is the syntax

// here we are declaring a function called ‘name’

function name(parameter1, parameter2, parameter3) { 
  // here we put our code to be executed when ‘name’ is called or invoked
}

// now we can call the function 'name'. we will pass the values 1,2,3 as arguments for the parameters.

name(1,2,3);

// declare sum
// when sum is called it will return the value of a  + b

function sum (a, b) {
  return a + b;
}

// call/invoke sum
sum(5, 10); // 15
```

One of the main principles of programming is ‘Don’t Repeat Yourself’, shortened to DRY. It is important to minimize lines of code for readability, and functions help us to do just that and stay DRY. If you find yourself repeating code, you should probably be using a function.




######Symbol (ES6) 

A symbol is a unique and immutable data type and may be used as an identifier for object properties. Immutable means it cannot be changed. The symbol object is an implicit object wrapper for the symbol primitive data type. We will not be talking about Symbols at this time or for quite awhile. For more on symbols see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

```
Symbol([description]) // syntax for creating a symbol
Symbol(“foo”) // new symbol created with the description foo
```

---

Wow, we’ve come a long way again today! This is quite a bit to take in. Building a foundation is imperative for your success down the road, and grasping these data types will help you do just that. Keep reviewing them and messing around with typeof, and we’ll see you back here next time. Cheers!
