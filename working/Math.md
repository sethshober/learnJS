As we delve into javascript further it is important to understand MATH. MATH is a native javascript object that encompasses methods to perform on both integers and floats. 

As you might assume, the math method performs mathematical tasks on numbers. These methods are useful in modifying numbers and providing dynamic data to your audience. Below I will provide a list of examples for useful methods associated with the math object. Keep in mind MATH is an incredibly vast topic and the object itself contains a plethora of methods encompassing a large area within the field. I will focus this lesson on ones that have real world properties.



**Math.random()** 
Math.random() provides a random number between 0 and 1
In the following example we will create a function to utilize math's randomizer 
```
function getRandomNumber(){
	Math.random()*100;
}
//returns a random number between 10-100. 
```

**Math.round()**
Math.round() is used to round numbers to the nearest whole number.
```
var CAcrv = 0.0925;
var product;
function rounder(product){
	product = product*(1+CAcrv);
	Math.round(product)
}
rounder(25.4321);
//returns 28 = number after taxes rounded to the nearest whole number
```
In this example we created a rounder function to round our product to the nearest whole number after we accounted for tax.

**Math.ceil(number)** 
Math.ceil() returns a number rounded UP to the closest integer.
```
Math.ceil(-.04);  //0
Math.ceil(55.12); //6
Math.ceil(66.86); //67
```


**Math.floor(number)** - 
Math.floor() is a Math method used to round a float DOWN to the nearest whole interger.
```
Math.floor(.99); //0
Math.floor(112.12); //112
Math.floor(88.88); //88
```


**Math.min(x1, x2, ..., xi)** 
Math.min() returns the lowest number in a set of numbers. If no arguments are given the result is infinity and if an input is not valid, the result is NaN.
```
x = -12;
y = 23;
z = Math.min(x,y);
//z is assigned to the lowest value in the set (x,y) in this case -12.
```

**Math.max(x1, x2, ..., xi)** 
Math.max() provides the largest number out of a set of data.
```
//Find the tallest person in the room using an array of cm heights.
var heigthArray = [123, 147, 133, 154, 176, 201, 188]; 
function tallest (heightArray){
	getMaxOfArray(heightArray); //prototype constructor of the Math.max() method
}
//returns 201
```

Along with these dynamic methods (require input from your program in the form of data), there are also a variety of properties that are static and act as a reference point for mathematical calculations. Below are a few of them. 

**Math.pow(x,y)** 
Math.pow() returns the value of x to the power of y. Pow is a static method in Math and thus cannot be used like the examples above as constructors. 
```
Math.pow(10,2) = 100.
```

**Math.PI** 
Math.PI returns the value of PI (3.14....).

**Math.SQRT_2**
**Math.SQRT1_2** 
Returns the square roots of 2 and 1/2 respectively

**Math.LN10**
Math.LN returns the natural log of 10.

Feel free to delve into these methods. Math is a incredibly useful object in javascript and knowledge of these methods can make life easier when presenting numbers.
For more information and a list of all the methods and properties associated with Math, checkout mozilla developers network.

