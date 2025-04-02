# JavaScript Interview Question

## Explain the concept of "hoisting"

## Explain how `this` work in JavaScript

`this` keyword is the dynamic reference of the context in which the function executed.
The value of `this` keyword depends on how the function is called, not where it is defined.

- If the `new` keyword is used when calling the function, meaning the function is used as a function constructor, the `this` inside the function is the newly created object instance.
- if `this` is used in a `class` `constructor`, the `this` inside the `constructor` function is the newly create object instance too.
- if a function invoked using `.call()`, `.apply()` or `bind()`, `this` inside the function refers to the object passed as the argument.
- If a function called as a method, like `obj.method()`, `this` is refers to the object that the function is a property of.
- If a function is invoked as a **free function invocation**,
  - In non-strict mode, `this` default refer to global context, `window` in browser and `global` in Node.js.
  - In strict mode, `this` is `undefined`.
- For an arrow function, it follows a different rule, `this` refers to the surrounding scope at the time it is created.

## What is the event loop in JavaScript runtimes?
