> **Calculate 50 iterations of the Fibonacci sequence.**

That's today's challenge, and interview question, I faced myself once. I'm going to walk through approaching the problem, solving it, and then optimizing it.

When facing problems you may initially think, "I have no clue", and that might actually be true at the time, but that doesn't mean you can't figure it out. The most important thing is having the attitude of, "I know I can do anything." This really helps to persevere through the struggles of trial and error.

Now that we are in the right mindset we should be sure we understand the problem. We need to calculate 50 iterations of the Fibonacci sequence. That's pretty clear, except for I don't know what the Fibonacci sequence is. Researching this is our next step. Here are a couple resources:

- https://www.mathsisfun.com/numbers/fibonacci-sequence.html 
- https://en.wikipedia.org/wiki/Fibonacci_number

I found that a number in the fibonacci sequence is equal to the previous number plus the number before the previous number. In other words, a number in the sequence is equal to the previous two numbers added together. Here is the beginning of the sequence:

<?prettify?>
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
```

Now that we fully understand the problem, we can start to design a solution. This will be helpful to guide us when we are writing the code.

I knew we were going to need to store the Fibonacci numbers, and an array made sense because they are numbers, and we're going to need to run some sort of loop 50 times to calculate a Fibonacci number each time and store it. Let's see what that scaffold looks like.

<?prettify?>
```
// will return fibonacci numbers
// max represents how many we return
function calculateFibonacciNumbers(max) {
  var fibArr = [];
  for (var i = 0; i < max; i ++) {
    // calculate fib number
    // add to fibArr
  }
  return fibArr;
}
```

Next, we need to figure out how to represent the calculations in code. The first problem I encountered was that we needed to have two numbers already, because a number in the sequence relies on the two previous, so I decided to add a check to arbitrarily add the first two numbers. I then realized I could represent the values as variables. We need a value for the sum, which will be the Fibonacci number, and then the one for each of the two previous numbers in our sequence. Let's see what this solution ended up looking like.

<?prettify?>
```
function calculateFibonacciNumbers(max) {
  var valOne
    , valTwo
    , valAdd // will be the fib number
    , fibArr = [];

  // loop fibonacci number iterations
  // Next fibonacci number = previous + one before previous
  for(var i = 1; i < max; i++){
    // arbitrarily add first #
    if(i === 1) {
      valOne = 0;
      valTwo = 1;
      fibArr.push(valOne, valTwo);
      continue; // to next iteration
    }
    // adjust variables up in sequence
    valAdd = valOne + valTwo;
    valOne = valTwo;
    valTwo = valAdd;
    fibArr.push(valAdd);
  }
  return fibArr;
}
```

You might be wondering what the `continue` statement is doing. If a `continue` is hit the loop will continue to the next iteration, skipping all code below left in the iteration. This only occurs on the first run of the loop, which is setting `valOne` and `valTwo`, so we can use them later. On all subsequent runs of the loop we don't run the first `if` block because `i` is not equal to one. If you think about the sequence of numbers we need to shift one to the right. We add `valOne` and `valTwo` to give us the Fibonacci number, which we store in `valAdd`. Then we do our shift in the sequence by setting `valOne` equal to `valTwo` and `valTwo` equal to the `valAdd`, and ultimately save the Fibonacci number using `fibArr.push(valAdd)`. We are now ready to run the next iteration on new numbers. Cool, problem solved.

After solving a problem you may be satisfied because it works, or you may have needs and desires to further optimize the solution. This may include reducing code or time to run. What I didn't like was the `if` check, because it only hits once, but the program still has to check on each loop if `i === 1`. This becomes more and more inefficient the more iterations we run. I removed it entirely and just set the first two values of `fibNums` right away. This removed code and reduced time to run. I also ended up changing some variables and added a [JS Docs](http://usejsdoc.org/about-getting-started.html) style comment to make the code more readable. I was then satisfied with the following solution:

<?prettify?>
```
/**
 * Calculates Fibonacci numbers
 * @param {number} max - How many numbers you want
 * @return {array} The Fibonacci numbers
 */
function calculateFibonacciNumbers(max) {
  var valOne = 0
    , valTwo = 1
    , fibNum
    , fibNums = [0, 1];

  // loop fibonacci number iterations
  // Next fibonacci number = previous + one before previous
  for (var i = 2; i < max; i++) {
    fibNum = valOne + valTwo;
    valOne = valTwo;
    valTwo = fibNum;
    fibNums.push(fibNum);
  }
  return fibNums;
}
```

I was happy with the solution above, but just for fun I did some more research, and here is a very efficiently written example. It reduces lines of code by doing math straight on the array values, rather than using additional variables. I think the following example is a little hard to understand for beginners, but if I had written it today, having much more experience than when I did the above, I probably would have done it this way.

<?prettify?>
```
function calculateFibonacciNumbers(max) {
  var fib = [0, 1]
  for (var i = 2; i < max; i++ ) {
    fib.push( fib[i - 1] + fib[i - 2] )
  }
  return fib
}
```

---

If we run any of the functions we just wrote, we will get the same result:

<?prettify?>
```
console.log(calculateFibonacciNumbers(50))
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, ....
```

For performance comparisons see: http://jsperf.com/fibonacci-seth/2

I hope today was fun and you got a sense of thinking and acting like a developer, or should I say problem solver.

**It's important to realize that how you think and approach solving a problem is just as important as actually being able to solve the problem.**
