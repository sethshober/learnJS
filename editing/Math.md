As we delve into JavaScript further it is important to understand how to peform mathematical operations. There is a native JavaScript object, `Math`, to help us do that. This includes `static` properties and `dynamic` methods useful in modifying numbers and providing data to your audience. Below I will provide a list of examples for useful properties and methods associated with the math object. Keep in mind MATH is an incredibly vast topic, and the object itself contains a plethora of mathematical operations encompassing a large area within the field. I will focus this lesson on the basics to get you started. If you find yourself still curious we always encourge further research. We are just your kickstarter.

##Math Methods

**Math.random()** 
Math.random() provides a random number between 0 and 1. 0 is inclusive. 1 is exclusive.
In the following example we will create a function to utilize math's randomizer 

<?prettify?>
```
function getRandomNumber(){
	return Math.random(); //0.17178424587473273
} 
```

**Math.ceil(number)** 
Math.ceil() returns a number rounded **UP** to the closest integer.

<?prettify?>
```
Math.ceil(-.04);  // 0
Math.ceil(55.12); // 6
Math.ceil(66.86); // 67
```

**Math.floor(number)** 
Math.floor() is a Math method used to round a float **DOWN** to the nearest whole interger.
<?prettify?>
```
Math.floor(.99); // 0
Math.floor(112.12); // 112
Math.floor(88.88); // 88
```
Let's incorporate Math.floor() and Math.random() to produce a random integer between 0 & 100
<?prettify?>
```
Math.floor(Math.random()*100) + 1) // 38
// Math.random() * 100 => produces a floating a point between 0 & 99. Let's say 76.178424587473273
// 99.999999999999999 is the largest number we can obtain, thus the + 1 allows us the possibility to reach 100 rounding down
```


<?prettify?>
```
// Return a random number between 1 and 100:
function getRandomNumber(topValue){
  return Math.floor((Math.random() * topValue) + 1);
}
getRandomNumber(100)
```

**Math.round()**
Math.round() is used to round numbers to the nearest whole number.

<?prettify?>
```
const CA_TAX = 0.0925;
function rounder(price){
  var price = price * (1 + CA_TAX);
  return Math.round(price);
}
rounder(25.43);
//returns 28 = number after taxes rounded to the nearest whole number
```
In this example we created a rounder function to round our product to the nearest whole number after we accounted for tax.


**Math.min(x1, x2, ..., xi)** 
Math.min() returns the lowest number in a set of numbers. If no arguments are given the result is infinity, and if an input is not valid, the result is NaN.

<?prettify?>
```
x = -12;
y = 23;
z = Math.min(x,y);
// z is assigned to the lowest value in the set (x,y) in this case -12.
```

**Math.max(x1, x2, ..., xi)** 
Math.max() provides the largest number out of a set of data.

<?prettify?>
```
// Find the tallest person in the room using an array of cm heights.
var heigthArray = [123, 147, 133, 154, 176, 201, 188]; 
function tallest (heightArray){
	getMaxOfArray(heightArray); //prototype constructor of the Math.max() method
}
// returns 201
```

**Math.pow(x,y)** 
Math.pow() returns the value of x to the power of y.

<?prettify?>
```
Math.pow(10,2) = 100.
```

Along with these dynamic methods, there are also a variety of properties that are static and act as a reference point for mathematical calculations. Below are a few of them. 

##Math Properties

**Math.PI** 
Math.PI returns the value of PI (3.14....).

**Math.SQRT_2**
**Math.SQRT1_2** 
Returns the square roots of 2 and 1/2 respectively

**Math.LN10**
Math.LN returns the natural log of 10.

Feel free to delve into these methods. Math is a incredibly useful object in JavaScript and knowledge of these methods can make life easier when presenting numbers.
For more information and a list of all the methods and properties associated with Math, checkout Mozilla Developers Network.

