Introduction


//syntax
function name(parameter1, parameter2, parameter3) {
  code to be executed
}


Some placeholder content:

==========

W3 Schools
> A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

MDN
> Generally speaking, a function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function can return a value. In JavaScript, functions are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object. Specifically, they are Function objects.

> MDN function guide
Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

==========

"In JavaScript, functions are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object. Specifically, they are Function objects."

This is something that is special to JavaScript compared to other programming languages, and part of why it is such a flexible and powerful language.


---




function expression vs declaration


Best Practices


calling / invoking


Arguments & Parameters


Scope


Return statement


Reusable code


comments and readability. should be descriptive and if possible explain itself without a comment






---

IFFES

(function() {
  // the code here is executed once in its own scope
})();

defensive semicolon

---







**Further Reading:**

- [Guide to Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Functions - W3 Schools](http://www.w3schools.com/js/js_functions.asp)
- [Best Practices - tuts+](http://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)