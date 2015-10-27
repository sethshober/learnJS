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

This is known as on object literal.






Here's what the MDN says about objects:

> JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.

