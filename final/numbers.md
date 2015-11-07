As we begin to understand Javascript and how this language works, it is important to understand numbers and how to interact with them. We have used numbers quite a bit already, including our FizzBuzz function that uses conditionals to identify multiples of 3 and 5 and in the use of arrays to contain a multitude of numbers. They are everywhere. We will be discussing some of the common properties and methods available to us. The following is intended to be a reference and introduction. Further questioning and research is encouraged. Let's start with a quick review on the `number` type.

All numbers, both integers and fractional decimals, are considered the type `number` in JavaScript. JavaScript's numbers are based on the **[IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)** standard, also known as 'floating-point', specifically the 'double precision' format (64-bit binary). You can read more about the specification if you're a numbers nerd. We create them in a literal fashion as follows:

<?prettify?>
```
// create a number
var number = 22.347;
typeof number; // 'number'
```

It's as simple as that! Now that we have a number, we need to learn how to perform some common tasks with numbers. Let's look at some of the properties and methods available to us.

####[Number.MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)
Numbers can go on forever, but not in JavaScript. Eventually it just gets too big to handle. This property represents the maximum numeric value representable in JavaScript, which is `1.79E+308`. Values larger than `MAX_VALUE` are represented as `Infinity`.

<?prettify?>
```
var bigNumber = Number.MAX_VALUE;
console.log(bigNumber); // 1.7976931348623157e+308
```

####[Number.MIN_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)
Again numbers can go on forever, but eventually it just makes sense to call it zero. This represents the smallest positive numeric value representable in JavaScript, which is `5e-324`. Values smaller than `MIN_VALUE` are converted to 0.

<?prettify?>
```
var smallNumber = Number.MIN_VALUE;
console.log(smallNumber); // 5e-324
```

####[Number.POSITIVE_INFINTY](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY)
If we are ever in a situation when dealing with extremely large numbers we can have overflow. Overflow is simply when a number has become larger than `Number.MAX_VALUE` and cannot be processed by JavaScript. Let's check if a number has exceeded this maximum value and returns infinity.

<?prettify?>
```
var bigNumber = Number.MAX_VALUE * 2;
console.log(bigNumber === Number.POSITIVE_INFINITY) // true
// this property can be very useful in determining whether number are too big for JS to interpret

```

####[toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
Converting a number to a string will be an incredibly useful method. Whether we want to store our numerical data as a sting in an array or alert our user that they have "30 seconds left", we will use `toString()`.

<?prettify?>
```
var testNumber = 48;
testNumber.toString(); // '48'
// make a basic shot clock
var number = 24;
var statement = ' second shot clock';
var shotClock = number.toString() + statement;
// '24 second shot clock'
// there's a better way, though
var shotClock = number + statement;
console.log(shotClock); // '24 second shot clock'
/*
  When a number is added to a string it will be converted to a string in the process through coercion
*/
```

####[toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
This is useful if you have a number with a lot of decimal places and you want to be exact in those you see. It can also be useful for working with money. It returns the number as a string with the number of decimal places given. You will incur rounding.

<?prettify?>
```
var myNumber = 55.39821;
myNumber.toFixed(2); // 55.40 ... and perfect for money
myNumber.toFixed(4); // 55.3982
myNumber.toFixed(6); // 55.398210
```

####[toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
Similarly to `toFixed`, this will return a string with a number written  to a specified length. If you know you are going to display a number, but are limited to a certain number of characters, this could be useful.

<?prettify?>
```
var num = 391.590093;
num.toPrecision(3); // '392'
num.toPrecision(4); // '391.6'
num.toPrecision(5); // '391.59'
```

####[isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
It may be useful to check if your value is an integer. An integer for our purposes is a whole number (no decimals). Anything with a decimal is considered a floating point number. This can be confusing at times, because in JavaScript they are all the same type.

<?prettify?>
```
var number = 55.79;
console.log(Number.isInteger(number)); // false....remember integers are whole numbers
```

####[toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
Sometimes you want to show a number in exponential format, especially with big numbers. This method returns a string, with a number rounded using exponential notation.

<?prettify?>
```
var num = 54483290;
num.toExponential(); // '5.448329e+7'
num.toExponential(2); // '5.45e+7'
num.toExponential(4); // '5.4483e+7'
num.toExponential(6); // '5.448329e+7'
num.toExponential(8); // '5.44832900e+7'
```

---

Sometimes we need to convert other types to a number. We have some helper methods to do that.

- **Number()**
- **parseInt()**
- **parseFloat()**

####[Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
This is used to convert other types directly to a number. If it cannot be converted to a number it returns `NaN`. The `+` can also be used as a shorthand method.

<?prettify?>
```
Number('55'); // 55
Number('abc'); // NaN
// + shorthand
var numStr = '123';
+numStr; // 123
```

####[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
If you have a string and need to parse a number from it this is your friend. This method will parse a string and return a *whole number* (no decimal places). Spaces are allowed. Only the first number is returned. If the number cannot be converted `NaN` is returned.

<?prettify?>
```
var num = '155.55';
parseInt(num); // 155
num = '5 10 15';
parseInt(num); // 5 ... only returns first match
num = '100 dollars'; 
parseFloat(num); // 100
num = 'dollars 100';
parseFloat(num); // NaN
```

####[parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
Just like the above, this method parses a string and returns a number, *including decimal places*. Spaces are allowed. Only the first number is returned. If the number cannot be converted `NaN` is returned.

<?prettify?>
```
var num = '220.10';
parseFloat(num); // 220.10
num = '5.08 10.1';
parseFloat(num); // 5.08 ... only returns first match
num = '100 dollars';
parseFloat(num); // 100
num = 'dollars 100';
parseFloat(num); // NaN
```

We have just touched on the tip of the iceberg. There are a vast array of both methods and properties that can help when dealing with numbers. As we always sign off, visit MDN for a full list of methods and keep this lesson in the back of your mind when solving a numerical problem in JavaScript. These methods and properties will surely help.

---

**Further Reading:**

- [Number - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Number methods - W3 Schools](http://www.w3schools.com/js/js_number_methods.asp)


