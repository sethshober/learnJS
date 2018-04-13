Hi everybody, and welcome back. Our focus over the next week will be types and looking at individual ones, including common uses and behaviors. Today we will be covering strings, but first a quick review.

**There are 7 types in JavaScript:**

- null
- undefined
- boolean
- number
- string
- object
- symbol (ES6)

Types are representations of values, and for our purposes, a type is a set of characteristics that identifies the behavior of a particular value, allowing it to be distinguished from other values, the engine, and the developer.

There is a larger discussion on this, but it is mostly irrelevant to us and not worth arguing. What is important is knowing that there is an intentional behavior made by both the engine and the developer based on the type.

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

Anything that is of the type 'string' has built-in methods available to it. Methods are functions attached to objects, and string methods will allow us an easier way to do common tasks. In JS, strings are immutable, which means they cannot be altered, and because of this the methods that alter strings must return a new value, rather than altering the original.

##String Methods and Properties

As we know strings are commonplace in JS and represent a sequence characters. What we need to learn now, is what we can actually do with them and how we can manipulate them. When you create a string literal, ex. `var str = "my string"`, under the hood it is actually doing `new String('my string')`. String is a global object constructor function, which is used to create strings, and when a string is created it inherits all the methods of String. I realize this is slightly too technical for some at this point, but getting acquainted with new terms is good to get used to, and eventually it all sinks in.

What we want to talk about today is some of those methods and properties, which are a necessity for your toolkit. Here is the [MDN for String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [W3 Schools string methods](http://www.w3schools.com/js/js_string_methods.asp), where you can read further details, including all the methods available.


###Properties

There is not much here compared to other types. The `length` property is the only property that is going to concern us. It returns how many characters are in the string. An empty string will return a length of 0.

<?prettify?>
```
// syntax
str.length
// example
var str = 'monkeys'
str.length // 7
```

###Methods

There are many methods for strings. These methods will help you do common tasks on strings, like grabbing specific text, checking for values, and changing case. We will try to highlight the more common ones and provide an example of each.

All these are based off the Mozilla Developer Network documentation. Feel free to jump ahead and go through these at your own speed. Learning all these today is not important. Pick a few to master and become acquainted with the rest. Development isn't about memorization. It's knowing how to read and utilize documentation. One day you'll need to do something, and you'll be like I know this is possible, I just don't know how. Now you'll know where to look, and you'll figure it out. That's development! Let's start out slow, with **[toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)**. This will return the string in lower case form.

<?prettify?>
```
// syntax
str.toLowerCase()
// example
var str = 'John Deer'
str.toLowerCase() // 'john deer'
str // 'John Deer' ... make sure to assign the return value
str = str.toLowerCase()
str // 'john deer'
```
Because strings are immutable (meaning they cannot be altered) make sure you assign the returned value to something, else it will just perform the operation and nobody would see a result. A good use case for this would be if we had an input that took in a name, and did something with it regardless of case, or if we wanted to store everything in lower case.

Naturally, you might not be surprised that there is also an upper case method **[toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)**, which returns a string in upper case form.

<?prettify?>
```
// syntax
str.toUpperCase()
// example
var str = 'John Deer'
str = str.toUpperCase() // 'JOHN DEER'
```

So, what would we do if a user inputs an extra space with their username or password? We use **[trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)**, which returns the string with whitespace removed from both ends. Again, it is important to remember that new values are returned and must be assigned, as the original remains unchanged. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

<?prettify?>
```
// syntax
str.trim()
// example
var str = '  hello sir '
str = str.trim() // 'hello sir' ... spaces are removed from ends only
```

Let's kick it up a notch, and combine two strings. Say we have a first and last name returned from a database, and we want to display them. We will need to do what's known as concatenation, which means to join things together. We can concatenate, or concat, strings two ways: the **[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)** method or the `+` operator.

<?prettify?>
```
// syntax
str.concat(string2, string3[, ..., stringN]) // any number of strings can be passed in as arguments, which will be added to 'str'

// concat()
var str = "My name is "
newStr = str.concat("Joe", "Schmo") // My name is Joe Schmo

// + operator
var firstName = 'Joe'
var lastName = 'Schmo'
var nameGreeting = str + firstName + ' ' + lastName // "My name is Joe Schmo"
```

Don't forget to add spacing when necessary. Also, it is preferred to join strings via the `+` operator, as it is tremendously faster and much more readable. See the performance test: http://jsperf.com/concat-vs-plus-vs-join

Next up is **[charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)**. It takes an index value and returns the specified character at that index from a string. The index starts at 0, and if it is out of range it will return an empty string.

<?prettify?>
```
// syntax
str.charAt(index)
// example
var str = 'monkeys'
str.charAt(5) // 'y'
str.charAt(10) // ''

// using some math
str.charAt(str.length - 1) // 's'
// you may want to check if a character exists at a certain index
// and then do something based on that
if (str.charAt(2) !== '') {
  // do something
}
```


Sometimes we want to see if there is an occurrence of something. One option is to use **[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)**, which returns the index, or the position, of the first occurrence of a specified text in a string, starting the search at the beginning of the string or from the optional `fromIndex` parameter. It will return `-1` if the value is not found. A common use case is to see if a value exists within a string.

<?prettify?>
```
// syntax
str.indexOf(searchValue[, fromIndex])
// example
var str = 'monkeys'
str.indexOf('mon') // 0
str.indexOf('mon', 2) // -1
// note this is case sensitive
str.indexOf('Mon') // -1

// real world (ish)
var monkey = 'howler monkey'
if ( str.indexOf('howler') !== -1 ) { // true
  // we've got a howler monkey
  // do something cool with it
}

// using indexOf to count occurrences, from MDN:
var str = 'To be, or not to be, that is the question.'
var count = 0
var position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count) // 4. pretty slick , right?!
```


Though, not as common, there is **[lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)**, which does the same as `indexOf()` but starts the index from the end of the string.

<?prettify?>
```
// syntax
str.lastIndexOf(searchValue[, fromIndex])
// example
var str = 'howler monkeys'
str.lastIndexOf('e') // 11
```

Sometimes there is a need to break a string down into smaller pieces such as words or characters. We can use **[split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)** to do this, which creates an array, making it easy for us to do different iterations on. It takes in parameters for what we want to split on and a limit for the length of our array.

<?prettify?>
```
// syntax
str.split([separator[, limit]])
// example
var str = 'Hello, there. How are you doing?'
// split on spaces to give us words
str.split(" ") // [ 'Hello,', 'there.', 'How', 'are', 'you', 'doing?' ]
// you may want to remove the punctuation
// splitting on empty string will give us characters
str.split("") // ['H','e','l','l','o'........]
```

This is a great spot for a real life situation, and an interview question. How do we reverse a string? Remember strings are immutable. Many methods available to strings are similar to arrays, but since a string is immutable we can't share all the methods available from an array, for example `array.reverse()`. If an array has a reverse method what could we do to our string to utilize it? We can convert our string to an array with `string.split()`, use `array.reverse()`, and convert it back to a string with `array.join()`. The following will reverse a string, but will only work with basic strings, nothing complex like unicode characters, etc.

<?prettify?>
```
// reverse a string
var str = 'hello there'
var strReverse = str.split('').reverse().join('')
str // 'hello there'
strReverse // 'ereht olleh'
```
If it seems the common tasks you are doing on strings require array methods, it may make sense to store your strings as arrays and convert to strings by `array.join('')` when necessary, rather than using the above code.

How about if we want to extract a piece of a sentence? As is a common theme in programming, there are many ways to do this. Commonly, we will use **[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)**. This extracts a section of a string and returns it as a new string. It uses indexes, taken in as parameters, in order to know what range to extract.

<?prettify?>
```
// syntax
str.slice(beginSlice[, endSlice])
/* parameters
beginSlice: The zero-based index at which to begin extraction. If negative, it is treated as sourceLength + beginSlice where sourceLength is the length of the string (for example, if beginSlice is -3 it is treated as sourceLength - 3).

endSlice: Optional. The zero-based index at which to end extraction. If omitted, slice() extracts to the end of the string. If negative, it is treated as sourceLength + endSlice where sourceLength is the length of the string (for example, if endSlice is -3 it is treated as sourceLength - 3).
*/

// lets use slice to create us a new string
var str = 'Portland is a cool beans place to be.'
// this will extract the 1st through 8th character
var str2 = str.slice(0, 8) // Portland
/*
What happened here is that we started at the 0 index of str, which is the first character, and then extracted 8 characters from that point on and stored them in the variable str2. Let's see what happens if we omit the endSlice parameter
*/
str2 = str.slice(8) // ' is a cool beans place to be.'
/*
We can see that the 8th index was the space between 'Portland' and 'is' and that it extracted everything from that point to the end of the string, including the space. Let's try negative values now.
*/
var str = 'I like to eat burritos.'
// Starting with the last index count back 9
var str2 = str.slice(-9) // 'burritos.'
var str2 = str.slice(-9, -1) // 'burritos' ... 
/*
Notice the period was trimmed. Be careful. Logically one might think that -1 is the last index value, but it's actually the second to last. It goes backwards one index from the last index. This says starting at 9 indexes from the end, go til one index from end.
*/
```

---

There are many more string methods available, some deprecated, and some part of ECMA6, that I encourage you to continue further research on your own. After getting a hang of interacting with strings it is a great, and fun, exercise to pick a method and try to write your own function to do the same thing. This will help you become even more comfortable with controlling the language. Next up will be arrays. See you then!
