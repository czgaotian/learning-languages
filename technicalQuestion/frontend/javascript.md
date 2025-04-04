# JavaScript Interview Question

## Explain the concept of "hoisting"

Hoisting a Javascript mechanism where variable and function are move to the top of the scope during the compiler phase. Use different keyword behave differently when hoist.

- use `var` to declare variable, the value of the variable is `undefined` if accessed before initialization.
- use `let` or `const` to declare variable, accessing them results in `ReferenceError` until the actual declaration is encountered.
- use `var` to declare function, The value of the variable is `undefined` if accessed before initialization.
- use `function` to declare function, Both declaration and definition are fully hoisted.
- Class declaration `class` Accessing them results in ReferenceError until the actual declaration is encountered.
- Import declaration `import` Declarations are hoisted, and side effects of importing the module are executed before the rest of the code.

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

## First order function vs higher order function

higher order function: Takes one or more functions as arguments and return a function as its result

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2); // map takes a function
```

First order function: does not take another function as an argument and does not return a function.
