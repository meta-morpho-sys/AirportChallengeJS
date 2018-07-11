# Airport Challenge in Java Script

## Exploring writing of JS and [Jasmine](https://jasmine.github.io/2.3/introduction.html) a TDD framework.

1. Set up the testing environment Jasmine-standalone-2.7.0
- Spec Runner.html (modified to look for tested spec and src files)
2. Wrote
- Feature test,
- PlaneSpec and
- AirportSpec

2. Why Strict Mode?
```
'use strict';
```

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

### Watch out for
```
 ;  ,  spaces  {}  clearForTakeOff and clearForTakeoff (spot the difference, if you can!)
```
