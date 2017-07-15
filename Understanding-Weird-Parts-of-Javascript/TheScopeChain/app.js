function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// The output is 1.
//Now some may think it should be undefined and some may think it should be 2.
// 1.
// Lets take a deep dive into this .

// So when the program was running
// Syntax Parser scans the code and puts the functions and the variable declarations into the memory space
//(Hoisting)^

//The syntax parser knows where the code has been written. That is javascript considers one parameter which 
// we havent explored yet. The reference to the outer context when an execution context was being created.
//This gets decided on the basis of where the code sits in the program. That is the explicit position of the code.
//Now the function declaration of a and b both is in the global space.
// Even though b is getting invoked inside of a. 
// The code lexically sits in the global space.
// Therefore, when the execution stack is being created.

//The Global execution stack with myVar = 1 and no outer reference.
//a gets invoked so the execution stack for a with myVar = 2 and the outer reference to Global.
// Now inside a when b gets invoked, even though right below b in the execution stack is a the 
// OUTER REFERENCE IS GLOBAL. AS THE FUNCTION b ACTUALLY RESIDES IN THE GLOBAL SPACE.
// both a and b are in the global space hence both of the function will have a outer reference pointer to global.

// Now when we did console.log(myVar) it didnt find any varaible in the execution context of b. So javascript
// goes to the outer reference and checks the variable there. 
// in this case it went to global and global had myVar = 1. HEnce the value 1.

//This outer references make a chain and this is called as the scope chain.
