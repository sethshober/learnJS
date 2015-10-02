Welcome back. Today we will focus on **Hoisting**. While Hoisting is imparative in understanding the tendancies of the javascript language, many developers simply skim it over and fail to grasp the builing blocks of the language. Were are here to help you understand what makes this beautiful language tick.

Alright, lets dive into hoisting. Before we dive into hoisting in examples lets explain the two concepts at the forefront of this important javascript concept.

**Declaration**
A variable declaration is when you create your variable at the top of your javascript file and do not assign it a value. You are simply announcing that you are going to use it without tying a function, string, etc. to it. All variable declarations *do* get hoisted to the top of their current scope.
```
var declare; //I have just declared a variable
```




**Initialization
A variable initilization is when you not only announce a variable but tie a value to it as well. Initialized variables *do not* get hoised. Instead only the declaration is hoisted and the value assigned to it will be set to undefined. Essentially on the left side of your variables will get hoisted to the top of the current scope. Lets see:
```
var initialize = "I initialized my variable"
//I have initializing my variable by assigning it to a string
```

Lets combine both concepts and look at the following function:
```
function hoist() {
var first = 'my first variable initialized';
var second = 'my second variable initialized';
}
hoist();
```
Lets take a look behind the scenes. When this piece of code is run, all of the variable declarations are hoisted to the top of the local scope.
Here is what this function looks like when it is run:
```
function hoist() {
var first, second; //declarations
var first = 'my first variable initialized'; //initialize
var second = 'my second variable initialized'; //initialize
}
hoist();
```

Slowly but surely we are starting to understand how javascript works under the hood.
Now that we have gone over the basics lets look at an example that shows hoisting at its finest.
```
var newVar = 'My New Variable';

function newFunction(){
alert(newVar);
var newVar = 'local variable in local functional scope';
}
newFunction();
```
The question is what is the value of the javascript alert when our function is called. We know from previous lessons that the alert should be associated with the value newVar which is a string and thus the string will be inserted into the popup text box. **Wrong**

Since only declarations are hoisted to the top of their inherent scope and thus set to undefined we can rewrite our function to look like this:
```
var newVar;
var newVar = 'My New Variable';

function newFunction(){
var newVar;
alert(newVar); //undefined
var newVar = 'local variable in local functional scope';
}
newFunction();
```
The alert only has access to the variable declaration in this example and is thus set to undefined.

As you can see hoisting is an important concept to understand and can really affect the code you write. Part of being a good developer is the understand of the tool you use, in this case javascript.

We will be back at you next week with new concepts as we further our knowledge of this beautiful langauge.