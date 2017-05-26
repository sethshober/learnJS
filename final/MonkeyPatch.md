Due to the ability to pass around functions as objects and the asynchronous nature of JavaScript, being able to extend and modify functions is an important skill.

One example of this is when there is a bug in a third party module and you do not have the ability to change that code. You could temporarily wrap that API and patch it yourself.

Another great example of this is instrumenting code, which is timing functions in order to track performance.

Any product that is monitoring code, such as [New Relic](https://newrelic.com/) or [AppDynamics](https://www.appdynamics.com/), will be doing this. The following shows how to generically wrap a function, as well as add timing components.


First we'll look at the general wrapping of a function. Wrapping a function is merely taking a function as input and returning that function with any necessary changes. Here's how that looks

<?prettify?>
```
// here we wrap a given function, extending its use
function wrap(fn) {  
  return (...args) => {
    // do stuff
    console.log('wrapped')
    // call original function
    fn.apply(this, args)
  }
}

// usage
let myFunc = message => console.log(message)
let wrapped = wrap(myFunc)
wrapped('hello') // hello
```

What if we want to use memoization to improve performance. If the function we are wrapping is not side-effectful, we can store the computed output, since passing the same values each time should yield the same result.

<?prettify?>
```
// same thing, but we memoize the inputs for performance
function wrapMemoized(fn) {  
  const memo = {}
  return (...args) => {
    // do stuff
    console.log('wrapped')
    if (memo.hasOwnProperty(args)) {
      return memo[args]
    } else {
      memo[args] = fn.apply(this, args)
      return memo[args]
    }
  }
}
```


Now that we know how to wrap a function, let's add timing to it. In node we can use [process.hrtime([time])](https://nodejs.org/api/process.html#process\_process\_hrtime\_time).

>This method returns the current high-resolution real time in a `[seconds, nanoseconds]` tuple Array. `time` is an optional parameter that must be the result of a previous `process.hrtime()` call (and therefore, a real time in a [seconds, nanoseconds] tuple Array containing a previous time) to diff with the current time.


If you are using this in the browser use `new Date()` instead. Here is the instrumentation for a synchronous function. We simply start the time before the function gets called and end it after.


<?prettify?>
```
// time a given synchronous function
function instrumentSync(fn) {
  return (...args) => {
    const start = process.hrtime()
    fn.apply(this, args)
    const duration = process.hrtime(start)
    console.log(duration[1])
  }
}
```

Timing an asynchronous function becomes a bit more complicated. Here we need to account for the time the function gets called until the callback function gets called. To do this we end the timing inside the callback function, which means we need to wrap that as well.

<?prettify?>
```
// time a given asynchronous function
function instrument(fn) {
  return (...args) => {
    const start = process.hrtime()
    const callback = args[args.length - 1]
    function wrappedCallback(...args) {
      const duration = process.hrtime(start)
      console.log(duration[1])
      callback.apply(this, args)
    }
    args[args.length - 1] = wrappedCallback
    fn.apply(this, args)
  }
}
```