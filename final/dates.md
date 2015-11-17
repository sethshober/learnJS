Lets now focus on dates in JavaScript. Learning how to display and interact with dates is important to learn. There is a `Date` object in Javascript that provides a means of showing dynamic time-values on things like webpages, expiring cookies, local storage, etc. and allows user input in the form of dates.

**A Few Oddities:** Computers track dates by the number of `milliseconds` accrued since January 1st 1970 GMT. As I write this the date in milliseconds is `1447126965782`. This allows the computer to use math to keep track and tell the date.

Why in the world would the reference point for dates be January 1st 1970 GMT? This time (00:00) is based off of [Unix time](https://en.wikipedia.org/wiki/Unix_time), where programmers needed a widely agreed upon reference point for establishing dates. This is also known as epoch time. For more on this go to [wikipedia.com/unix](http://en.wikipedia.org/wiki/Unix_time#History). 

You might now be thinking, "What if the numbers get too big?" The max value JavaScript can handle before `infinity` is reached is 447126965782. This is not a problem synonymous with JS, but rather programming as an entirety. This is known as the year 2038 problem, or maybe Y2038K if you prefer, because computers won't be able to encode time after Jan 19, 2038, due to a size limitation in signed 32-bit integers.

Enough of the finer points. Let's get into the nitty-gritty of using dates in JavaScript. The Date object provides a variety of methods we will go over that help to transform the millisecond value into more readable formats. Once we get through the commonly used ones we will introduce the `moment.js` library, used by many developers to make it even easier to obtain, manipulate, and present dates in your applications.

####Instantiating Dates
In order to display dates we can create a `Date` object to work with. There are four different ways in which we create our date object. Since `Date` is a constructor function, we generally use the `new` keyword to create a `Date` object, which includes all the properties and methods needed to do all "date" things. It's important to understand the difference in that we are not just receiving a date string. `Date()` without the `new` keyword will do that. 

<?prettify?>
```
// returns an object
new Date(); // Mon Nov 16 2015 17:52:56 GMT-0800 (PST)
// returns a string
Date(); // 'Mon Nov 16 2015 17:58:13 GMT-0800 (PST)'
```

We can also create a `Date` object three different ways while explicitly assigning it to a representational value:

<?prettify?>
```
//1) var myDate = new Date(milliseconds);
var myDate = new Date(1447126965782);
// Mon Nov 09 2015 19:42:45 GMT-0800 (PST)

//2) var myDate = new Date(dateString);
/*Note: There are three types of dateStrings used to create our date object.
  - ISO Dates: "YYYY-MM-DDT00:00:00" "YYYY-MM-DD" "YYYY-MM or YYYY"
  - Long Dates: "MMM DD YYYY" "DD MMM YYYY" "YYYY MMM DD"
  - Short Dates: "YYYY/MM/DD" "MM-DD-YYYY" (/ or -)*/

var myDate = new Date("December 25, 2014 12:34:00");
// Thu Dec 25 2014 12:34:00 GMT-0800 (PST)
  
//3) var myDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//Note: only year, month, day is required

var myDate = new Date(2015, 12, 12, 34, 0, 0)
// Wed Jan 13 2016 10:00:00 GMT-0800 (PST)
``` 

Now that we have created our `Date` object, we can use the methods attached to get and set our dates. Please note that when dates are created the time associated is static, meaning it does not update with the progressing time.  

---

####Common Methods

Remember you still must create your date object before executing these methods as well because you are actually running the methods on a given static date.

[**getTime()**](http://www.w3schools.com/jsref/jsref_gettime.asp) returns the time as number of milliseconds.

<?prettify?>
```
var myDate = new Date();
console.log(new Date()); // Sat Aug 22 2015 16:28:48 GMT-0600 (MDT)
console.log(myDate.getTime()); // 1440282580112
```

[**getFullYear()**](http://www.w3schools.com/jsref/jsref_getfullyear.asp) returns the year.

<?prettify?>
```
console.log(new Date().getFullYear()); // 2015
```

[**getDay()**]() returns the day of the week as a number (0-6), where Sunday is `0` and Saturday is `6`.

<?prettify?>
```
console.log(new Date().getDay()); // 6
```

[**setDate(day)**](http://www.w3schools.com/jsref/jsref_setdate.asp) sets the day of the Date object relative to the beginning of the currently set month, meaning if we pass 15 as the day, it will set the date to 15 days since the beginning of month, or in other words, the 15th of the month.

<?prettify?>
```
// set date to the 15th of the month
var myDate = new Date();
myDate.setDate(15); // the 15th of the current month in milliseconds
```

[**setFullYear()**](http://www.w3schools.com/jsref/jsref_setfullyear.asp) takes in a number to set as the year.

<?prettify?>
```
// syntax
yearValue[, monthValue[, dayValue]]
// example
var myDate = new Date();
myDate.setFullYear(2016, 0, 22); // sets the date to January 22, 2016.
//Note: months represented by 0-11
```

Before I said we needed to use `new Date()`, but there are actually three methods that do not require the `new` keyword.

[**Date.parse(dateString)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)  parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or contains illegal date values (e.g. 2015-02-31).

<?prettify?>
```
var parsedDate = Date.parse("March 21, 2012");
console.log(parsedDate); // 1332309600000
```

[**Date.now()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
returns the current date in milliseconds starting in 1970 GMT. This is commonly for adding timestamps to cookies, local storage, etc.

<?prettify?>
```
Date.now; // 1447126965782
```

[**Date.UTC(year, month, day, minutes, seconds, milliseconds)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC) method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, *universal time*.

<?prettify?>
```
Date.UTC(96,11); // 849398400000
// Note: only Year and Month is a required field
```

---

####Moment.js
Today we want to look at our first JavaScript library, [moment.js](http://momentjs.com/). A JavaScript library is somebody else's code that we include in our own, which provides methods, known as APIs. Libraries often help us to build things faster and easier. Though it's important to understand how to do things yourself, it is also just as important to realize somebody else has probably done it before, and potentially better. Don't reinvent the wheel. "Moment" is a javascript library that focuses solely on dates. It provides us APIs to make interacting with dates in JavaScript much simpler, because honestly, they can really be a pain. The moment.js developers define the library as having the ability to "parse, validate, manipulate, and display dates in JavaScript". Whereas in JavaScript dates are presented in milliseconds, and ugly date strings (`Sun Aug 23 2015 18:36:58 GMT-0600 (MDT)`), moment allows us to present dates that are user friendly. 

**Note:** You will need to include this library in your application locally or load it in via a CDN (content delivery network). We haven't talked about including other code before, but we encourage you to do some research and see what you can put together, until we can devote the time later to fully digging in.

In order to present dates from the moment.js library, you will need to start each statement with `moment()` with introduces the moment object, an iteration of the `Date()` object.

**Moment.js examples:**

We use `moment()` to initiate an instance of the moment.js date object. We will use the basic method `format()` on the `moment()` object that will accept date parameters and return dates in user-friendly strings.

<?prettify?>
```
moment().format('MMMM Do YYYY, h:mm:ss a'); //August 23rd 2015, 6:43:42 pm
moment().format('dddd'); //Sunday
moment().format("MMM Do YY"); //Aug 23rd 15
moment().format('YYYY [is still] YYYY'); //2015 is still 2015
moment().format(); //2015-08-23T18:44:38-06:00
```

**Note:** Please visit [momentjs.com](http://momentjs.com/) for more elaborate methods, as we just skimmed the surface with our formatting. Don't let your users see ugly date formats.


Please also note that we merely introduced the `Date` object and its methods. It is not necessarily important to know everything, but it is extremely helpful to be aware of things and learn how to do research and read documentation. All of us are constantly learning as developers. Be sure to visit [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and [W3 Schools](http://www.w3schools.com/jsref/jsref_obj_date.asp) for further details on how you can construct and use your date object.

 