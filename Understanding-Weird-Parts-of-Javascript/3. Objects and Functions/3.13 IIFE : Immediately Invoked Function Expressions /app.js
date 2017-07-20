// function statement
function sayHello(name){
	console.log("Hello " + name);
}

sayHello("Pratik");

// we know this type of a function is in the memory and then the code property is invoked when the func
// is called

// function expression 
var hello = function(name) {
	console.log("Hello " + name);
}

// such type of a function is not put directly in the memory but more like created on the fly when the js
// engine hits this line of code.
// we invoke it by the variable name 
hello("Pratik");

