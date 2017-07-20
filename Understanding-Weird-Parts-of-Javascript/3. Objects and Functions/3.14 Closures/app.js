// one of the most important and slightly difficult to understand.
// but if you have reached here
// you are ready
// lets write some code in here

function welcome(whatToSay){
	
	return function(name){
		console.log(whatToSay + " " + name);
	}
}

var x = welcome("HI");
x("Pratik")

// so first we created a function which returns a function.
// we called the function and stored the function that was returned in x
// we called x and ran the function returned by welcome.
// we got a console log of HI Pratik
// How did we get that?
// because the welcome was invoked and was removed from the execution stack.
// how did the function x know the value of whatToSay even when the function was previously called and executed
// and it completed the execution.

// it is because of closures

// so what is happening under the hood.
// 

// when the function welcome was invoked its execution context was created and the variable space was setup 
// now in that variable space whatToSay lives.
// when the function completed the execution. 
// the execution context was popped from the stack but the variable still existed in the memory
// now as x() was invoked but the function lexically sits inside the function welcome
// and was formed because welcome was called.
// the outer reference of x will still point the the space where welcome lived.
// even though the execution context of welcome() was gone.
// javascript still keeps the variables attached to them 
// so that other functions written inside them can travel the scope chain.
// and the function x which was formed because welcome() was invoked simply pointed 
// to the memory space which was taken by welcome as an outer reference
// and in this space there lived whatToSay.

//This is called as closure