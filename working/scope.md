Welcome back! Now that you have gone through the basics of the language it is important for us to go through how JavaScript works under the hood. To do this we will introduce **Scope**, go through the different types of scope available in Javascript, and introduce Closures, specific functions where scope plays a major role that have risen to the forefront of difficult JavaScript interview questions.

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
Understanding Local functional scope is key to tackling the problem of Closures which we will introduce later. Local Functional scope is essentially the just scope only a 