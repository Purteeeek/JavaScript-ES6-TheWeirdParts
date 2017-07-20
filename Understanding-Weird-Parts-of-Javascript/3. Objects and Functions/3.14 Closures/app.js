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