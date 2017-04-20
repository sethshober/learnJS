While not necessarily the most exciting part of the job, manipulating and working with strings is quite common. **This post is going to focus on the new template literals.**

ES6 also included updates for unicode support and new regular expression flags. These are outlined at the end of the post.

#### Template Literals

Template literals are an answer to the following lacking features:
 
- Multiline strings
- String formatting (interpolation)
- HTML escaping

They are essentially strings with extra powers, and are denoted with backticks (``) instead of double or single quotes.

<?prettify?>
```
let str = `hello`
typeof str // 'string'
str.length // 5
```

###### Multiline Strings

Previously you could not have a multiline string. You would have to use concatenation between the lines. With template literals you can include newlines where you want, just be careful of indentation, because all whitespace is included.

<?prettify?>
```
let greeting = `Hello.
How are you?`

console.log(greeting) // Hello.
                      // How are you?
greeting.length       // 19

greeting = `Hello.
            How are you?`

console.log(greeting) // Hello.
                      //             How are you?
greeting.length       // 31
```

You can also use `\n` to indicate a new line

<?prettify?>
```
let greeting = `Hello.\nHow are you?`

console.log(greeting) // Hello.
                      // How are you?
greeting.length       // 19`
```

If indentation is important, you might want to leave the first line blank, and then trim the text to remove the empty first space.

<?prettify?>
```
let content = `
<div>
    <h1>Title</h1>
</div>`.trim()
```

###### Substitutions (Interpolation)

This feature I'm pretty excited about. It's basically the same syntax as interpolating a string in ruby. Substitutions allow you to embed any valid JS expression to be evaluated and outputted with the string. The template literal has access to any variable in the same scope.

**Syntax: `${expression}`**

<?prettify?>
```
let name = 'Seth'
let greeting = `Hello ${name}.`
console.log(greeting) // 'Hello Seth.'
```

Because template literals are just expressions, you can do things like math and other function calls.

<?prettify?>
```
let item = 'movie'
let price = 12.50
console.log(`The ${item} cost $${price.toFixed(2)}.`)
// The movie cost $12.50.
```

The real power of template literals, and maybe the confusing part, is the ability to perform a transformation on the template literal and return the final string value, with something called a `tag`.

A `tag` is just a function that gets called with the processed data. The first argument is an array of the literal strings as interpreted by JS, and the remaining arguments are the interpreted values of each substitution. To make tag functions easier to work with, they are generally defined with [rest arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

<?prettify?>
```
// syntax
function tag(literals, ...substitutions) {
  // return string
}
```

Let's look at our previous example as if it has a tag function applied to it.

<?prettify?>
```
let item = 'movie'
let price = 12.50
console.log(tag`The ${item} cost $${price.toFixed(2)}.`)
// The movie cost $12.50.
```

Tag would receive a literals argument which would have strings `'The '`, `' cost $'`, and `'.'` The second and third arguments, which come from the substitutions, would be `'movie'` and `12.50`.

The number of items in the substitutions array is always one less than the literals array.

<?prettify?>
```
substitutions.length === literals.length - 1 // true
```

**Note:** The values in substitutions are not necessarily strings, such as `price` in our example. It is the job of the `tag` function to handle this appropriately.

You can also access the raw values by using the `String.raw()` tag. This allows one to get at escaped characters and do more complex processing.

<?prettify?>
```
let original = `Multiline\nString`
let raw = String.raw`Multiline\nString`

console.log(original) // Multiline
                      // String
console.log(raw)      // Multiline\nString
```

See here for further usage of template literal tag functions.

[MDN - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

#### Extra

The following is intended to make you aware of new changes and additions and is only an outline. Further research will be up to you.

###### New methods for identifying substrings

The following new methods return boolean values. If you need to get the index, you'll still need to use [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf). Of additional note, these will throw an error if passed a regular expression, which is in contrast to `indexOf`, which accepts regular expressions and converts them to a string.

- [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) - returns true/false depending on whether the given text is found in the given string.
- [startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) - returns true/false depending on whether the given text is found at the beginning of the given string.
- [endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) - returns true/false depending on whether the given text is found at the end of the given string.

Convenience method:

- [repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) - As you might guess, this repeats a string a number of times. It can be especially useful in formatting indentation levels.

<?prettify?>
```
// indent by two spaces
let indent = " ".repeat(2)
let indentLevel = 0

// do this when the indent is increased
let newIndent = indent.repeat(++indentLevel)
```

###### Unicode support

JS now supports unicode. Previously strings in JS were broken down into 16 bit *code units*, which represented a single character, and all `String` properties and methods, such as `length`, were based on that fact. The problem is that unicode characters are more than 16 bits, so multiple code units need to be used.

*Nerd stuff ahead.*

The first 2^16 code points in UTF-16 are represented as 16 bitcode units. This is known as the basic multilingual plane (BMP). Everything beyond this plane is in the supplementary plane. Code points can no longer be represented  in just 16 bits. Surrogate pairs are used to solve this problem, where two 16 bit code units (surrogate pair) can represent a 32 bit character. **ES5 will only work on 16 units. Make sure your implementation of ES6 supports 32 bit characters.**

Hexadecimal can represent 16 bit characters, and the upper bound of that is `FFFF`. Anything greater than this must be represented as a 32 bit character. We can use `codePointAt` to write a **simple helper method to test if a character is 32 bits**.

<?prettify?>
```
function is32Bit(character) {
  return character.codePointAt(0) > 0xFFFF
}
```

Methods to research: 

- [codePointAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [fromCodePoint()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
- [normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)


###### Regular Expression `u` and `y` flags

For full reference see [MDN - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

The `u` flag as been added to regular expressions to support unicode. This allows you to handle surrogate pairs and escape code points.

`\uhhhh` - Matches a UTF-16 code-unit with the value `hhhh` (four hexadecimal digits).
`\u{hhhh}` or `\u{hhhhh}` - (only when u flag is set) Matches the character with the Unicode value `U+hhhh` or `U+hhhhh` (hexadecimal digits).

The `y` flag, known as sticky, anchors each match of a regular expression to the end of the previous match.

There is also a new data property `flags`, which gives you access to the flags of a regular expression, just like `source` already gives you access to the pattern in ES5. Using `source` and `flags` together you extract pieces of the regular expression without parsing it directly.

<?prettify?>
```
let re = /ab/g
console.log(re.source) // 'ab'
console.log(re.flags)  // 'g'
```

