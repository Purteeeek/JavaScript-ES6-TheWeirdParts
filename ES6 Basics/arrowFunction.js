
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

// Multi statement arrow functions do require the return statement
const getFinalPrice = (discount,tax) => {
	const afterDiscount = 3.15 * discount
	return afterDiscount + tax
}

//Single line arrow functions return is implicit. when curly braces are used you need a return 
// If you want to return an objec then ({ put your return type as object code in here})
