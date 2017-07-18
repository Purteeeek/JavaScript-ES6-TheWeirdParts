//Whenever we run a javascript file, it creates two things for us
//A variable called this and a global object.
//The global object is the window and at a global level this is also equal to the window 
//Global in javascript means "Not inside a function". Dont think about it more than that
//If you run the html. Go to the console type in 'this' and hit enter
//Now node js will not have a window object. But will have some global object.
//Whenever Javascript is being run on a browser the window object is created and when you open a new tab. A new window object will be created


var a = "Hello World";


console.log(a)

//Just open the window and also checkout the window object. You'll find a in the window object. Type a and hit enter in the console. you'll see hello world. type window.a and still you'll get the answer. Which means javascript attached the global variable to the window object.

//Look at it this way, when javascript code is executed an execution context is created. Global object is created by execution context. and when running in browser the global object is a window. it gives you a variable named this. and also a Link to Outer Environment. Say when you're in a function then there is a link to an outer environment. But in Window you're already at the outmost and there is no more outer environment (null at global level)
