JavaScript Loops Now that we’ve tackled conditionals, we’re ready to move on to loops. Loops are used to execute a block of code a number of times, and are handy if you want to run the same code over and over again, each time with a different value. They are a staple to any programming language and developer toolkit. Commonly you will see loops used when working with arrays, but objects have their place as well. In JavaScript there are four different loops.

- **for** — loops through a block of code a number of times
- **for…in** — loops through the properties of an object
- **while** — loops through a block of code while a specified condition is true
- **do…while** — also loops through a block of code while a specified condition is true, except the loop starts after execution of the statement, so it is guaranteed to run at least once.

###For

Let’s start with the `for` loop, as that is the most common. If you master this one, you will go far. Here’s the syntax:

<?prettify?>
```
// for loop syntax
for (statement 1; statement 2; statement 3) {
  code block to be executed
}
```

Statement 1 is executed before the loop starts.
Statement 2 defines the condition for running the loop.
Statement 3 is executed each time after the loop has been executed.

Cool, but what does all this mean for you? For the sake of simplicity, let’s say you need to count to 100, but don’t feel like it. Let’s have the computer do it for us with a for loop.

<?prettify?>
```
// this will print the numbers 1–100
for (var i = 1; i <= 100; i++) {
  console.log(i);
}
```

This is very contrived, but a great starting point for understanding our first `for` loop. The first thing that happens here is that the variable `i` is declared and set to the value of 1. We then check if the condition `i <= 100` is true. If it is we run `console.log(i)`, which outputs the value of `i` to the console. Now that the loop has completed, it adds one to the value of `i` (`i++`), checks to see if the condition if still true, and executes again. Remember, `++` is an increment and is the same as `i += 1` or `i = i + 1`. The loop will keep executing until the condition in statement 2 is false. Be careful not to create a loop that is always true. It will run forever and crash whatever program it is running in.

<?prettify?>
```
// this will cause a crash because i is always greater than 0
for (var i = 5; i > 0; i++) {
  console.log(i);
}
```

Often times you will see a `for` loop with an array. Let’s say we have an array of cars, representing the huge collection I have in my garage, and want to say something about each one.

<?prettify?>
```
var cars = [‘Volvo’, ‘Subaru’, ‘Toyota’, ‘Honda’, ‘BMW’];

for (var i = 0; i < cars.length; i++) {
 console.log( ‘I drive a ‘ + cars[i] + ‘.’ );
}

/*
‘I drive a Volvo.’
‘I drive a Subaru.’
‘I drive a Toyota.’
‘I drive a Honda.’
‘I drive a BMW.’
*/
```

At first pass this one might seem a bit complicated. I certainly know it was for me. Let’s start with the things that have changed from our basic counting loop.

`cars.length` — length is a property given to arrays. We are accessing the length of the array ( how many items are in the cars array ) with dot notation. `cars.length` is equal to five. So, we are saying if `i` is less than five do the loop. Now that we’re in the loop I’m using bracket notation to access the index value of cars. On the first run `i = 0`, so `cars[i]` is the same as `cars[0]`, which is ‘Volvo’. I’ve then taken the `+` operator to do string concatenation and print out a sentence. We can concatenate strings and values by separating them with a `+`.

Keep looking over the loop above, as variations like this are extremely commonplace.

---

###for…in

Sometimes we need to loop through objects. This loop is given two variables, the first to be used as a placeholder for the key in the object, and the second is the object itself.

<?prettify?>
```
// syntax
for (variable in object) {
  // do something
}

var body = {
  legs: ‘short’,
  hair: ‘long’,
  arms: ‘stong’
};

for ( key in body ) {
  console.log(body[key]);
}

/*
‘short’
‘long’
‘strong’
*/
```

`key` represents a key in the object `body`. We are accessing the key values with bracket notation. On the first loop `body[key]` is the same as doing `body[legs]`.

---

###While

`while` loops are used to do something while a certain condition is true.

<?prettify?>
```
// syntax
while (condition) {
  code block to be executed
}

var i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

/*
1
2
3
4
5
6
7
8
9
*/
```

Notice here we had to increase `i` in the code block, else our loop would never end and cause a crash. Be careful with `while` loops, as they are easier to overlook an infinite loop.

---

###do…while

The `do…while` loop is a variant of the `while` loop. The difference is that it adds a block of code to execute first, before checking if the condition is true, and then repeating the loop until the condition is false. This guarantees the block will run at least once.

<?prettify?>
```
// syntax
do {
  code block to be executed
}
while (condition);

Comparing the example above:

var i = 1;

do {
  console.log(i);
  i++;
}
while (i < 10);

/*
1
2
3
4
5
6
7
8
9
*/
```

We can see here that `while` and `do…while` are very similar. The key thing here is that in a `do…while` loop the code will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.

Let’s adjust our cars `for` loop into a `while` loop.

<?prettify?>
```
var cars = [‘Volvo’, ‘Subaru’, ‘Toyota’, ‘Honda’, ‘BMW’];
var i = 0;

while(cars[i]) {
  console.log( ‘I drive a ‘ + cars[i] + ‘.’ );
  i++;
}

/*
‘I drive a Volvo.’
‘I drive a Subaru.’
‘I drive a Toyota.’
‘I drive a Honda.’
‘I drive a BMW.’
*/
```

You may have noticed we merely moved some statements around. 

---

Let’s quick review our loops. 

A **for** loop executes a block a number of times and is given three statements. Statement 1 is executed before the loop runs, typically defining a variable. Statement 2 is a condition to check if the loop should run, and statement 3 is executed after the loop runs, typically an increment to a count. 

**for…in** loops through the properties of an object. It is given two variables, one to be used as a placeholder for the key in the object, and then the object itself to loop through.

**while** loops through a block of code while a certain condition is true. Be careful to increase the counter inside the loop to avoid infinite loops.

The **do…while** loop is much like the while loop, except it is guaranteed to execute once.

The main difference between the *for’s* and the *while’s* is a basically a matter of pragmatics. All allow for some flexibility to suit your needs, though most of the time you will see *for* loops, as they are easy to read and fast to perform. They are also nice because they are concise, which helps with readability, and as a reminder is one of our main focuses as a developer.