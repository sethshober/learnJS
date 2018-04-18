As we delve into JavaScript further it is important to understand how to perform mathematical operations. In JavaScript there is an object called `Math` that will help us out. This includes properties and methods useful in modifying numbers and providing data to your audience. Below I will present some of these in an effort to provide an introduction to doing math in JavaScript. Keep in mind math is an incredibly vast topic, and the `Math` object itself contains a plethora of mathematical operations encompassing a large area within the field. I will focus this lesson on the basics to get you started. If you find yourself still curious we always encourage further research. We are just your kickstarter.

---

##Math Methods

**[Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)** provides a random number between 0 and 1, including 0 but not 1.

<?prettify?>
```
// your results will vary
Math.random(); // 0.2898583256173879
Math.random(); // 0.17178424587473273
```

**[Math.ceil(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)** and **[Math.floor(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)** are used to round numbers. `Math.ceil` rounds numbers **UP** to the closest integer, where `Math.floor` rounds numbers **DOWN**.

<?prettify?>
```
Math.ceil(.04);  // 1
Math.ceil(55.12); // 56
Math.ceil(66.86); // 67

Math.floor(.99); // 0
Math.floor(112.12); // 112
Math.floor(88.88); // 88
```

Let's incorporate Math.floor() and Math.random() to produce a random integer between 1 & 100.

<?prettify?>
```
// results will vary
Math.floor(Math.random() * 100) + 1; // 38
// Math.random() * 100 => produces a number between 0 & 99.9999.
// Then we round it down, so we are limited to 0 and 99.
// the + 1 allows us the possibility to reach 100, accounting for the rounding down

// written as a function
function getRandomNumber(lowVal, highVal){
  return Math.floor(Math.random() * highVal) + lowVal;
}
getRandomNumber(1, 100);
```

**[Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)** is used to round numbers to the nearest whole number.

<?prettify?>
```
Math.round(5.75); // 6
// round a price of a product after accounting for sales tax
const CA_TAX = 0.0925;
function rounder(price){
  var price = price * (1 + CA_TAX);
  return Math.round(price);
}
rounder(25.43);
// returns 28 = number after taxes rounded to the nearest whole number
```

In this example we created a `rounder` function to round our product to the nearest whole number, after we accounted for tax.

**[Math.min(x1, x2, ..., xi)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)** and **[Math.max(x1, x2, ..., xi)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)** return the lowest number in a set of numbers. If no arguments are given the result is infinity, and if an input is not valid, the result is `NaN`.

<?prettify?>
```
var x = -12;
var y = 23;
z = Math.min(x, y); // -12
// z is assigned to the lowest value in the set (x,y) in this case -12.
Math.max(x, y); // 23
```

**[Math.pow(x,y)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)** returns the value of x to the power of y.

<?prettify?>
```
// 10^2 or 10 * 10
Math.pow(10, 2); // 100
// 4^8
Math.pow(4, 8); // 65536
```

**[Math.sqrt(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)** returns the square root of a number.

<?prettify?>
```
Math.sqrt(16); // 16
Math.sqrt(99); // 9.9498743710662
```

Along with these methods, there are also a variety of properties to represent certain mathematical constants, that may be great references for some of your calculations.

---

##Math Properties

**Math.PI**: Returns the value of PI.

**Math.SQRT_2**: Returns the square root of 2.

**Math.SQRT1_2**: Returns the square root of 1/2, which is equivalent to 1 over the square root of 2.

**Math.E**: Returns [Euler's constant](https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant) and the base of natural logarithms.

**Math.LN2**: Returns the natural logarithm of 2.

**Math.LN10**: Returns the natural logarithm of 10.

**Math.LOG2E**: Returns the base 2 logarithm of E.

**Math.LOG10E**: Returns the base 10 logarithm of E.

<?prettify?>
```
Math.PI        // 3.141592653589793
Math.SQRT2     // 1.4142135623730951
Math.SQRT1_2   // 0.7071067811865476
Math.E         // 2.718281828459045
Math.LN2       // 0.6931471805599453
Math.LN10      // 2.302585092994046
Math.LOG2E     // 1.4426950408889634
Math.LOG10E    // 0.4342944819032518
```

Feel free to delve into these methods and properties available to us via the `Math` object, as math is an incredibly useful thing in JavaScript, and programming in general. Knowledge of how to perform mathematical operations in programming will make life easier when presenting numbers. For more information and a list of all the methods and properties associated with `Math`, checkout Mozilla Developers Network.

---

**Further Reading:**

- [Math Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Math Object - W3 Schools](http://www.w3schools.com/js/js_math.asp)
