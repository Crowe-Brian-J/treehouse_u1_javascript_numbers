//given constants from lesson
const secsPerMin = 60
const minsPerHour = 60
const hoursPerDay = 24
//removed for accuracy
//const daysPerWeek = 7;
//const weeksPerYear = 52;
const daysPerYear = 365

//lesson constants
const age = Number(prompt('How old are you?'))
const main = document.querySelector('main')
const addLeapYears = Math.floor(age / 4)

//calculated constants
const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay
const addLeapDays = addLeapYears * secondsPerDay
const secondsAlive = age * daysPerYear * secondsPerDay + addLeapDays

/*
printed logs - removed to print on website
console.log(`There are ${secondsPerDay} seconds in a day.`);
console.log(`I've been alive for more than ${secondsAlive} seconds.`);
*/

main.innerHTML = `<h2>There are ${secondsPerDay} seconds in a day.</h2><p>You have been alive for more than ${secondsAlive} seconds.</p>`
