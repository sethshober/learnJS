> An event emitter is responsible for managing a set of listeners and publishing events to them when it is told that such events happened.

Due to the asynchronous event driven architecture of JavaScript and Node, it is common to have emitter objects emit named events which can be listened to, causing functions to be called when the event is emitted. A listener can "subscribe" to an event, where a listener is a function. When that event is emitted, each listener is fired.

**API:** `addListener`, `removeListener`, `removeAllListeners`, `emit`, `once`, `listeners`

Let's get started! The constructor is stupid simple. It's just an object to track the events.

<?prettify?>
```
constructor() {
  this.events = {}
}
```

When we want to add a listener, we specify which event we want to listen to and what function we want to run when it is fired. Here we see if the event is already being listened to, and if not we add it. Each event keeps an array of listeners, which are just functions.

<?prettify?>
```
addListener(event, listener) {
  const events = this.events
  if (typeof listener === 'function') {
    if (events.hasOwnProperty(event) && Array.isArray(events[event])) {
        this.listeners(event).push(listener)
    } else {
      events[event] = [listener] 
    }
  }
}
```

The opposite of `addListener` comes `removeListener`. To remove a listener, we `splice` it out of the event's listeners array.

<?prettify?>
```
removeListener(event, listener) {
  const events = this.events
  let listeners
  let listenerString
  if (typeof listener === 'function' &&
      events.hasOwnProperty(event) &&
      Array.isArray(events[event])) {

    listeners = this.listeners(event)
    listenerString = listener.toString()
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i].toString() === listenerString) {
        listeners.splice(i, 1)
      }
    }
  }
}
```

If we want a listener to be called only once, we call `once` instead of `addListener`. This will remove it from the event it's listening to as soon as it's called. The key to this method is wrapping the listener. We actually store the wrapped version of the listener, which calls `removeListener` right before calling the listener.

<?prettify?>
```
once(event, listener) {
  const emitter = this
  emitter.on(event, function listenerWrapper() {
    emitter.removeListener(event, listenerWrapper)
    listener.apply(emitter, arguments)
  })
}
```

To remove all the listeners of an event, call `removeAllListeners`.

<?prettify?>
```
removeAllListeners(event) {
  const events = this.events
  if (events.hasOwnProperty(event)) {
    events[event] = []
  }
}
```

`listeners` is a helper method to return all the listeners of an event, and is used throughout the API.

<?prettify?>
```
listeners(event) {
  return this.events.hasOwnProperty(event) ? this.events[event] : []
}
```

And finally, `emit` is the "meat" of it all. This emits the event, which in turn fires all the listeners. One of the key things of this is to create a copy of the listeners upon emitting the event, which ensures any listeners that were added after the event was called do not get fired. It's also worth noting that we need to pay attention to the event loop here, as a listener could potentially have been removed during the current tick.


<?prettify?>
```
emit(event) {
  const events = this.events
  const args = Array.prototype.slice.call(arguments, 1)
  let listeners

  if (events.hasOwnProperty(event) && Array.isArray(events[event])) {
    // create a shallow copy
    listeners = this.listeners(event).slice()

    for (let i = 0; i < listeners.length; i++) {
      // The subscription may have been removed during this event loop.
      if (listeners[i]) {
        listeners[i].apply(this, args)
      }
    }
  }
}
```

---

**Final code for Emitter.**

<?prettify?>
```
'use strict'

/**
 * @class EventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. The following is a
 * very basic EventEmitter class
 */
class EventEmitter {
  /**
  * @constructor
  */
  constructor() {
    this.events = {}
  }


  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted.
   *
   * @param {string}   event    Name of the event to listen to
   * @param {function} listener Function to invoke when the specified event
   *                            is emitted
   */
  addListener(event, listener) {
    const events = this.events
    if (typeof listener === 'function') {
      if (events.hasOwnProperty(event) && Array.isArray(events[event])) {
        this.listeners(event).push(listener)
      } else {
        events[event] = [listener] 
      }
    }
  }


  /**
   * Alias to addListener
   */
  on(event, listener) {
    this.addListener(event, listener)
  }


  /**
   * Removes a registered listener from the emitter.
   *
   * @param {string}   event    Name of the event listening to
   * @param {function} listener Function to remove
   */
  removeListener(event, listener) {
    const events = this.events
    let listeners
    let listenerString
    if (typeof listener === 'function' &&
        events.hasOwnProperty(event) &&
        Array.isArray(events[event])) {
      
      listeners = this.listeners(event)
      listenerString = listener.toString()
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i].toString() === listenerString) {
          listeners.splice(i, 1)
        }
      }
    }
  }


  /**
   * Removes all of the registered listeners.
   *
   * @param {string} event Name of the event to remove listeners from
   */
  removeAllListeners(event) {
    const events = this.events
    if (events.hasOwnProperty(event)) {
      events[event] = []
    }
  }


  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} event Name of the event to emit
   * @param {*}            Arbitrary arguments to be passed to each
   *                       registered listener
   *
   * @example
   *   emitter.addListener('someEvent', (message) => {
   *     console.log(message)
   *   })
   *
   *   emitter.emit('someEvent', 'hello') // logs 'hello'
   */
  emit(event) {
    const events = this.events
    const args = Array.prototype.slice.call(arguments, 1)
    let listeners

    if (events.hasOwnProperty(event) && Array.isArray(events[event])) {
      // create a shallow copy
      listeners = this.listeners(event).slice()

      for (let i = 0; i < listeners.length; i++) {
        // The subscription may have been removed during this event loop.
        if (listeners[i]) {
          listeners[i].apply(this, args)
        }
      }
    }
  }


  /**
   * Much like addListener, except the listener is removed after being invoked.
   *
   * @param {string}   event    Name of the event to listen to
   * @param {function} listener Function to invoke only once when the given
   *                            event is emitted
   */
  once(event, listener) {
    const emitter = this
    emitter.on(event, function listenerWrapper() {
      emitter.removeListener(event, listenerWrapper)
      listener.apply(emitter, arguments)
    })
  }


  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param  {string} event Name of the event to query
   * @return {array}
   */
  listeners(event) {
    return this.events.hasOwnProperty(event) ? this.events[event] : []
  }

}


module.exports = EventEmitter
```

---

**Here are the tests. As always, they are not necessarily complete.**


<?prettify?>
```
'use strict'

const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const sinon = require('sinon')
const Emitter = require('../emitter.js')

describe('the Event Emitter', () => {

  describe('when constructing the emitter', () => {

    let emitter

    beforeEach(() => {
      emitter = new Emitter()
    })

    it('initializes with an empty event object', () => {
      should.exist(emitter.events)
      let emptyObject = {}
      expect(emitter.events.toString()).equal(emptyObject.toString())
    })

    it('has an addListener method', () => {
      should.exist(emitter.addListener)
      expect(emitter.addListener).a('function')
    })

    it('has an on method', () => {
      should.exist(emitter.on)
      expect(emitter.on).a('function')
    })

    it('on as an alias to addListener', () => {
      should.exist(emitter.on)
      emitter.addListener = sinon.spy()
      emitter.on('alias', () => {}) // should call addListener
      expect(emitter.addListener.callCount).equal(1)
    })

    it('has a removeListener method', () => {
      should.exist(emitter.removeListener)
      expect(emitter.removeListener).a('function')
    })

    it('has a removeAllListeners method', () => {
      should.exist(emitter.removeAllListeners)
      expect(emitter.removeAllListeners).a('function')
    })

    it('has an emit method', () => {
      should.exist(emitter.emit)
      expect(emitter.emit).a('function')
    })

    it('has a once method', () => {
      should.exist(emitter.once)
      expect(emitter.once).a('function')
    })

  })

  describe('when adding and removing listeners', () => {

    let emitter

    beforeEach(() => {
      emitter = new Emitter()
    })

    it('should not throw when adding a listener', () => {
      expect(() => {emitter.addListener('greet', () => {})}).not.throws()
    })

    it('should not throw when adding a listener with on alias', () => {
      expect(() => {emitter.addListener('greet', () => {})}).not.throws()
    })

    it('adds a listener', () => {
      emitter.events = {}
      emitter.addListener('greet', () => {})
      expect('greet' in emitter.events).equal(true)
    })

    it('adds a listener when using on alias', () => {
      emitter.events = {}
      emitter.on('greet', () => {})
      expect('greet' in emitter.events).equal(true)
    })

    it('should not throw when adding a listener once', () => {
      expect(() => {emitter.once('greet', () => {})}).not.throws()
    })

    it('adds a listener once', () => {
      emitter.events = {}
      emitter.once('greet', () => {})
      expect('greet' in emitter.events).equal(true)
    })

    it('should not throw when removing a listener that exists', () => {
      let fn = function testing() {}
      emitter.events.greet = [fn]
      expect(() => {emitter.removeListener('greet', fn)}).not.throws()
    })

    it('should not throw when removing a listener that does not exist', () => {
      expect(() => {emitter.removeListener('greet')}).not.throws()
    })

    it('should not throw when removing all listeners', () => {
      emitter.events.greet = [function(){}, function test(){}]
      expect(() => {emitter.removeAllListeners('greet')}).not.throws()
    })

    it('should not throw when removing all listeners when there are none', () => {
      emitter.events = {}
      expect(() => {emitter.removeAllListeners('greet')}).not.throws()
    })

    it('returns array of listeners for an event', () => {
      let listener = () => {}
      emitter.addListener('now', listener)
      let listeners = emitter.listeners('now')
      expect(listeners.length).equal(1)
      expect(listeners).to.have.members([listener])
    })

    it('returns empty array when there are no listeners', () => {
      let listeners = emitter.listeners('now')
      expect(listeners.length).equal(0)
    })

  })

  describe('when emitting events', () => {

    let emitter

    beforeEach(() => {
      emitter = new Emitter()
    })

    it('should not throw when emitting an event', () => {
      expect(() => {emitter.emit('greet')}).not.throws()
    })

    it('should not throw when emitting an event with extra arguments', () => {
      expect(() => {emitter.emit('greet', 'extra argument')}).not.throws()
    })

    it('notify listener when event is emitted that it is listening for', () => {
      let callback = sinon.spy()
      
      emitter.addListener('greet', callback)
      emitter.emit('greet')
      
      expect(callback.called).to.be.true
    })

    it('does not notify listener when event is emitted that it is not listening for',
      () => {
        let callback = sinon.spy()
        
        emitter.addListener('greet', callback)
        emitter.emit('nope')
        
        expect(callback.called).to.be.false
    })

    it('notifies multiple listeners when emitting an event they are listening for',
      () => {
        let callback1 = sinon.spy()
        let callback2 = sinon.spy()
        
        emitter.addListener('greet', callback1)
        emitter.addListener('greet', callback2)
        emitter.emit('greet')
        
        expect(callback1.called).to.be.true
        expect(callback2.called).to.be.true
    })

    it('does not notify after listener is removed', () => {
        let callback = sinon.spy()
        
        emitter.addListener('greet', callback)
        emitter.removeListener('greet', callback)
        emitter.emit('greet')
        
        expect(callback.called).to.be.false
    })

    it('does not notify after all listeners are removed', () => {
        let callback = sinon.spy()
        
        emitter.addListener('greet', callback)
        emitter.removeAllListeners('greet')
        emitter.emit('greet')
        
        expect(callback.called).to.be.false
    })

    it('only calls listener once when added with once', () => {
        let callback = sinon.spy()
        
        emitter.once('greet', callback)
        emitter.emit('greet')
        expect(callback.callCount).equal(1)

        emitter.emit('greet')
        expect(callback.callCount).equal(1)
    })

    it('invokes only the listeners registered at the time the event was ' +
       'emitted, even if more were added', () => {
      let callback1 = sinon.spy()
      let callback2 = sinon.spy()

      emitter.addListener('test', callback1)
      emitter.addListener('test', () => {
        emitter.addListener('test', callback2)
      })
      emitter.emit('test')

      expect(callback1.callCount).equal(1)
      expect(callback2.callCount).equal(0)
    })

    it('passes extra arguments to listener', () => {
      let fn = function log(message) { 
        expect(arguments.length).equal(1)
        expect(arguments[0]).equal('data')
      }
      emitter.addListener('test', fn)
      emitter.emit('test', 'data')
    })

  })

})
```