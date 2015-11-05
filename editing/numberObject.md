It is imporatant to note that Number is a type, and the object is just something all numbers have access to, giving it valuable properties and methods.
Talk about some specifics from book, like floating point specification.




As we begin to understand Javascript and how this language works, it is important to understand the Number Object. We have used numbers extensively, whether it be in our fizzbuzz function that uses conditionals to identify multiples of 3,5,15 or in the use of arrays to contain a multitude of numbers, they are everywhere. Where better to start than to understand the native `Number` object and how it works in JavaScript.

Lets start by highlighting the two ways in which a number object is create (this is something we have subconciously done throughout our previous lessons).

There are two ways we can create our number object: through variable assignment and explicit assignment.

##Variable Assignment

<?prettify?>
```
var number = 22.347;
```

It's as simple as that. Now we have a number object we can perform native methods on that we will delve into later.

##Explicit Assignment

<?prettify?>
```
var number = new Number(22.347);
//note that you must pass a numerical value to the constructor
var number = new Number('I am a string'); //returns NaN (not a number)
```

Not only does this seem repetetive, it is. Explicitly creating a Number object is seldomly used. However, keep in mind that the `Date` object uses it extensively, so be on your toes when we introduce Dates, *soon*.

Think of the number object as a wrapper allowing you to work with numbers by accessing the properties and methods the number object inherits.

Now that we know how easy it is to create the number object, lets look at properties and methods that can be helpful when solving problems that involve math.

##Number Properties
Number properties are essentially just values associated with the number object. You do not have to provide any parameters and these properties are native to this object.
Note: we do not need to use our new Number constructor to access these properties.

Number.MAX_VALUE: represents the maximum numeric value representable in JavaScript, which is 1.79E+308. Values larger than MAX_VALUE are represented as "Infinity".

<?prettify?>
```
var bigNumber = Number.MAX_VALUE;
console.log(bigNumber); //9007199254740992
```

Number.MIN_VALUE: represents the smallest positive numeric value representable in JavaScript, which is 5e-324. Values smaller than MIN_VALUE ("underflow values") are converted to 0.

<?prettify?>
```
var smallNumber = Number.MIN_VALUE;
console.log(smallNumber); //-9007199254740992
```
Number.POSITIVE_INFINTY: represents a specific static property in javascript. If we are ever in a situation when dealing with extremely large numbers we can have overflow. Overflow in lemans terms is simply when a number has become larger than our MAX_VALUE property of 9007199254740992 and cannot be processeb by javascript. Lets check if a number has exceeded this maximum value and returns infinity.

<?prettify?>
```
var bigNumber = Number.MAX_VALUE*2;
consolelog(bigNumber === Number.POSITIVE_INFINITY) //true
//this static property can be very useful in determining whether number are too big for the javascript language

```


Number.NaN: represents Not-A-Number. While NaN is a property of the global javascript object it translates very well to our number object. Note that this is a special value used for unrepresentable values. It is important to note that we cannot compare NaN values to each other. Lets take a look:
<?prettify?>
```
console.log(NaN === Number.NaN) //false

```


##Methods
Here is where it gets more interesting. Number methods are actions performed on the numbers we have created. We need to create our number object for these methods to be of any use.

toString(): Converting a number to a string will be an incredibly useful method. Whether we want to store our numerical data as a sting in an array or alert our user that they have "30 seconds left" we will use `toString()`.


<?prettify?>
```
var number = 24;
var statement = ' second shot clock';
var shotClock = number.toString + statement; //this is a round-about way of adding a string to a number
//lets reimplement our shotClock variable
var shotClock = number + statement; //When a number is added to a string it will be converted to a string in the process
console.log(shotClock); //'24 second shot clock'
```

isNaN(): There will be times when we want to check whether our value is NaN

<?prettify?>
```
var ourSalary = 772,200; //I wish!
console.log(ourSalary.isNaN()); // true
//javascript does not recognize commas when dealing with numbers. 
```

isInteger(): Conversly it is useful to check if you value is an integer

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