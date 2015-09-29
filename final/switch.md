Yesterday we talked about `if` and `else`. Today we are going to discuss an alternative, the `switch` statement, which is the fourth conditional available to us. While not as common as `if` statements, `switch` statements have their place to shine, providing a number of advantages, all while being just as easy to implement.

What is a switch statement? A switch statement evaluates an expression and matches the result to the corresponding case. They are used to perform different actions based on different conditions, much like the if.

Why use a switch statement? Generally you will default to using an if statement, but sometimes there will be a lot of else clauses, and it can become cluttered and difficult to read. It also becomes slow to interpret. In comes the switch. After about 4 or more else clauses it may become faster to run your code with a switch statement, and arguably more readable. Let’s take a look:

<?prettify?>
```
//syntax
 switch(expression) {
   case n:
     code block
     break;
   case n:
     code block
     break;
   default:
     default code block
 }

// this outputs “Hello, how are you?”
 var greeting = “hello”;
 switch (greeting){
   case “hello”:
     console.log(“Hello, how are you?”);
     break;
   case “goodbye”:
     console.log(“Goodbye, nice to meet you”);
     break ;
   default:
     console.log(“Nothing found.”);
 }
```

So, what just happened? First we declared the greeting variable and assigned it the value of `hello`. Then we ran the switch passing in our greeting variable for the expression. What the `switch` does is take the value passed to it and checks each case for a match. If it finds a match it will run the code for that case. The `break` statement is key in the switch. The break statement is used to break out of a loop, which in this case ensures only the case it hits is run, else it would keep running down the list of cases looking for another case to execute. It is best to put a default case at the end, to indicate what to do if nothing is matched.

Let’s look at another example that is more useful. Let’s have the computer tell us if it’s the weekend or not.

<?prettify?>
```
// new Date().getDay() returns a value 0-6
// the switch evaluates that expression
// output will depend on what day you run this

switch (new Date().getDay()) { 
  case 6:
    console.log(“Today is Saturday”);
    break; 
  case 0:
    console.log(“Today is Sunday”);
    break; 
  default: 
    console.log(“Looking forward to the Weekend”);
}
```

Sometimes we want multiple cases to run the same code block. In these cases we can create a fall-through. Fall-throughs can be useful, but they can easily be overlooked. Another developer might see the break statement missing and add it back in, so it’s probably best to leave a comment.

<?prettify?>
```
/*
note the default case does not have to be at the end.
we removed breaks because we want case 1,2,3 to fall through to default. output will depend on what day you run this.
*/

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  default: 
    console.log(“Looking forward to the Weekend”);
    break; 
  case 4:
  case 5:
    console.log(“Soon it is Weekend”);
    break; 
  case 0:
  case 6:
    console.log(“It is Weekend”);
}
```

As the number for cases grow, the harder it becomes to maintain. Switch statements are far from bullet proof, leaving some things like the break statement to user error, and often why they are not as common. Far before you run into any issues with the interpreter hitting your bajillion cases, you will find that it is too difficult to maintain as a switch. There are alternatives and things we can do if we find we are at a point where we have too many cases, and it just no longer makes sense, but this is far beyond where we are at and will depend on your use case. We will jump back to those alternatives down the road. For now, feel confident using the switch statement.