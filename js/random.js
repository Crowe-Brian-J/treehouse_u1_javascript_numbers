/*
Math.random() returns a number from 0 to 1, not including 1.

Math.floor() returns an integer rounding down, no matter what
Math.ceil() returns an integer rounding up, no matter what
Math.round() returns an integer based on traditional rounding methods

When rolling a die, it is advisable to use "Math.floor(Math.random() * 6) + 1" because Math.ceil() could still return a 0 if the random number generated is 0.
*/

const dieRoll = Math.floor(Math.random() * 6) + 1
console.log()
