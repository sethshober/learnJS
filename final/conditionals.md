Welcome back! Hopefully you are becoming comfortable seeing JS and getting a handle on the types available to us. We are going to see a fair amount of code today and work on tackling one of the fundamental subjects in programming: **conditionals**

It is very common when writing code that you will want to do something based on a decision, and conditional statements help us to do just that. There are four conditional statements available to us in JavaScript:

- **if** — use to run a block of code if a specified condition is true
- **else** — use to run a block of code if the same condition if false
- **else…if** — use to specify a new condition to test if the first is false
- **switch** — use when there are many alternative blocks of code

Before we jump in we need to understand to understand a couple things.

###Truthy vs Falsey</h3>

When a conditional runs it evaluates to true or false, so knowing what is false in JS will be quite helpful to writing our logic.

Here are the five false values in javascript:

- **““** — an empty string
- **undefined** — a variable without a value associated with it
- **null** — an empty value
- **NaN** — not a number
- **false** — of course!

Everything else is true. Pretty simple right?!

#### `==` vs `===`

As you might think, both of these operators indicate a type of equals. A **double equals** `==` will evaluate if values are equal. This is sometimes referred to as shallow equals. It will automatically coerce the types to match and then evaluate if the values are the same. This can sometimes cause undesired behavior and so we use **triple equals** `===` to be more critical in our evaluation, which checks for equal type and value. This is sometimes referred to as strict equals.

If we were to only use a single equals this would indicate that we want to set a value equal to something, which we most likely do not want in our conditional. We most likely just want to check if two values are equal. Let’s see a quick example:

<?prettify?>
```
var word = '5';
var number = 5;
word == number // true
word === number // false
```

Here we just saw how JavaScript automatically converted the types before comparing in the double equals. It is important to understand this behavior. Let’s further clarify what JS is doing under the hood:

<?prettify?>
```
var word = '5';
var number = 5;
Number(word); // 5
number.toString(); '5'
// + operator shorthand for converting string to number
+word; // 5
// Let's create a better visual for what's happening.
word == number
'5' == '5' // true
word === number
'5' === 5 // false
// It's slightly more complicated than this,
// but this should paint the necessary picture for our purposes.
```

Cool, now we got those few caveats out of the way we can dive into writing some conditionals.

---

####The Conditionals

Let’s take a look at the `if` statement:

<?prettify?>
```
// syntax
if (condition) {
  // do something
}
```

We use `if` to do something only if a condition is true. If I have at least $5 in my wallet I’m going to buy a coffee. Let’s make that into an `if` statement.

<?prettify?>
```
// if wallet contains at least $5, buy a coffee
 
var wallet = 10;
function buyCoffee() {
  console.log(“I’m going to buy a coffee.”);
}
if (wallet >= 5) { // true
  buyCoffee(); // “I’m going to buy a coffee.”
}
```

In the above example the conditional is whether or not wallet is greater than or equal to 5. The value of wallet is 10, so the conditional evaluated to true. Since this was true our code block got executed and the buyCoffee function got called, logging to the console “I’m going to by coffee.” Let’s make this a little bit smarter and give it some logic to do something if we don’t have $5. We can do this with the `else` statement, which is used to do something if the condition evaluates to false.

<?prettify?>
```
// syntax
if (condition) {
  // if condition is true do this
} else { 
  // if condition is false do this
}
// if wallet contains at least $5, buy a coffee,
// else do not buy a coffee.
function buyCoffee() {
  console.log(“Yay for coffee!”);
}
function noCoffee() {
  console.log(“Boo, we can’t afford coffee today.”);
}
var wallet = 1;
if (wallet >= 5) { // evaluates to false and runs else block
  buyCoffee();
} else {
  noCoffee(); // “Boo, we can’t afford coffee today.”
}
```

Bummer, no coffee! Let’s see why not. Looking back over this we can see that the condition evaluated to false, skipped the `if` block, looked for an `else` block to follow, found it, and ran the `else` block.

Now I want a muffin and a coffee. Let’s see how we can write our code to do logic for multiple situations. In comes the `else…if`.

<?prettify?>
```
// syntax
if (condition1) {
  // if condition1 is true do this
} else if (condition2) {
  // if condition1 is false and condition2 is true do this
} else {
  // if both condition1 and condition2 are false do this
}
// if wallet contains at least $20 buy a coffee and bagel.
// if not check if we have at least $5, and if so, buy a coffee.
// if we have failed thus far, call noCoffee, and we get nothing.
function buyCoffee() {
  console.log(“Yay for coffee!”);
}
function buyMuffin() {
  console.log(“Lemon poppyseed muffins are yum!”);
}
function noCoffee() {
  console.log(“Boo, we can’t afford coffee today.”);
}
var wallet = 100; // yeah, we be rollin’
if (wallet >= 20) { // true so this block runs
  buyCoffee(); // “Yay for coffee!”
  buyMuffin(); // “Lemon poppyseed muffins are yum!”
} else if (wallet >= 5) { 
  buyCoffee();
} else {
  noCoffee();
}
```

In the above example we used the `else…if` statement to create a condition to evaluate if the first one was false. In our example we had $100 dollars, which caused the first condition to evaluate to true and run the first block. Once a block runs it will not run other `else` or `else…if` blocks. If we had $10 the first condition would have been false, and it would have gone to the second condition in the `else…if`, evaluated to true and called the buyCoffee function. Due to this nature we can have some user error in the order of conditionals, as described below.

<?prettify?>
```
// I’ve switched the conditionals and left everything else the same.
function buyCoffee() {
  console.log(“Yay for coffee!”);
}
function buyMuffin() {
  console.log(“Lemon poppyseed muffins are yum!”);
}
function noCoffee() {
  console.log(“Boo, we can’t afford coffee today.”);
}
var wallet = 100; // still rollin’
if (wallet >= 5) { // true
  buyCoffee(); // “Yay for coffee!”
} else if (wallet >= 20) {
  buyCoffee();
  buyMuffin();
} else {
  noCoffee();
}
```

We can see the importance of ordering our conditional statements, and if not careful could produce undesired behavior, like missing out on our muffin. Above we have enough money to buy a coffee and muffin, but since our first conditional evaluated to true and bought only a coffee, the second conditional was never evaluated, and we are left only to daydream about our lemon poppyseed muffin.

Finally, conditionals may take advantage of logical operators, evaluating multiple expressions and returning as a boolean in the condition. Let’s see it in action.

<?prettify?>
```
// if I have at least $5 and I’m feeling hungry, buy a muffin
// else buy a coffee
var wallet = 5;
var feeling = “hungry”;
function buyCoffee() {
  console.log(“Yay for coffee!”);
}
function buyMuffin() {
  console.log(“Lemon poppyseed muffins are yum!”);
}
if ( wallet >= 5 && feeling == “hungry” ) {
  buyMuffin(); // “Lemon poppyseed muffins are yum!”
} else {
  buyCoffee();
}
```

As you may have noticed, conditional statements are incredibly useful and important to the success of developers, and if you want to run a block of code only under certain conditions they are the way to do it. Go ahead and play around with `if`, `else`, and `else…if`. Tomorrow we will continue conditionals with the `switch` statement.