Welcome back! Glad to have you. Yesterday we wrote our first line of code using `console.log()`, which is used to print things and is really useful in testing. You will be seeing and using this a lot. Today we will be jumping into JavaScript language basics.

Our schedule includes:

- Statements
- Variables
- Comments
- Operators

###Statements

The majority of code you write in JavaScript, or any other language for that matter, is in the form of statements and expressions. So what are they? In a computer language, a group of words, numbers, and operators that performs a specific task is a statement, which is made up of expressions, which is something that produces a value. Essentially statements are instructions to be executed, most of which are probably expressions. Here is a basic example of a statement:

```
var num = 2 + 2;
```

Expressions in this statement include adding 2 + 2 and setting num equal to 4.

For a listing of Statements & Declarations see the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements), more commonly referred to as MDN. This should be one of the first places you look for documentation. We will be covering most of these at some point in the future, so don’t fret for now, as we will learn them over time.

---

###Variables

You use variables to store and retrieve values. The first time a variable appears is its declaration, which is where it is put into memory. Try to give your variables meaningful names to make it easy for other people to understand what your code does. Let’s take a closer look at our statement from earlier:

```
var num = 2 + 2;
```

`num` is the variable and will be equal to 4. Variables are declared with the `var` keyword and can be done a few different ways.

```
// A single declaration.
var num; 

// Multiple declarations with a single var keyword, separated by commas
var num, max, min; 

// Variable declaration and initialization in one statement.
var count = 0, amount = 100;

// line returns do not matter, but those commas do
var house
  , brick
  , sticks;
```

If we do not set a value to a variable initially it will be set to `undefined`. In JavaScript, variable names (including function names) must be valid identifiers. An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0–9.

**Camel casing** is the naming convention JS developers use when naming variables. Since you can’t have spacing or hypens in your names and it may make sense to have multiple words in a name, best practice is to use camel case, which means the first word is lower case and all words after begin with a capital letter. Here’s an example:

```
var thisVariableIsInCamelCase = “I am a camel cased variable”;
var applesAndOranges = “fruits”;
```

Watch out for case. JavaScript is a case sensitive language, so be careful.

```
 ‘HOUSE’ is not equal to ‘house’
```

Sometimes you may want a variable to remain unchanged and constant, for example with some sort of secret key or password. The convention for this is to use all capital letters and separate words with underscores. Here is an example:

```
var I_DO_NOT_CHANGE = “mySuperSecretPassword”; 
```

The interesting thing with this is that the variable `I_DO_NOT_CHANGE` can actually be changed. This is just a convention, though with ES6 the `const` keyword was added to create a read-only constant. Let’s take another look:

```
var I_DO_ACTUALLY_CHANGE = ‘mySuperSecretPassword’;
const I_DO_NOT_CHANGE = ‘holdSteady’;
I_DO_ACTUALLY_CHANGE = ‘newPassword’;
I_DO_NOT_CHANGE = ‘try to change me’;
I_DO_ACTUALLY_CHANGE // ‘newPassword’
I_DO_NOT_CHANGE // ‘holdSteady’;
```

Note `const` is part of the [ES6 specification](http://www.ecma-international.org/ecma-262/6.0/) and there are some caveats when using ES6. To minimize compatibility issues and quirks, we will be focusing on the current ES5 specification until later.

In JavaScript, some identifiers are **reserved words** and cannot be used as variables or function names. They will cause errors, and they will cause problems for you. Don’t use them. Seriously! W3 Schools, which is another great resource, has a [listing of reserved words](http://www.w3schools.com/js/js_reserved.asp) we recommend checking out.

A quick note on **semicolons**: So far we have been using semicolons to denote the end of an expression or statement. These are optional, though we are going to recommend getting in the habit of using them if you are new to the language.

---

###Comments

Comments are great for explaining things in your code, can help remind you later what you were doing, and are extremely beneficial for others trying to figure out what’s going on. Comments will be interpreted as plain text, and not evaluated. Commenting your code is one of the best habits you can develop as a developer.

```
Single line comments are denoted like so
// my single line comment
 
Multi line comments are denoted like so
/* 
This is 
a multiple
line comment
*/
```

---

###Operators

Operators are how we perform actions on variables or values. These are super important and useful, as you will be using them quite often in many different ways. Here is a listing followed by some basic examples. We will become more familiar with them over time.

```
+  —  *  /  =  %  ++  —  +=  -=  *=  /=  ==  ===
```

Assignment ( = )

```
var number = 5;
```

Math (addition +, subtraction -, multiplication *, division / )

```
var sum = number + 5;
```

Compound Assignment ( `+=`, `-=`, `*=`, `/=` ) this is a shortcut for combining math.

```
number += 5 is the same as number = number + 5
```

Increment/Decrement ( `++`, `--`)

```
number ++ is the same as number + 1
```

Equality ( loose equals `==`, strict equals `===`, loose not equals `!=`, strict not equals `!==` )

```
a == b
```

More on this will be covered later when we go over types and values.
Comparison ( `<`, `>`, `<=`, `>=` )

```
number < sum
```

Logical ( and `&&`, or `||` )

```
do something if ‘a’ and ‘b’ are true or if ‘a’ or ‘b’ are true.
```

Modulus ( `%` ) The modulus operator returns the division remainder.

```
9 % 5 = 4 // 5 goes into 9 one time with a remainder of 4
```

**Logical Operators** are used to determine the logic between variables or values, and typically used with booleans such as in a conditional.

Logical AND — `&&` — evaluates to true if each expression is true.

```
// examples
var x = 5;
var y = 10;

(x < y && y > x) // true
(x < y && y < x) // false because both expressions must be true
```

Logical OR — `||` — evaluates to true if at least one expression evaluates to true.

```
// examples
var x = 5;
var y = 10;

(x < y || y > x) // true
(x < y || y < x) // true because the first expression evaluated to true, so the rest don’t matter at this point
```

Logical NOT — `!` — returns true if expression cannot be converted to true, meaning the expression is false.

```
// examples
var x = 5;
var y = 10;

(x != y) // true because x is not equal to y
```

---

That’s plenty to chew on for now! Keep practicing with declaring and setting variables, while also doing some basic math operations on them. We’ll see you back here tomorrow as we continue progressing through the basics and discover types and values.