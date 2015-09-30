Welcome back! Now that you have gone through the basics of the language it is important for us to "glance under the hood" to understand some key foundations that are not so obvious on the surface. Today, we introduce **Scope**, a foundation of any language, and how JavaScript creates scope. Scope, technically lexical scope, is basically a collection of variables and rules for how they can be referenced. In JavaScript, each function gets its own scope.

JavaScript follows the rules of lexical scope, which allows code to access variables in its own scope and those outside of it. In JS we generally have global, local, and function scope. Think of going to the Apple store and trying to buy an iPhone. The genius states that the store is out, but they can order it in. In this example the scope is the scope is the store, and the warehouse for ordering the phone from is an outer scope. Let's take a look:

```
globalVariable = 'I am a global variable';
var localVariable = 'I am a local variable';

function myFunction() {
	var privateVariable = 'I am a private variable';
}
```

Believe it or not, in this simple example we have three different scopes in action. By omitting the `var` keyword when declaring a variable it will become a global, meaning that it is available to all files and functions in the application. This can sometimes happen by accident and is reason enough to enable `'use strict'` mode, which we will discuss in the near future. Global variable will override other variables with the same name. Remember, we name our globals in all caps as a reminder. A reason for a global would be configuration settings like an API key. Global scope is the outermost level of scope.

Next we have local scope, sometimes referred to as file scope, are your top most variables declared with the `var` keyword. All functions in the file will have access.

Function, or private, scope, is defined to the function, and all functions inside.

Variables with the same name can exist in different scope, but not the same. The innermost scope variable will rule.

If you try to access a variable that is in a more private scope, meaning it is unavailable, you will receive a `ReferenceError`.



```
function myFuncOne() {
	var a = 1;
	console.log(a);
}

function myFuncTwo() {
	var a = 2;
	console.log(a);
}

myFuncOne(); // 1
myFuncTwo(); // 2
```

This should illustrate that we can have two variables with the same name in different scopes. Now, let's try some nesting.

```
function myFuncOne() {
	// we only have access to a
	var a = 1;

	function myFuncTwo() {
		// we have access to var a and b
		var b = 2;
		console.log(a); // 1
		console.log(b); // 2
	}

	myFuncTwo();
	console.log(a); // 1
	console.log(b); // ReferenceError

}

myFuncOne();
```

We can see here that the inner function `myFuncTwo` had access to its own variables and the outer ones of `myFuncOne`, but when `myFuncOne` tried to access variable `b` inside `myFuncTwo` it threw a ReferenceError because it was not allowed access. Think of this as a sort of protection, and keep yourself safe by defining variables in the most private scope possible. It definitely takes a while to get a feel for this.

Let's take a stab at our iPhone situation. This is going to be the exercise of the day, but think about scope as we go through. Our problem is that a customer wants to buy a phone, but we need to check availability before making the sale.

```
var warehousePhoneCount = 50;
var portlandStorePhoneCount = 0;
var orderLocation;

function checkPhoneCount () {
	if ( portlandStorePhoneCount > 0 ) {
		orderLocation = 'Portland';
		return true;
	} else if ( warehousePhoneCount > 0 ) {
		orderLocation = 'warehouse';
		return true;
	} else {
		return false;
	}
}

function updatePhoneInventory (location) {
	location --;
}

function buyPhone () {
	if ( checkPhoneCount() ) {
		updatePhoneInventory(orderLocation);
		console.log("Awesome! Your phone is available at our " + orderLocation + " location.");
	} else {
		console.log("Sorry, we are out of stock.");
	}
}

buyPhone();

```


See how naturally our JavaScript foundations are shining through?! With practice, soon you won't even be thinking about scope, and it will just be natural! Chew on this for the night, and remember there is always green on the other side. They say if you stare at code long enough it will eventually make sense. Stay tuned for another peek under the hood at *hoisting*.



















There are three main types of scope we will go over to get an understanding for how you should name your variables.

###Global Scope###
Before we delve into this topic it is important to know that Global variables are mostly frowned upon by the programming community. Essentially Global Variables are just varaible declarations without the "var" keyword. Not including this one word has a major effect on the project you are working on. Making your variable global gives it access to every javascript file within your directory. This makes code harder to read, can result in silent errors making your code harder to read, and will override any local variable with the same name.  We will descibe silent errors in detail when we introduce 'use strict'.

Take this example:
```
global = 'I am a global';
var global = 'I think I am a Global Variable';
```
The variabe declared in the example will overwrite any variable with the same name using the "var" keyword.

```
function myGlobalFunction(){
	global = 'I am a global available everywhere';
}
```

###Local Scope###
Now that we have gotten through Global scope, lets take a look at Local Scope, which is something you should be familiar with and also a key to good code writing.  Local Scope is essentially a variable declared outside a javascript function using the keyword "var". This give your entire .js file access to the variable allowing you to use it in any function within the page. 

Here is an example:
```
var localVariable = 'I am a local variable';
function myLocalVariable(){
	//You can use localVariable within this function as well as any others within the page
}
```
Since we have defined this variable using the keyword "var" and placed outside the function all functions in this file have access to it.

###Local Functional Scope###
Understanding Local functional scope is key to tackling the problem of Closures which we will introduce later. Local Functional scope is essentially scope only a specific fuction can access. When you declare your variables within a function they are owned by that function and only that function and use,reference, and access them

Lets take a look at an example:
```
function localFunctionalScope (){
	var myLocalVariable = 'I am only available here';
}
```
As you can see when introducing local variables within functions they can only be accessed by that specific function. 

We will let you chew this in for a night before diving into Closures. Things may get hairy but there is always green on the other side. Take some time to let this sink in and we will get at you tomorrow.