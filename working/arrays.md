Today's focus is going to be arrays. You may remember that arrays are actually just objects in JavaScript, so they are more or less a sub-type. An array is an object that holds values in numerically indexed positions, where the index starts at 0. The first value is index zero, if that helps to make sense. I remember this taking awhile for myself to sink. Each value can be of any type including an array, meaning you can create an array of arrays, which is actually multi-dimensional, but that's sorta complicated. Any time you need a list of something, or you need to iterate over values, an array will be your friend.

Today's post will be much like our previous on strings, where our goal is to become more acquainted with arrays, while understanding when we might use them and common behaviors we can perform via methods. Onward!

We create arrays in their literal fashion, which really just means using brackets (`[]`).

<?prettify?>
```
// create an empty array
var myArray = []
// create array with values
var myArray = ["hello", 5, true, [1,2,3,4,5]]
```

Notice how we can store all types, including another array. Really, it's just a container for values if you think about it. Your values might be related such as phone numbers, grocery items, email addresses, but they don't have to be. Because the items are indexed it makes it easy to iterate over each value and perform an operation. To access array values we use the index location.

<?prettify?>
```
// access array values via index.
var myArray = ['apples', 'oranges', 'strawberries']
myArray[0] // 'apples'
myArray[2] // 'strawberries'
```

Just like strings, we can access the length of an array with the property `array.length`, which tells us how many items are in the array.

<?prettify?>
```
var myArray = ['apples', 'oranges', 'strawberries']
myArray.length // 3
```


###Methods


The first thing we need to learn is how to add and remove items from our arrays. There are four simple methods we will start off with:

- [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

`pop()` and `shift()` removes items from an array, while `push()` and `unshift()` add items. Let's see some basic examples.

<?prettify?>
```
// create our array
var people = ['Seth']
// I'm lonely. Let's add some friends.
people.push('Mike') // add to end of array
people // ['Seth', 'Mike']
people.unshift('Bret') // add to beginning of array
people // ['Bret', Seth', 'Mike']
// Things are getting crowded. Time for friends to leave.
people.shift() // remove first item from array
people // ['Seth', 'Mike']
people.pop() // remove last item from array
people // ['Seth']

// note that pop and shift don't just remove the item from the array.
// it actually returns the item so you can do something with it.
var name = ['Seth']
var me = name.pop()
me // 'Seth'
```

Now that we've got items in our arrays, we need to see how to iterate over them and perform operations, and extremely common thing. Let's say a greeting to some individuals.

<?prettify?>
```
// log a greeting to each name in array
var names = ['Seth', 'Mike', 'Bret']
for (var i = 0; i < names.length; i++) {
  console.log('Hi ' + names[i])
}
/*
Hi Seth
Hi Mike
Hi Bret
*/
```

Though, quite a trivial example, the concept is what is important. Iterating over an array with a `for` loop is so critical to your foundations as a developer. Please, take time to let this sink in. I know we've seen this before, but let's go over it again.

The first thing we did was declare and assign values to our array `names`. Then we wrote a `for` loop to log a greeting to each name in the array. This is very typical, we set `var i = 0`, as this will be used as a counter to access items in the array. We access array values like `names[0]`, which outputs 'Seth' from the above example. We say do this loop as long as `i` is less than `names.length`, which will ensure the loop stops after we run out of items. Then, each time the loop runs, increment `i` (`i++`). Then we simply tell it what to do each time the loop runs, in our case logging a greeting. We use string concatenation to do this. We grab the names from the array with ``names[i]`, where `i` is our variable counter.

Again, because this is so important to understand, let's break it down in code.

<?prettify?>
```
var names = ['Seth', 'Mike', 'Bret']
// first pass i = 0 and 0 < 3, which evaluates to true
// so we run the loop
for (i = 0; i < names.length; i++) {
  console.log('Hi ' + names[i]) // 'Hi Seth'
  // because names[i] is names[0] is 'Seth'
}

// now the loop completes, we add one to i
// and do all the checks again with i = 1
// because 1 is less than the array length of 3
// we run again with 
  console.log('Hi ' + names[i]) // 'Hi Mike'
  // because names[i] is names[1] is 'Mike'
```

The key here is understanding that we are accessing the array values with an index number, and we are representing that index number with a variable. Understanding that should clear up what is happening every time the loop runs. I remember how unclear it was seeing brackets and `i`s everywhere, but now it's like reading a book.


To check whether an object is actually an array, we can't use `typeof`, because it will return 'object'. Instead we use the **[isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)** method.

<?prettify?>
```
// syntax
Array.isArray(object)
// example
var countries = ['USA', 'Germany']
typeof countries // 'object'
Array.isArray(countries) // true
```






We've already seen **[reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)** when going over [Strings](https://learnjswithme.com/javascript-strings/), which will reverse the order of the array items.

<?prettify?>
```
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reverse()
console.log(numbers) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

We've also seen **[join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)**, which takes all the elements of the array and puts them together as a string.

<?prettify?>
```
// syntax
str = arr.join([separator])
// separator will be put in between each item when joined together. default is a comma.
var cars = ['Honda', 'Toyota', 'Maserati']
var joinCars = cars.join() // 'Honda,Toyota,Maserati'
var joinCarsSpace = cars.join(' ') // 'Honda Toyota Maserati'
```


indexOf()

lastIndexOf()

slice()

sort()

array.sort( function(a, b) { return a - b; } )

splice()

concat()

forEach()

filter()

map()

reduce()

