// We know that function is nothing but an object. 
// We also know that whenever a function is invoked a new execution context is being created. 
// Now the thing we have to understand here is that. 
// an execution context is created only when the code property of the function object is invoked or run.
// Now whenever an execution context is being created we get a variable space and an outer reference , which
// helps us to travel the scope chain.
// and what we also know that we get a variable called this.
// Now this will point to different things depending on how the function was invoked 

console.log(this) // this points to the window object.
 
function a(){
	console.log(this);
}

a()
// surprised much?
// this still refers to the window object even if it is inside a function.
// so whenever you are invoking a function which sits in the code at
// a global level it is going to point at the window object.

var b = function () {
	console.log(this)
	this.myVariable = "Hello"
}

b() 
console.log(myVariable)

// so even with the function expression, the behaviour of this doesnt change. 
// the function was invoked, which sits on a global level and this still points to the window object.
// now you can see that even after b was invoked and completed. we can still print myVariable.
// because we attached it to the global ie the window object and not the function.
// we have three execution contexts, global ,a and, b and all the three this are pointing towards the same window 
// object