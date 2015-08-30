‘Use Strict’

After doing some coding you may have seen the statement on the top: ‘use strict’.  Just like most of you I had no idea what that meant and moved forward with building my application.  However, ‘use strict’ has become an incredibly useful way to promote good, scalable javaScript.  This string essentially tells the javascript-engine interpreter to be more picking when going through your code.

What ‘use strict’ does:


	Produces a reference error when defining global variables (assigning variables without using var). This reference error also catches global assigned within functions.
	x = 32; //reference error due to the destruction global variables cause in your directory. Last thing we want is x to be assigned to 32 in every jabascript file.
	function addNum (y) {
	x = 32;
	console.log(x + y);
	} //addNum(22) should return 54, however with 'use strict' it returns a reference error due to the global variable assignment being hoisted by x.


	If you try to write to a global object strict mode throws an assignment error.
	null.hello = 'hello null';
	NaN.hello = 'hello not a number';
	You cannot write properties to objects provided by the javascript library or any third party library.


	If you try to delete properties of an undeletable object you will get a type error in strict mode.
	delete Date.prototype.getDate();
	While you may not encounter it much, you cannot delete objects provided by javascript or any other third party library.


	When creating an object with duplicate keys, strict mode you get a syntax error.
	var newObject {
		duplicate: 'I am a value of duplicate',
		duplicate: 'I am also a value of duplicate'
	}
	This is terrible programming as duplicate can only have one value even though two are defined. The second value simply overwrites the first.


	Functions cannot have duplicate parameter names and in strict mode it will fail.
	var addNum (x,y,z,x){
		console.log(x+y+z);
	}
	Again this is terrible programming and should never execute.


	The use of octal numbers is not allowed in javascript (040) and will throw a syntax error in strict mode.
	var ocatlNum = 020;
	Although extremely rare, octals are not allowed in strict mode.


	In strict mode, delete cannot be used to delete variables or plain objects. You can only delete properties within objects, arrays, etc.
	var deleteMe = 'I am a variable';
	delete deleteMe;
	In 'use strict' mode you can delete a property of an object, however you cannot delete a number, string, variable, object you have defined in your code.



Use Strict is important not only for good code writing but helps throw errors that would otherwise be silent.
