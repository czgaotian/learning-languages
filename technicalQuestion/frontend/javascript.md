# JavaScript Interview Question

## Explain the concept of "hoisting"

## Explain how `this` work in JavaScript

`this` keyword is the dynamic reference of the context in which the function executed.
The value of `this` keyword depends on how the function is called, not where it is defined.

- If the `new` keyword is used when calling the function, meaning the function is used as a function constructor, the `this` inside the function is the newly created object instance.
- if `this` is used in a `class` `constructor`, the `this` inside the `constructor` function is the newly create object instance too.
-
