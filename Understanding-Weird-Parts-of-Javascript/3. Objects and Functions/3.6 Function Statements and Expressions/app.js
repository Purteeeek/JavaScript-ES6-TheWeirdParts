// Expression : A unit of code that results in some value , it doesn't explicitly have to save to a variable

//eg  3+5 will return 8 

// statement is something that doesnt return a value . like if ( a === 3 )
// you cant just assign var b = if ( a === 3 ) , get it?
// if is a statement and inside the bracket is an expression. 
// a === 3 will return a value 

sayHi() // hoisting


function sayHi () {
	console.log("say hi bruh")
}
// the above was put directly into the memory
// the above function is a function statement as it doesnt result in some value. it just gets put in the memory


// the obve function gets hoisted and also it has a name property which is sayHi and code prop which has
// our code in it 


// anonymousHi() ---> will result in error. uncomment and think why 
var anonymousHi = function () {
	console.log('Say hi bruh')
}

anonymousHi()

// the above function is a function expression as some value is being generated and being given to the 
//variable
// now above we created a function which also resides in the memory and has no name in the name property
// but we dont need it as we have a variable that knows where the function resides. and it has the same 
// code property 

// anonymousHi() will give an error if we try to call it anywhere above the line where we wrote our function
// which was given to a variable
// Calling the function expression before declaration is not possible. 
// even tho the variable is given a value of a function
// we saw that while the hoisting phase only variable declartions are put into the memory 
// and are given a value of undefined 
// so until the code below this is executed , we cannot call the anonymous function

function logSomething(a){
	console.log(a)
}

logSomething(69) // console logs 3 
logSomething("Hello") // console logs Hello 
logSomething({
	name : "Pratik"
}) // console logs the entire object

logSomething(function() {
	console.log("Pratik Created a function on the fly")
}) // will log the function object. As I said. 

//FIrst class functions. Create them on the fly pass them to functions as parameters.

function run(a) {
	a()
}

run(function() {
	console.log("Pratik Created a function on the fly")
})

// in the above statements I created a function run that gets a parameter.
// and I called the parameter. so then later I passed a function to it and then tada it was called.






