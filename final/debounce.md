A debounce function is a way to limit the rate at which a function can fire. This can be extremely useful for performance, especially on the client side among your event listeners. Imagine firing a function every time `scroll` gets emitted. That would be a nightmare.

This type of function is also a great way to show understanding of JavaScript idioms.

The following is an implementation for general use. I suggest checking into [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) for the use in the browser, which will help to optimize these calls for you.

The debounce essentially takes a function, wraps it, and returns it. The parameters are `fn` for the function to debounce, `wait` for the limit ensure it runs in, and `immediate` which is a boolean for whether the function will be called on the leading or trailing edge (before of after the wait).

How this works is we keep track of a timeout. When the function gets called the timeout gets cleared and we reset it to start the wait over. If immediate is true, we call the function right away, as long as there isn't a timeout running. If immediate is false, we start the timeout and fire it when that finishes.

This returns a function, so to use it call debounce on the function you want to limit the rate on, and assign that to a variable.


**Here's the implementation.**

<?prettify?>
```
function debounce(fn, wait, immediate) {
  let timeout
  return (...args) => {
    if (immediate && !timeout) {
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        fn.apply(this, args)
      }
    }, wait)
  }
}

// usage
let checkPositionFromBottom = debounce(() => {
  // do your thing!
}, 250)

window.addEventListener('scroll', checkPositionFromBottom)
```