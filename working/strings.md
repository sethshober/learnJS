Hi everybody, and welcome back. Our focus over the next couple weeks will be types and looking at individual ones. We will be learning common uses/behaviors. Today we will be covering strings, but first a quick review.

There are 7 types:
-  null
-  undefined
-  boolean
-  number
-  string
-  object
-  symbol (ES6)

Types are representations of values, and for our purposes, a type is a set of characteristics that identifies the behavior of a particular value, allowing it to be distinguished from other values, the engine, and the developer.

There is larger discussion on this, but it is mostly irrelevant to us and not worth arguing. What is important is knowing that there is an intentional behavior made by both the engine and the developer based on the type.

JavaScript provides a `typeof` operator that can examine a value and tell you what type it is, which returns a string indicating the type of the unevaluated operand. **Remember, variables don't have types, the values do.** `typeof` is not asking the type of a variable, but the `typeof` of the value inside the variable. This might seems like semantics, but it's important to grasp. 

---

##Strings
Ok. Let's take a deeper dive into strings. A string is simply a way to represent text. Values are surrounded with either single or double quotes, as per your preference. The preferred way of creating strings is with a literal representation.

<?prettify?>
```
// creating strings are easy
var str = 'Hello, how are you?'
// let's see what type it is
typeof str // 'string'
```

Anything that is of the type 'string' has built-in methods available to it. Methods are functions attached to objects, and string methods will allow us an easier way to do common tasks. In JS strings are immutable, and because of this the methods that alter strings must return a new value.


##String Methods and Properties


========= TALK ABOUT COMMON METHODS AND TASKS =========


Much of the following information can be found in further detail at:

http://www.w3schools.com/js/js_string_methods.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

As we know at this point strings are commonplace in JS and represent a sequence characters. What we need to learn now, is what we can actually do with them and how we can manipulate them. When you create a string literal, ex. `var str = "my string"`, under the hood it is actually doing `new String('my string')`. String is a global object constructor function, which is used to create strings, and when a string is created it inherits all the methods of String. I realize this is slightly too technical for some at this point, but getting acquainted with new terms is good to get used to. Eventually it all sinks in.


What we want to talk about today is some of those methods and properties, which are a necessity for your toolkit.



Here is the [MDN for String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [W3 Schools string methods](http://www.w3schools.com/js/js_string_methods.asp), where you can read further detail, including all the methods available.



*****
port from stringMethods.txt here
*****

###Properties

There is not much here compared to other types. The `length` property is the only property that is going to concern us. It returns how many characters are in the string. An empty string will return a length of 0.

<?prettify?>
```
// syntax
str.length

// example
var str = 'monkeys';
str.length // 7
```



###Methods

There are many methods for strings. We will try to highlight the more common ones and provide an example of each.







There are many more, some deprecated, and some part of ECMA6, that I encourage you to continue further research on your own.


========== TOWARDS END ==========



Remember how strings are immutable? Let's take a look at real life situation, and a common interview question. How do we reverse a string? Many methods available to strings are similar to arrays, but since a string is immutable we can't share all the methods available from an array, for example `array.reverse()`, because many array methods return a new array. So if an array has a reverse method what could we do to our string to utilize it? Though, this is sort of a hack, we can convert our string to an array, use `array.reverse()`, and convert it back to a string.

// this is a hack. convert string to array. str.split('')
// reverse with array.reverse(). convert back to string. array.join('')
// will only work with basic strings, nothing complex like unicode, etc.
// If it seems the common tasks you are doing on strings is array methods
// it may make sense to store as array and convert to string by array.join('') when necessary

// hack example
var str = 'hello there'
var strReverse = str.split('').reverse().join('')
str // 'hello there'
strReverse // 'ereht olleh'



After getting a hang of interacting with strings it is a great, and fun, exercise to try pick a method and try to write your own function to do the same thing. This will help you become even more comfortable with controlling the language.

