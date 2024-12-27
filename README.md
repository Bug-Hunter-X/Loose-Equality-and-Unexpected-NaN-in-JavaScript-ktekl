# Loose Equality and Unexpected NaN in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to the loose equality operator (`==`). The issue arises when checking for `null` values while inadvertently handling `undefined` values differently than expected.

## Problem

The provided JavaScript code uses `x == null` to check if a variable `x` is either `null` or `undefined`. However, the behavior might not be as intuitive as it seems.  The loose equality (`==`) does type coercion which results in unexpected behavior in certain scenarios.

When `x` is `undefined`, the expression `x == null` evaluates to `true`, leading to a return value of `0`.  This might not always be the desired behavior. Instead, it is likely that we want to explicitly handle `undefined` separately.

## Solution

The solution involves using strict equality (`===`) which prevents type coercion, providing more predictable results.  Alternatively, explicit checks for both `null` and `undefined` can be used.

## How to run the code

1. Clone this repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the corrected code.
3. Use Node.js to run the script:  `node bug.js` and `node bugSolution.js`