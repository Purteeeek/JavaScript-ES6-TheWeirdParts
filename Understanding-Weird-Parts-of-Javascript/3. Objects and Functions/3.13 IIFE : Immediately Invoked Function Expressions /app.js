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

// immediately invoked function expressions.
// these are the functions that you call as soon as you declare them

var hola = function(name){
	return "hello " + name;
}("Pratik");

// notice the weird syntax above, we just wrote a function which created the function object and 
// as soon as we closed the function object and invoked the function like we would invoke any fnuction
// we also gave in the parameter like we used to 
// also now variable hola doesnt hold the entire function but only holds.
// hello Pratik

console.log(hola);

// see it yourself.
// hola holds a string and not a function 
// console.log(hola()) will give an error.
// these are the basics of IIFE's
// IIFE's let you run the function as soon as you create it

// another ways of writing IIFEs are
(function(name){
	console.log("Hello " + name);
}("Pratik"))

// you have to wrap the entire function expression inside () because of syntax parsers. try using 
// them without the () 
// in Js if the line starts with function 
// js thinks its gonna be a function statement
// but you want an anonymous function.
// you are not declaring any function with a name/
// so to trick java script that you are typing an expression
// you have to wrap everything inside()
