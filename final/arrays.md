Today's focus is going to be arrays. You may remember that arrays are actually just objects in JavaScript, and are thus considered a sub-type. An array is an object that holds values in numerically indexed positions, where the index starts at 0. The first value is index zero, if that helps to make sense. I remember this taking awhile for myself to sink in. Each value can be of any type including an array, meaning you can create an array of arrays, which is actually multi-dimensional, but that's sorta complicated. Any time you need a list of something, or you need to iterate over values, an array will be your friend.

Today's post will be much like our previous on strings, where our goal is to become more acquainted with arrays, while understanding when we might use them and common behaviors we can perform via methods. The examples are meant to be basic, allowing you to see what is happening, rather than getting caught up in logic. By understanding basic examples you will naturally think of more complicated ways to use them. Onward!

We create arrays in their literal fashion, which really just means using brackets `[]`.

<?prettify?>
```
// create an empty array
var myArray = []
// create array with values
var myArray = ["hello", 5, true, [1,2,3,4,5]]
```

Notice how we can store all types, including another array. Really, it's just a container for values if you think about it. Your values might be related, such as phone numbers, grocery items, email addresses, but they don't have to be. Because the items are indexed it makes it easy to iterate over each value and perform an operation accordingly. To access array values we use the index location.

<?prettify?>
```
// access array values via index
var myArray = ['apples', 'oranges', 'strawberries']
// remember index 0 is the first item
myArray[0] // 'apples'
myArray[2] // 'strawberries'
```

Just like strings, we can access the length of an array with the property `array.length`, which tells us how many items are in the array.

<?prettify?>
```
var myArray = ['apples', 'oranges', 'strawberries']
myArray.length // 3
```

##Methods

The first thing we need to learn is how to add and remove items from our arrays. There are four simple methods we will start off with:

- **[pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)**
- **[push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**
- **[shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)**
- **[unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)**

`pop()` and `shift()` remove items from an array, while `push()` and `unshift()` add items. Let's see some basic examples.

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

Now that we've got items in our arrays, we need to see how to iterate over them and perform operations, an extremely common thing. Let's say a greeting to some individuals.

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

The first thing we did was declare and assign values to our array `names`. Then we wrote a `for` loop to log a greeting to each name in the array. This is very typical, we set `var i = 0`, as this will be used as a counter to access items in the array. We access array values like `names[0]`, which outputs `'Seth'` from the above example. We say do this loop as long as `i` is less than `names.length`, which is 3, and will ensure the loop stops after we run out of items. Then, each time the loop runs, increment `i` via `i++`. Then we simply tell it what to do each time the loop runs, in our case, logging a greeting. We use string concatenation to do this. We grab the names from the array with `names[i]`, where `i` is our variable counter.

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
for (i = 1; i < 3; i++) { 
  console.log('Hi ' + names[i]) // 'Hi Mike'
  // because names[i] is names[1] is 'Mike'
}
```

The key here is understanding that we are accessing the array values with an index number, and we are representing that index number with a variable. Understanding that should clear up what is happening every time the loop runs. I remember how unclear it was seeing `[]`s and `i`s everywhere, but now it's like reading a book.


To check whether an object is actually an array, we can't use `typeof`, because it will return `'object'`, since arrays are a sub-type of `'object'`. Instead we use the **[isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)** method.

<?prettify?>
```
// syntax
Array.isArray(object)
// example
var countries = ['USA', 'Germany']
typeof countries // 'object'
Array.isArray(countries) // true
// we might do something like
if (Array.isArray(countries)){
  for (var i = 0; i < countries.length; i++) {
    // do something with countries[i]
  }
}
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
// join on a space
var joinCarsSpace = cars.join(' ') // 'Honda Toyota Maserati'
```

Sometimes we need to determine if an item exists in an array, and for this we can use the **[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)** method, which will return the first index at which a given element can be found. If no matching element is found it returns `-1`. This method takes a `searchElement` parameter to check for and an optional `fromIndex` position to start checking.

<?prettify?>
```
// syntax
arr.indexOf(searchElement[, fromIndex])
// example
var arr = [1,2,3,4,5] // let's keep it simple
arr.indexOf(2) // 1
arr.indexOf(2, 3) // -1
// 2 was not found because we started searching from the 3rd index, and had already past the value 2
// common conditional 
if (arr.indexOf(2) !== -1) {
  // it item is in array
  // do something to it
  console.log(arr.indexOf(2)
}
```

Generally, when using `indexOf()` we are going to see if an item exists and do something with it. We can see that in the above example. In our `if` conditional we evaluated `arr.indexOf(2)`, and if it didn't return `-1` we did something. If it didn't return `-1` that means the item was found, and we can continue operations accordingly. If we want to find the last position of an item, we can use **[lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)**  which searches the array backwards and returns the first occurence (which would be the last) or returns `-1` if not found.

Just like strings, we can use **[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)** to concatenate our arrays. It works much the same way as `string.concat()`. It works by passing in values to add to an array, where values can be varying types.

<?prettify?>
```
// syntax
var newArray = oldArray.concat(value1, [value2,...])
//example
var num = [1, 2, 3]
var arr = [1, 2, 3]
var newArr = num.concat(arr)
newArr // [1, 2, 3, 1, 2, 3]
newArr = newArr.concat('one', 'two', 'three')
newArr // [1, 2, 3, 1, 2, 3, 'one', 'two', 'three']
```

If we want to remove items from an array as another array we use **[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**, which works much like the `string` method of `slice`. It accepts index values as parameters and uses those indexes to determine which values are extracted.

<?prettify?>
```
// syntax
arr.slice([begin[, end]])
// example
var food = ['burger', 'fries', 'milk shake', 'salad', 'bananas']
// extract from index 1 to index 3
food.slice(1, 3) // 'fries', 'milk shake'
// omit second parameter to go to end
food.slice(2) // [ 'milk shake', 'salad', 'bananas' ]
// negative numbers work as well, but work as offset from end
// extract 2nd index from end, to end
food.slice(-2) // ['salad', 'bananas']
// extract index 1 to 2nd offset from last item
food.slice(1, -2) // ['fries', 'milk shake']
```

Be careful with negative numbers when using `slice`. It can get quite confusing. Think of it as counting positions *from* the last item, where `-1` becomes the *second to last* item, not the last.

**[sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)** will sort the elements of an array and return it. The following is a basic sort function, which will take you very far, but know that there are many more complex and complicated sort functions. I recommend reading some more on this one, because if you're not careful you will get some funky sort results.

<?prettify?>
```
// syntax
arr.sort([compareFunction])
var numbers = [5, 10, 4, 8, 29, 7, 3, 50]
// sort with no parameter causes bad results
numbers.sort() // [ 10, 29, 3, 4, 5, 50, 7, 8 ]
// a - b returns ascending sort order
var sortAsc = numbers.sort(function(a, b) {
  return a - b
})
sortAsc // [ 3, 4, 5, 7, 8, 10, 29, 50 ]
// b - a returns descending sort order
var sortDesc = numbers.sort(function(a, b) {
  return b - a
})
sortDesc // [ 50, 29, 10, 8, 7, 5, 4, 3 ]
```

Most commonly used and recommended for iterating over arrays are `for` loops, as they are clean and fast, but there is an alternative that some prefer, the **[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)**. It executes a provided function once per array element. `forEach()` takes a `callback` function to get called on each item of the array. A callback function is just a function that gets passed to another function as a parameter, to get called later. The `callback` function for `forEach()` takes three parameters, which are placeholder values:

- `currentValue` - The current element being processed in the array.
- `index` - The index of the current element being processed in the array.
- `array` - The array that forEach is being applied to.

<?prettify?>
```
// syntax
arr.forEach(callback[, thisArg])
// log items with forEach. we can leave off array parameter since we're not using it.
function logArrayElements(element, i) {
  console.log(i + ' - ' + element)
}
var arr = [1, 2, 'hi', [3, 4], 'Seth', true]
arr.forEach(logArrayElements)
/*
0 - 1
1 - 2
2 - hi
3 - 3,4
4 - Seth
5 - true
*/

// we can also attach an array directly
[1, 2, 'hi', 'you'].forEach(logArrayElements)
/*
0 - 1
1 - 2
2 - hi
3 - you
*/
```

I would recommend reading more on this one. It is quite common, and I imagine the callback thing is a bit complicated right now. We will cover more on functions later.

---

There are more array methods out there, some that will be important in the future, but a bit more complicated for where we are at. These above are common and will get you started on a great foundation. Keep getting comfortable reading [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), and try mimicking a method by writing your own. You'll develop a deeper understanding and realize it's all just JavaScript, and you can do it too. There is no deep magic here. See you next time! Cheers.