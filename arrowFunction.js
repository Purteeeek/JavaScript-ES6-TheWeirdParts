
// ES5 
function getPrice() {
return 3.15
}

console.log(getPrice())

//ES6 way of writing functions. Arrow Functions are cool. but they are not hoisted

const getpriceES6 = _ => 3.16

console.log((getpriceES6()))

// Parameterised arrow functions in ES6
const getPriceES6 = discount => 3.15 * discount

console.log(getPriceES6(0.6))

//Multiple parameterised arrow functions in ES6

const getPriceES6MultipleParams = (discount,tax) => 3.15 * discount + tax
console.log(getPriceES6MultipleParams(0.20,1))

