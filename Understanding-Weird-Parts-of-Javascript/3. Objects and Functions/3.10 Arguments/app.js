// arguments and Spread.
// The later version of javascript has Spread.
// so we wont use arguments as much as we do .
// but lets talk about what arguments is.
// Remember?
// When you call a function the execution context is being set up and 
// javascript is giving you certain things,
// like the variable environment , the reference to the outer environment (the scope chain), the this keyword
// so whenever a function is being called javascript gives you one more variable.
// arguments
// what does this variable hold?
// it holds all the parameters you pass to the function while calling it.
// whatever we put inside those parantheses while calling the function are stored by the variable arguments

function sayHello(firstName, lastName, language){
	console.log(firstName);
	console.log(lastName);
	console.log(language);
	console.log("------------------");
}

sayHello();
// in many programming languages this will be an error but javascript doesnt care if you pass the params 
// or not, if you dont pass them theyre simply going to be undefined.
// remember hoisting?
// the variable space for those variables was set to undefined when execution context was being created.
// and thats why if you dont pass them they are gonna remain undefined.

sayHello("Pratik");
sayHello("Pratik", "Deshpande");
sayHello("Pratik","Deshpande","English");

// the above calls prove that whe you pass only one param it goes in the left most param.
// that means the params get the value from left to right. ie how the programmer wrote it.