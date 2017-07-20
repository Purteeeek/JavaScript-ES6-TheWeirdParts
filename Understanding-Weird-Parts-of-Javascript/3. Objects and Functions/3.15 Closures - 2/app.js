function buildfunc() {
	var arr = [];

	for(var i = 0; i < 3 ; i++){
		arr.push( function() {
			   // var x = i
			   // console.log(x)
				console.log(i);
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
// and therefore all the three printed 3
// understanding closures?
// uncomment those two lines in the function and refresh the browser you'll understand all that I typed in a 
// better way