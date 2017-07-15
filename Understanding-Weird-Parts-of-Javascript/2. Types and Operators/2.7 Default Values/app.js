// ES6 has a different syntax for giving a default value and that will be added to the es6 section later.
// so here is es5 way of doing it 

function a(name){
	console.log('Hello ' + name)
}
// Now the above function takes a parameter name and console.logs hello whatever the name is

a("Pratik") // will log Hello Pratik

a()
// when we pass no parameter it will say Hello undefined.
// as we know javascript has already put the variable name in the execution context of the function that was invoked
// it doesnt care if we actually passed any value or no.
// this behaviour is seemly.
// it coerced the value undefined to a string and then added both the strings.

// hence what we can do is 
// change the function to this

function b(name){
	name = name || 'Your name here' // || means or it will return a value that can be coerced to true.
	console.log('Hello' + name)
}

b()
// Now even though we didnt pass a value it will say hello your name here.