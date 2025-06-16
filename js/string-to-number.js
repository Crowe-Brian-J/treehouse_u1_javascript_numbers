const HTMLBadges = prompt('How many HTML badges do you have?')
const CSSBadges = prompt('How many CSS badges do you have?')

//const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);

const pi = '3.14'

//parseInt for integers - if decimals, will only return integer before decimal point
//parseFloat for decimals - will return numbers if at start, NaN if letters
//Unary plus operator ('+') in front attempts to convert string to number (int or float)

const totalBadges = +HTMLBadges + +CSSBadges

console.log(typeof totalBadges)
console.log(totalBadges)
