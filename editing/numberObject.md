As we begin to understand Javascript and how this language works, it is important to understand numbers and the `Number` Object. We have used numbers quite a bit already, including our FizzBuzz function that uses conditionals to identify multiples of 3 and 5 and in the use of arrays to contain a multitude of numbers. They are everywhere. Where better to start than to understand the native `Number` object and how it works in JavaScript. The following is intended to be a reference and introduction. Further questioning and research is encouraged.

The first thing to note is that 'number' is a type and the 'Number' object is an object with properties and methods available to all numbers. Let's start with a quick review on the number type.

All numbers, both integers and fractional decimals, are considered the type `number` in JavaScript. We create them in a literal fashion as follows:

<?prettify?>
```
// create a number
var number = 22.347;
typeof number; // 'number'
```

It's as simple as that. Now that we have a number, we can use the `Number` object to perform common tasks with numbers. Let's look at some of the properties and methods available from that object.

##Number Properties
Number properties are values associated with the Number object. These properties are already available to us via JavaScript.

####Number.MAX_VALUE
This represents the maximum numeric value representable in JavaScript, which is `1.79E+308`. Values larger than `MAX_VALUE` are represented as `Infinity`.

<?prettify?>
```
var bigNumber = Number.MAX_VALUE;
console.log(bigNumber); // 1.7976931348623157e+308
```

####Number.MIN_VALUE
This represents the smallest positive numeric value representable in JavaScript, which is `5e-324`. Values smaller than `MIN_VALUE` are converted to 0.

<?prettify?>
```
var smallNumber = Number.MIN_VALUE;
console.log(smallNumber); // 5e-324
```

####Number.POSITIVE_INFINTY
If we are ever in a situation when dealing with extremely large numbers we can have overflow. Overflow is simply when a number has become larger than `Number.MAX_VALUE` and cannot be processed by JavaScript. Let's check if a number has exceeded this maximum value and returns infinity.

<?prettify?>
```
var bigNumber = Number.MAX_VALUE*2;
console.log(bigNumber === Number.POSITIVE_INFINITY) // true
// this static property can be very useful in determining whether number are too big for JS to interpret

```

##Methods
Here is where it gets more interesting. Number methods are actions performed on numbers.

####toString()
Converting a number to a string will be an incredibly useful method. Whether we want to store our numerical data as a sting in an array or alert our user that they have "30 seconds left", we will use `toString()`.

<?prettify?>
```
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

####isInteger()
Conversely it is useful to check if your value is an integer. An integer for our purposes is a whole number (no decimals). Anything with a decimal is considered a floating point number. This can be confusing at times, because in JavaScript they are all the same type.

<?prettify?>
```
var number = 55.79;
console.log(Number.isInteger(number)); // false....remember integers are whole numbers
```

####toExponential()
Let's use our `MAX_VALUE` property to create our number object and set it to the largest number in javascript. Then we will use our new method to shrink our number down to exponential notation

<?prettify?>
```
var reallyBigNumber = 50029947100399027499823983;
console.log(reallyBigNumber.toExponential()); // '5.002994710039903e+25'
```

We have just touched on the tip of the iceberg. There are a vast array of both methods and properties that can help when dealing with numbers. AS we always sign off, visit MDN for a full list of methods and keep this lesson in the back of your mind when solving a numerical problem in JavaScript. These methods and properties will surely help.

---

**Further Reading:**

JavaScript's numbers are based on the **[IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)** standard, also known as 'floating-point', specifically the 'double precision' format (64-bit binary). Read more about the specification if you're a numbers nerd.

Some other languages handle numbers much more specifically, having multiple types. Check out differences.


check if you value is an integer

<?prettify?>
```
var number = 55.79;
console.log(number.isInteger()); //false....remeber integers are whole numbers
```

toExponential(): Lets use our MAX_VALUE property to create our number object and set it to the largest number in javascript. Then we will use our new method to shrink our number down to exponential notation

<?prettify?>
```
var maxNumber = Number.MAX_VALUE;
console.log(maxNumber.toExponential()); //1.79E+308
```

We have just touched on the tip of the iceberg. There are a vast array of both methods and properties that can help when dealing with numbers. AS we always sign off, visit MDN for a full list of methods and keep this lesson in the back of your mind when solving a numerical problem in JavaScript. These methods and properties will surely help.