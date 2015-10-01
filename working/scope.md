Welcome back! Now that you have gone through the basics of the language, it is important for us to "glance under the hood" to understand some key foundations that are not so obvious on the surface. Today, we introduce **Scope** and how JavaScript creates it. Scope is basically a collection of variables and rules for how they can be referenced. In JavaScript, each function gets its own scope.

JavaScript follows the rules of lexical scope, which allows code to access variables in its own scope and those outside of it. In JS we generally have *global*, *local*, and *private* scope. Think of going to the Apple store and trying to buy an iPhone. The genius states that the store is out, but they can order it. In this example the store has its own scope, which exists inside the scope of the warehouse, and the warehouse, for ordering the phone, has an outer scope. Let's take a look:

<?prettify?>
```
WAREHOUSE = 'I am a global variable';
var store = 'I am a local variable';

function myFunction() {
  var stockRoom = 'I am a private variable';
}
```

Believe it or not, in this simple example we have three different scopes in action. By omitting the `var` keyword when declaring a variable, your variable will become a global, meaning that it is available to all files and functions in the application. This can sometimes happen by accident and is reason enough to enable `'use strict'` mode, which we will discuss in the near future. Global variables will override other variables with the same name. We will name our globals in all caps. A reason for a global would be configuration settings like an API key. Global scope is the outermost level of scope. In our example above, everybody has access to the warehouse, so it is like a global.

Next we have local scope, which is sometimes referred to as file scope. Local scope contains your top most variables declared with the `var` keyword. All functions in the file will have access to the local scope. Our store is like local scope in the fact that everybody in the store has access to it.

Private, or function scope, is defined to the function, and all functions inside of that. Scope funnels down, not up. I used stock room as an example because it exists in the store, but not everybody has access to it.

Variables with the same name can exist in different scope, but not the same. The innermost scope variable will rule. If you try to access a variable that is in a more private scope, meaning it is unavailable, you will receive a `ReferenceError`.

The following should illustrate that we can have two variables with the same name in different scopes.

<?prettify?>
```
function myFuncOne() {
  var a = 1; // my own scope
  console.log(a);
}

function myFuncTwo() {
  var a = 2; // my own scope
  console.log(a);
}

myFuncOne(); // 1
myFuncTwo(); // 2
```

Now, let's try some nesting.

<?prettify?>
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

We can see here that the inner function `myFuncTwo` had access to its own variables and the outer ones of `myFuncOne`, but when `myFuncOne` tried to access variable `b` inside `myFuncTwo` it threw a `ReferenceError` because it was not allowed access. Think of this as a sort of protection, and keep yourself safe by defining variables in the most private scope possible. It definitely takes a while to get a feel for this.

Let's take a stab at our iPhone situation. This is going to be the exercise of the day, but think about scope as we go through. Our problem is that a customer wants to buy a phone, but we need to check availability before making the sale. Let's write some code to check the availability.

<?prettify?>
```
var warehousePhoneCount = 50;
var portlandStorePhoneCount = 0;
var orderLocation;

function checkLocation () {
	// see if phone is available at locations
}

function updatePhoneInventory () {
	// mark change to inventory
}

function checkPhoneAvailability () {
	// check if phone is available and tell us the deets
}

checkPhoneAvailability();
```

What I've done here is define what I'm going to need, or at least think I'm going to need. I've planned out my design, and now it's clear what this will do. All that's left is to figure out the logic of each function.


Let's look at each one individually, starting with `checkLocation`. We have a couple variables that set inventory levels at each location, as well as an `orderLocation` which we have left as `undefined`. We will set this when we determine where the phone is available. The `checkLocation` function needs to check each location for the availability of our phone, and if so what that location is. I'm going to accomplish this with an `if...else` conditional.

<?prettify?>
```
function checkLocation () {
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
```

The `updatePhoneInventory` is quite trivial, in that it simply subtracts one from the inventory, which is assuming we are going to continue buying it. I will leave this for you to expand on later. I've decided to give this function a `location` parameter so our function is reusable. We will pass the `orderLocation` variable as the argument for this.

<?prettify?>
```
function updatePhoneInventory (location) {
	location --;
}
```

The `checkPhoneAvailability` function basically kicks everything off. I've decided to use another conditional for this, which is going to evaluate the result of `checkLocation`. Remember that it returns a boolean. I told you understanding conditionals was a prime foundation for a good developer : ) If that evaluates to true, meaning there is inventory at one of our locations, this function will print a message stating that our phone is available and where. If not, it simply says out of stock. We do this with string concatenation.

<?prettify?>
```
function checkPhoneAvailability () {
	if ( checkLocation() ) {
		updatePhoneInventory(orderLocation);
		console.log("Awesome! Your phone is available at our " + orderLocation + " location.");
	} else {
		console.log("Sorry, we are out of stock.");
	}
}
```

All we have to do is call `checkPhoneAvailability` to see it in action.

<?prettify?>
```
// this script will check phone availability
// it will tell us the result and location

var warehousePhoneCount = 50;
var portlandStorePhoneCount = 0;
var orderLocation;

// check locations for inventory. sets order location. returns a boolean
function checkLocation () {
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

/*
 * subtracts one from location
 * @param {string} location - inventory location
*/
function updatePhoneInventory (location) {
	location --;
}

// if there is inventory update it and tell us where
function checkPhoneAvailability () {
	if ( checkLocation() ) {
		updatePhoneInventory(orderLocation);
		console.log("Awesome! Your phone is available at our " + orderLocation + " location.");
	} else {
		console.log("Sorry, we are out of stock.");
	}
}

checkPhoneAvailability();
// Awesome! Your phone is available at our warehouse location.
```

It looks like the Portland store didn't have it, but the warehouse came through for us. Cool beans!

---


I hope you are starting to see your skills come together and scope is making sense. I encourage you to dig deeper into this exercise. This what meant to give you a starting point. There are a lot of improvements we could make. Try to add functionality for the actual buying process, which might include adding price and tax variables and some logic to handle that. You could add more locations and multiple phone models/colors. It really just keeps going, but always remember to keep the user in mind. We want to create the best experience for them.

To quick wrap up. There are three types of scope: *global*, *local*, and *private*. We avoid global scope because it causes confusion and errors, and we define variables in the most private scope possible to avoid conflict and the pollution of our namespace.

See how naturally your JavaScript foundations are shining through?! With practice, soon you won't even be thinking about scope, and it will just be natural! Chew on this for the night, and remember there is always green on the other side. They say if you stare at code long enough it will eventually make sense. Stay tuned for another peek under the hood at *hoisting*.