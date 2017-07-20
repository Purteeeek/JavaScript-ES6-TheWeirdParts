// Arrays are a collection of anything
// In most programming languages arrays can hold the data of same type
// but as js is dynamically typed arrays are a collection of anything

var arrr = [
	1,
	false,
	{
		name : "Pratik"
	},
	function(name) {
		console.log("Hello" + name)
	},
	"Welcome"
]

// so we created an array which has a number, a boolean, an object, a function and a string.
// just to prove the point arrays are a collection of anything

console.log(arrr)

arr[3](arr[2].name)
// I am passing the name property from the third element from the array to the function which is the 
// fourth element of the array.

// Array index start from 0 
// so first elemnt is 0
// second is 1
// third is 2 
// ...