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
/
// the above function is a function statement as it doesnt result in some value. it just gets put in the memory


// the obve function gets hoisted and also it has a name property which is sayHi and code prop which has
// our code in it 

var anonymousHi = function () {
	console.log('Say hi bruh')
}

// the above function is a function expression as some value is being generated and being given to the 
//variable
// now above we created a function which also resides in the memory and has no name in the name property
// but we dont need it as we have a variable that knows where the function resides. and it has the same 
// code property 

