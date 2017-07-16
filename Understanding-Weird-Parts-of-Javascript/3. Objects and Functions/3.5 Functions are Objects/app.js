// Yes functions are objects
// javascript has first class functions.
// meaning everything you can do with other types you can do it with a function.
// assign them to variables, pass them around, create them on the fly 
//these change the way we code

// Function is a special type of an object though.
// it has all the properties of an object plus some extra properties.
// The function can have a primitive, other functions, other objects attached to it.
// whats special about this function object is.
// there is a special property called the code. which is invokable.
// yes the code you and I write in a function is merely one of the many properties which is invokable
// also it is optional to give a name to a function in js. you can have anonymous functions too

// This is a very weird concept. so lets see and prove it 

function sayHelloWorld() {
	console.log("Hello World")
}

sayHelloWorld.language = "English" // We just used the dot operator and attached the 
// property to our function. IN other languages this is not possible. 

console.log(sayHelloWorld) // this will log the function object 
// this will log 
// function sayHelloWorld() { 
//	console.log("Hello World")
// }
// but now check this out 

console.log(sayHelloWorld.language) // this will log English.
// ta-da this is an object like behaviour. so functions are nothing but objects