console.log(b)// will log "b was called"
console.log(a)//will log undefined

var a = "hello world"

func b() {
    console.log("b was called") 
}

//The above phenomena taking place is because of something known as hoisting.
// To understand hoisting we can say the our function declaration and variable declaration 
//is being moved on top. Which is on the top of the code and then when it actually encounters
// a the value is being set to the variable.

//func b() {
//    console.log("b was called");   
//}
//var a

//console.log(b)// will log "b was called"
//console.log(a)//will log undefined

//a = "hello world";

// this is how our code will look like because of hoisting. This is good to explain but this
// is not what is actually taking place. Like the code isnt physically being moved.
// To understand hoisting lets get deeper in execution context.
// When a java script code is run an execution context is being created. 
//Execution context is being created in two phases
// IN the first phase we get the Global Object, this, Outer Environment, 
// AND IT SETS UP MEMORY SPACE FOR VARIABLES AND FUNCTIONS. 
// SO WHEN THE CODE IS BEING EXECUTED THE VARIABLES ARE THERE IN THE MEMORY.
// THIS IS CALLED HOISTING.


// In case of Functions. The entire function sits in the memory 
// In case of variables its just the variable name. Its only declared and gets a 
// value of undefined

