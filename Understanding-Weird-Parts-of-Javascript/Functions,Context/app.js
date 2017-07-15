function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1
console.log(myVar)
a();
console.log(myVar)

//What will this code do?
//The output is
//1
//2
//undefined 
//1
// SO Javascript makes the first global execution context
// the window object and in that context the value of 
// myVar is 1
// now when a() is invoked a new execution context is created
// which is on top of the window object. (The execution stack)
// and in that context for a the value of myVar is 2
// now when b() got invoked a third execution context was created 
// and in the third execution context the value of myVar was undefined
// After the execution of b got over the context was popped from the 
// execution stack and similar happened with a. and then finally again
// globally the value of myVar is 1. 
// Because both the execution contexts of a and b have now popped out of the 
// stack. in the global execution context the value of myVar is still 1
// hence the last output is also 1

//------SCOPE---------
// This tells us a lot about the scope of the variables 
// and how there can be different values at different points of time