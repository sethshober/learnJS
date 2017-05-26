Similar to a debounce function, throttle is used to limit how often a function can be called, though throttle is simpler to implement. It takes `fn`, which is the function you want to be throttled, and `limit`, which is the time you want to enforce it to wait before being fired again.

It is implemented by wrapping the function and returning it with a timeout. When the function gets called it checks to see if a timeout is in session. If not it fires it, and then sets a timeout to the time of limit. If a timeout *is* in session, it becomes a no-op.


**Implementation**

<?prettify?>
```
function throttle(fn, limit) {
  let waiting = false
  return (...args) => {
    if (!waiting) {
      fn.apply(this, args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

// usage
let log = () => console.log('throttled')
window.addEventListener('keyup', throttle(log, 100))
```