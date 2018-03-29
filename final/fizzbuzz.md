Now that we’ve been practicing our conditionals it’s time to put them to use. We are going to do a classic programming exercise today, called FizzBuzz. This is not limited to JS, and don’t be surprised if you are asked to do this in an interview for an entry level position. We are going to walk through this exercise and show four different ways to do this, using different conditionals. So let’s get started, why don’t we?!

###Let’s do the FizzBuzz
Programming is all about solving problems, and we think it’s good practice to write your problem in a comment and then follow it up with your solution, so you can reference it as you go. Here’s our problem:

Write a program that prints the numbers from 1 to 100. For multiples of three print “Fizz” instead of the number. For multiples of five print “Buzz” instead of the number. For numbers which are multiples of both three and five print “FizzBuzz”.

With our loops and conditionals powers we can handle this one. Before we get to coding though, let’s think this through first. Planning and design will save you lots of time later. My first thought is we’re going to need a loop since we need to check and log something for each number. Cool, but what is that loop going to execute? For starters, we’re going to need to log each number. Inside the loop we’re going to need to check if the number is a multiple of three or five so we know what to print. It’s not important to have a complete solution for how, but rather just what you would like to accomplish. If we want, we can update with specifics as we go. We can also write pseudo code for parts we aren’t sure of how to do yet.

This is great! Now that we have a good thought process we can code the initial parts we know how to do.

<?prettify?>
```
// The Problem:
  // Write a program that prints the numbers from 1 to 100. 
  // For multiples of three print “Fizz” instead of the number 
  // For the multiples of five print “Buzz” instead of the number 
  // For numbers which are multiples of both three and five print “FizzBuzz”

// The Solution:
  // Write a loop that checks each number for multiples of 3 and 5
  // print the number to the console

// print 1-100
for (var i = 1; i <= 100; i++) {
  // need to add check for multiples of 3 & 5
  console.log(i);
}
```

You can see here that I transferred my planning and thoughts to paper and got our loop working. These are major achievements. Coding in steps helps us see our progress and makes the end goal seem more attainable. Next we need to add our logic. I’m going to use an `if…else` statement to handle the logic that checks for multiples of three and five, but before we can complete that we need to think of a way to find if something is divisible by something. With some googling, you might find and recall the modulo operator, which returns a remainder. If a division returns a remainder of zero, we know it’s divisible. Here is the [MDN on modulo (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder). Let’s update our code.

<?prettify?>
```
for (var i = 1; i <= 100; i++) {
  if ( i % 3 == 0 ) {
    console.log(‘Fizz’);
  }
  else if ( i % 5 == 0 ) {
    console.log(‘Buzz’);
  }
  else if ( i % 3 == 0 && i % 5 == 0 ) {
    console.log(‘FizzBuzz’);
  }
  else {
    console.log(i);
  }
}

/* uh oh! our output isn't quite right. where is FizzBuzz?!
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
Fizz
....
....
*/
```

Ok. Now I have my scenarios coded out to check for multiples of 3, 5, or 3 and 5. Let’s run our code. I just pasted it into my Chrome DevTools to do so. Oops! It’s only printing ‘Fizz’ and ‘Buzz’. Hmm, what could be going on? Inside each iteration of our loop we are checking first if there is a multiple of three, if not then see if it is a multiple of five, and if not, see if it is a multiple of both, and still if no match, let’s just log the number to our console.

What we know is that each of our conditions are getting matched and logged, except for multiples of both three and five. Let’s try rearranging the order. I’m thinking the first two items are catching all the conditions, which is causing our third `if` check not to run.

<?prettify?>
```
for (var i = 1; i <= 100; i++) {
  if ( i % 3 == 0 && i % 5 == 0 ) {
    console.log(‘FizzBuzz’);
  }
  else if ( i % 3 == 0 ) {
    console.log(‘Fizz’);
  }
  else if ( i % 5 == 0 ) {
    console.log(‘Buzz’);
  }
  else {
    console.log(i);
  }
 }
```

Yep, that did it! As we just saw there can be some user error. We had to put our most specific match at the top and then filter down our checks to most general. Coding involves much head banging and hair pulling. Sometimes when you think you have it, you are probably correct, and just have a syntax error or need to rearrange something. Let’s wrap it in a function so we can call it and reuse it, following best practices, and see our final solution.

<?prettify?>
```
// The Problem:
  // Write a program that prints the numbers from 1 to 100. 
  // For multiples of three print “Fizz” instead of the number 
  // For the multiples of five print “Buzz” instead of the number 
  // For numbers which are multiples of both three and five print    “FizzBuzz”

// The Solution:
  // Write a loop that checks each number for multiples of 3 and 5
  // print the number to the console

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      console.log(‘FizzBuzz’);
    }
    else if ( i % 3 == 0 ) {
      console.log(‘Fizz’);
    }
    else if ( i % 5 == 0 ) {
      console.log(‘Buzz’);
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

/* output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
....
....
98
Fizz
Buzz
*/
```

Wow, that was some great coding everyone! When developing solutions you will find that there are many ways to skin a cat, and now that we have our logic defined and working, it is easier to refactor this into other solutions. Let’s see how some other people have approached this problem.

---

###FizzBuzz switch

Some may prefer the switch statement to clean up some of the if checks. It may be a better option for maintainability if you intend to add more cases later, and it potentially could be faster.

<?prettify?>
```
function fizzBuzzSwitch() {
  for (var i = 1; i <= 100; i++) {
    switch (true) {
 
      case i % 3 == 0 && i % 5 == 0:
        console.log(‘FizzBuzz’);
        break;
      case i % 3 == 0:
        console.log(‘Fizz’);
        break;
 
      case i % 5 == 0:
        console.log(‘Buzz’);
        break;
 
      default:
        console.log(i);
        break;
    }
  }
}
```

This is accomplishing the exact same thing we did with `if` statements. The `switch` statement is evaluating each case, and if it matches the expression `true` will run the block of code.

---

###FizzBuzz recursive

Doing FizzBuzz with a recursive function is fairly advanced at this point. A recursive function is a function that calls itself. When we dive into functions we will go over these, so don’t worry for now. I’ve also chosen to write this in what I believe to be a cleaner way. You may notice that I excluded curly braces in my `if` and `else` statements. This works because I’ve kept them to one line. Please note that from a beginner perspective this may be considered bad practice if you don’t fully understand the repercussions.

<?prettify?>
```
function fizzBuzzRecursive(start, end) {
 
  // base check
  if (start > end || typeof start != ‘number’ || typeof end !=  ‘number’) return
  // do fizzbuzz
  if ( start % 3 == 0 && start % 5 == 0 ) console.log(‘FizzBuzz’)
  else if ( start % 3 == 0 ) console.log(‘Fizz’)
  else if ( start % 5 == 0 ) console.log(‘Buzz’)
  else console.log(start)
  // call recursively
  fizzBuzzRecursive(start + 1, end) // cannot use ++
}
```

This function takes two parameters, `start` and `end`. These are the numbers we want to count. Since it is a recursive function is has to do a base check to see if it should keep running, or else it would just keep going forever. This check also includes some type checking on the parameters which makes it defensive to misuse, and adds one to the parameter of start every time it runs. The function will keep calling itself as long as `start` is below `end`, else it will return, which stops the function from executing.

---

###FizzBuzz ternary

This one is a bit of a bonus. It uses the [conditional ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). Some consider the following one of the shortest and fastest ways to do FizzBuzz. Keep in mind that this is not readable to many, and readability is one of our top priorities as developers, but I did want to introduce the ternary, and this is a good place for it. Let’s take a quick look at how the ternary works first.

<?prettify?>
```
// ternary syntax
condition ? expr1 : expr2

// check for legal age
var age = 25
age >= 21 ? 'true' : 'false' // 'true'
```

What this does is check if the condition is true, and if so, evaluate the first expression, and if not, evaluate expression two. Above we checked to see if an age was greater than or equal to 21. Now, let’s see the FizzBuzz with a ternary.

<?prettify?>
```
// Paul Irish ternary solution
function fizzBuzzTernary() {
  for (var i = 1; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    console.log(f ? b ? “FizzBuzz” : “Fizz” : b ? “Buzz” : i);
  }
}
```

---

Thanks for sticking with it today folks! That was a lot to cover. It’s ok if not everything is making sense just yet. I also hope it is very clear that there is not necessarily a right or wrong way to achieve a solution. If you are interested in performance and optimization I’ve put together a [jsperf](http://jsperf.com/fizzbuzz-seth) comparing these four solutions.
