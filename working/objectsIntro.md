[JavaScript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)
[Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

Well, we've made it to objects. Objects are such a core part to many programming languages, today we are just going to scratch the surface. We will introduce what an object is, how to create them, how to think about them, and some examples of when to use them. Today is just an introduction. It is not about object oriented programming or prototypical inheritance, just in case anybody was wondering. We will pick up on that stuff later.

The simplest way to think about an object in JavaScript, is to think of it like an object in real life. Objects in real life have properties, and often behaviors. Objects in JavaScript have properties and methods that define it. Methods are like the behaviors. A method is a function attached to an object, or more easily understood, an object property that is a function. Let's think of a bicycle as an object. It has properties like make, model, color, type, and weight. The methods might be peddal, ride, brake, and wheelie. Let's create that.

<?prettify?>
```
var bike = {
  make: 'Trek',
  model: 'Madone',
  color: 'Black/White',
  type: 'road',
  weight: {
    unit: 'lb',
    total: 19
  },
  peddal: function () {...},
  ride: function () {...},
  brake: function () {...},
  wheelie: function () {...}
}
```

This is known as on object literal. Here's what the MDN says about objects:

> JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.

Let's back put a second, and do some basics. Let's create an animal and have it speak.

<?prettify?>
```
var myDog = {
  name: "Lassie",
  speak: function () {
    console.log('My name is ' + myDog.name + '.')
  }
}
```

We can add more properties as we go. We aren't limited to when we first create them.

<?prettify?>
```
myDog.age = 15
myDog.color = "black"
// now looks like
{
  name: "Lassie",
  age: 15,
  color: "black",
  speak: function () {
    console.log('My name is ' + myDog.name + '.')
  }
}
```

We just created an object to represent my dog. We gave her a name property to represent her name and also a speak method so she can tell us herself. **Make sure to separate each property with a comma**, or you will get a syntax error. We then decided we wanted to more descriptive, so we added more properties with dot notation. Now we will need to access the properties inside of it. We can do that with either dot or bracket notation. Let's take a look at both.


==== do something with this ====

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime). Examples are as follows:

========


<?prettify?>
```
// dot notation
myDog.name // "Lassie"
myDog.speak() // "My name is Lassie."
// bracket notation
myDog["name"] // "Lassie"
myDog["speak"]() // "My name is Lassie."

// if we don't call the method

myDog.speak 
// function () {
    console.log('My name is ' + myDog.name + '.')
  }
```

Make sure to call your methods, or else you will just get the function definition returned, which in some cases may actually be useful. You might notice that dot notation is easier to read than bracket. Dot notation is preferrable for this reason, you should use it when you can. Sometimes you won't be able to use dot notation, though. If you are using variables or have certain characters, like spaces, you will need to use bracket notation.

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

This example is completely contived, but the idea is to show that for a variable we need to use bracket notation, because if we used dot notation, it would think `test` is a property of person, but wouldn't find it and say `undefined`.



There is one key method I'd like to talk about that all objects have access to, and that is `Object.keys()`. This returns an array containing the names of all of the given object's properties. This allows you to easily loop over items in the array, or perform certain behaviors on each item. Let's see a basic example.

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

// it is worth noting that we could also do
for (item in foodCheck) {
  if (!foodCheck[item]) {
    groceryList.push(item)
  }
}
groceryList // ["fruit", "bread"]
```

^^^^^ maybe not the greatest example ^^^^^







^^^^ Basics ^^^^

=================

Constructor Stuff and next steps



As your programs become more advanced you may need to create your object via a constructor function. This creates an object wrapper for the given value. This basically means we can create more efficient and dynamic objects. This will make more sense by example. Let's create a song and represent it with an object. 

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










