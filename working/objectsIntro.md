Well, we've made it to objects. Objects are such a core part to many programming languages, today we are just going to scratch the surface. We will introduce what objects are, how to create them, how to think about them, and some examples of when to use them. Today is just an introduction. It is not about object oriented programming or prototypical inheritance, just in case anybody was wondering. We will pick up on that stuff later.

###Intro
The simplest way to think about an object in JavaScript, is to think of it like an object in real life. Objects in real life have properties, and often behaviors. Objects in JavaScript have properties and methods that define them. These are defined as `key:value` pairs. The properties help to define the object, and the methods are like the behaviors. A method is a function attached to an object, or more easily understood, an object property that is a function. Let's think of a bicycle as an object. It has properties like make, model, color, type, and weight. The methods might be pedal, ride, brake, and wheelie. Let's create that.

<?prettify?>
```
// syntax
var obj = {
  key:value
}
// example
var bike = {
  make: 'Trek',
  model: 'Madone',
  color: 'Black/White',
  type: 'road',
  weight: {
    unit: 'lb',
    total: 19
  },
  pedal: function () {...},
  ride: function () {...},
  brake: function () {...},
  wheelie: function () {...}
}
```

This is known as an object literal. Here the official word on objects according to the MDN:

> JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined, you can define your own objects.

---

###The Basics
Let's back up a second, and do some basics. Let's create an animal and have it speak. We create an object literal with `{}`. We then add `key:value` pairs separated by commas. The value can be any type, even another object.

<?prettify?>
```
// create a dog object
var myDog = {
  name: "Lassie",
  speak: function () {
    console.log('My name is ' + myDog.name + '.')
  }
}
```

We just created the object `myDog` and gave it two properties, `name` and `speak`, where `speak` is a method, because it is a function. We can add more properties as we go. We aren't limited to when we first create them.

<?prettify?>
```
myDog.age = 15
myDog.color = "black"
// myDog now looks like
{
  name: "Lassie",
  age: 15,
  color: "black",
  speak: function () {
    console.log(
      'My name is ' + myDog.name + '. ' +
      'I am ' + myDog.age + ' years old, ' +
      'and my hair is ' + myDog.color + '.'
    )
  }
}
```

My dog now exists in JavaScript via our `myDog` object. We gave her a name property to represent her name, as well as age and color. She also has a speak method so she can tell us herself. **Make sure to separate each key:value pair with a comma**, or you will get a syntax error. Also, take notice to how I wrote my `console.log` statement. It is good practice to keep our lines short, preferably under 80 characters if possible. I used the `+` operator to help keep my lines short, rather than having one long line of string concatenation. To JavaScript this will read the same as one line.

Now we will need to access the properties inside of `myDog` so we can do things with them. We can do that with either **dot** or **bracket** notation. An object property name can be any valid JavaScript string, or anything that can be converted to a string. Any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime). Let's take a look at both:

**Dot Notation**

Typically we will use dot notation, as this is preferred for its ease of use and readability. Please, Use it when you can.

<?prettify?>
```
myDog.name // "Lassie"
myDog.speak() // "My name is Lassie. I am 15 years old, and my hair is black."
```

**Bracket Notation**

Sometimes you won't be able to use dot notation, though. If you are using variables or have certain characters, like spaces, you will need to use bracket notation.

<?prettify?>
```
myDog["name"] // "Lassie"
myDog["speak"]() // "My name is Lassie. I am 15 years old, and my hair is black."
```

If we don't call or invoke the method, which happens when we use `()`, it will just return the function definition. 

<?prettify?>
```
myDog.speak
/*
  function () {
    console.log(
      'My name is ' + myDog.name + '. ' +
      'I am ' + myDog.age + ' years old, ' +
      'and my hair is ' + myDog.color + '.'
    )
  }
*/
```

Let's see a quick example of when we would be required to use bracket notation.

<?prettify?>
```
var person = {
  firstName: 'Joe',
  lastName: 'Bob',
  age: 49
}
var first = 'firstName'
var last = 'lastName'
person[first] + ' ' + person[last] // 'Joe Bob'
```

This example is completely contrived, but the idea is to show that for a variable we need to use bracket notation, because if we used dot notation, it would think `first` and `last` are properties of person, but wouldn't find either of them and return `undefined` for the values.

*This conclude object basics. Please soak up the above before continuing on.*

---

###Object.keys()
**[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)** is a useful method to be aware of that your objects will have access to. This returns an array containing the names of all of the given object's properties. This allows you to easily loop over items in the array, or perform certain behaviors on each item. Let's see a basic example.

<?prettify?>
```
var foodCheck = {
  milk: true,
  eggs: true,
  fruit: false,
  bread: false
}
// we pass our object to get the keys
var items = Object.keys(foodCheck)
// ["milk", "eggs", "fruit", "bread"]
var groceryList = []
for (var i = 0; i < items.length; i++) {
  if (!foodCheck[items[i]]) { 
    groceryList.push(items[i])
  }
}
groceryList // ["fruit", "bread"]
```

It is worth noting that we could also do the above with a `for...in` loop.

<?prettify?>
```
for (item in foodCheck) {
  if (!foodCheck[item]) {
    groceryList.push(item)
  }
}
groceryList // ["fruit", "bread"]
```

---

###Constructors

*warning: this is advanced content for the day*

As your programs become more advanced you may need to create your object via a `constructor function`. This creates an object wrapper for the given value. This basically means we can create more efficient and dynamic objects. This will make more sense by example. Let's create a song and represent it with an object. 

<?prettify?>
```
// constructor function
function Song(title, length) {
  this.title = title
  this.length = length
}
var mySong = new Song('The Best Song Ever', '3:54')
mySong // Song {title: 'The Best Song Ever', length: '3:54'}
```

**It is a very important convention to capitalize your constructor function names.** This allows everybody reading your code to know that this function is creating an object. The `this` keyword is very special in JavaScript. It is crucial to your success of truly understanding JS, but it takes awhile, so for now we will just be acquainted with it. The easiest way to think of it is that it represents the context it is called in. In our case that will be the new Song object we are creating. When we say `this` in the above example it really means `mySong`. It is setting the values of `mySong` to the values passed in to the `Song` function as arguments. Let's break it down.

<?prettify?>
```
var mySong = new Song('The Best Song Ever', '3:54')
// an empty object is created
mySong = {}
this.title = 'The Best Song Ever' 
// this.title is the same as mySong.title
this.length = '3:54'
// this.length is the same as mySong.length
```

The real power of this is we can use it to create as many songs as we want with the same constructor function. Without the constructor function we would have to type out each song individually as an object literal. Think of creating an album. The album would be its own object and we could pass it a bunch of songs to be added via our Song constructor. Constructors really are super powerful, but they take time fully understand and get comfortable with.

Focus on object literals first. They will take you far in basic programming. Once you are comfortable, then see if you can adjust your code to utilize constructors.


Further Reading:

- [JavaScript Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)
- [Working With Objects - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Objects - W3](http://www.w3schools.com/js/js_objects.asp)








