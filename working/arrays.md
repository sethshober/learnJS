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



isArray()

concat()

filter()

forEach()

indexOf()

join()

lastIndexOf()

map()

pop()

push()

reduce()

reverse()

shift()

unshift()

slice()

sort()

splice()

toString()