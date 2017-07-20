function buildfunc() {
	var arr = [];

	for(var i = 0; i < 3 ; i++){
		arr.push( function() {
				console.log(i);
				console.log("--------------")
			}
		)
	}

	return arr ;
}

var fz = buildfunc();

fz[0]();
fz[1]();
fz[2]();

// we created a function that returns us array of three functions.
// remember that its returning a function.
// so what did you expect to console.log when the three functions were called
// 0 1 2?
// what was the output?
// 3
// 3
// 3

// surprised?
// want to know what happened?
// so when the three functions were created i was different. but all the three functions are refering to 
// the same variable i 
// which is inside buildfunc()
// now that we have studied closures we understand that
// even when the execution context of buildfunc() the memory space and the variables in the space
// were there and all the three functions have their outer reference to them
// now when you are actually calling the function the value i that they are accessing is 3
// even though the when the functions were being created the value of i was different
// but they are still accessing the same variable i
// now the functions in the array are all the same
// and the i is refering to the same space
// and also i when build function was completed was 3
// THE LAST VALUE OF i was 3
// and therefore all the three printed 3
// understanding closures?


// So now what do we do if we actually want console.log to be
// 0
// 1
// 2
// what will we do?
// somehow we will need three different execution context for the three variables.
// Remember our friend IIFE's?
// they will help us achieve the behaviour

function buildfunc1() {
	var arr = [];

	for(var i = 0; i < 3 ; i++){
		arr.push( 
			(function(j) {
				return function(){
					console.log(j)
					console.log("----------------------")
				}
			}(i))
		)
	}

	return arr ;
}

var fz1 = buildfunc1();

fz1[0]();
fz1[1]();
fz1[2]();

// so what is happening now?
// what we are doing is 
// we created an IIFE which returns functions.
// now the IIFE will be run thrice.
// so three execution contexts will be created where the value of j would be 
// 0
// 1
// 2 
// and in the iife we passed the parameter i which is 0 1 2
// even if the function is out of the execution stack 
// we know closures
// the functions inside iife were created and they still have outer reference to the execution 
// context of IIFE
// so three execution contexts of three IIFes
// and the three functions in our array have three different outward reference
// and now all the functions are printing j 
// and there are three j's
// the first function which has an outer reference to exec context of first IIFE  has j to 0
// the second function which has an outer reference to exec context of second IIFE  has j to 1
// the third function which has an outer reference to exec context of third IIFE  has j to 2

// hence what you got was 
// 0
// 1 
// 2

// so now I hope these examples give you a better understanding of closures.
// write your examples
// play with the code
// this concept will sink in
