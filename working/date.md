Lets now focus on the Date object in javascript. Date is an important object in Javascript. It provides a means of showing dynamic time-values on webpages, expiring cookies, local storage, etc. and allows user input in the form of dates.

Date objects are based on the time value in milliseconds since Januray 1, 1970 GMT. 

Date provides a variety of methods we will go over that help transform the millisecond value javascript outputs to more readable formats. Finally we will introduce the moment.js library, used by the majority of front-end developers, to obtain even more presentable Dates on webpages.


In order to display dates we have to create a date object to work with. There are four different ways in which we create our date object. Note: This constructed object we create is necessary to perform javascript methods on our object.

```
var myDate = new Date();  //Assigns our variable to the current time in milliseconds.
```

var myDate = new Date(milliseconds);

var myDate = new Date(dateString);
   Note: There are three types of dateStrings used to create our date object.
        - ISO Dates: "YYYY-MM-DDT00:00:00" "YYYY-MM-DD" "YYYY-MM or YYYY"
        - Long Dates: "MMM DD YYYY" "DD MMM YYYY" "YYYY MMM DD"
        - Short Dates: "YYYY/MM/DD" "MM-DD-YYYY" (/ or -)
```
var myDate = new Date("December 25, 2014 12:34:00");
```   

var myDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
   Note: only year, month, day is required
```
var myDate = new Date(2015, 12, 12, 34, 0, 0)
``` 



Finally, now that we have created our date object, we can use the inherited methods native to javascript to get and set our dates. Please note that date objects are static. While the computer is constantly in motion, date objects do not change once they are created.  

Common "Get" methods:

**getTime()**
```
	var myDate = new Date();
	console.log(new Date()); //Sat Aug 22 2015 16:28:48 GMT-0600 (MDT)
	myDate.getTime(); //returns current time in milliseconds (1440282580112)
```
**getFullYear()**
```
    console.log(new Date().getFullYear()); //2015
```
**getDay()**
```
    console.log(new Date().getDay());  //6
    //Returns a number 0-6 (Sun-Sat)
```

Common "Set" methods:
Remember you still must create your date object before executing these methods

**setDate()**
```
//Add 25 days to the current date:
var myDate = new Date();
     myDate.setDate(myDate.getDate()+25); //returns milliseconds of the current date + 25 days.
```

**setFullYear()**
```
var myDate = new Date();
     myDate.setFullYear(2016, 0, 22); //sets the date to January 22, 2016.
     //Note: months represented by 0-11
```


There are three date methods that do not require the construction of a date object to return data

**Date.parse(dateString)**
Accepts an input of a valid date string we introduced above and returns the date in milliseconds

**Date.now()**
Returns the date in milliseconds starting in 1970 GMT

**Date.UTC(year, month, day, minutes, seconds, milliseconds)**
```
console.log(Date.UTC(96,11)); //849398400000
//Note:only Year and Month is a required field

###Moment.js
Finally we made it to moment.js. Moment is a javascript library that focuses solely on Dates. The moment.js developers define the library as having the ability to "parse, validate, manipulate, and display dates in javascipt".

Whereas in javascript dates are presented in miliseconds, and ugly date strings (Sun Aug 23 2015 18:36:58 GMT-0600 (MDT)), moment allows us to present dates that are user friendly. 
Note: You will need to pull this library into your embedded javascript or javascript files either locally or through a cdn. In order to present dates from the moment.js library, you will need to start each statement with moment().

Moment.js examples: 
We use moment() to initiate an instance of the moment.js date object.
```
format() //method on the moment.js object that requires data parameters.

moment().format('MMMM Do YYYY, h:mm:ss a'); //August 23rd 2015, 6:43:42 pm
moment().format('dddd'); //Sunday
moment().format("MMM Do YY"); //Aug 23rd 15
moment().format('YYYY [is still] YYYY'); //2015 is still 2015
moment().format(); //2015-08-23T18:44:38-06:00
```
Note: This library offers a lot more when representing dates and can be viewed at momentjs.com. Dont let your users see ugly date formats.


Please visit Mozilla Developers Network for further details on how you can construct and use your date object.

 