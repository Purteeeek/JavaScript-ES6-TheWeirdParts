// We know that function is nothing but an object. 
// We also know that whenever a function is invoked a new execution context is being created. 
// Now the thing we have to understand here is that. 
// an execution context is created only when the code property of the function object is invoked or run.
// Now whenever an execution context is being created we get a variable space and an outer reference , which
// helps us to travel the scope chain.
// and what we also know that we get a variable called this.
// Now this will point to different things depending on how the function was invoked 

console.log(this) // this points to the window object.
 
function a(){
	console.log(this);
}

a()
// surprised much?
// this still refers to the window object even if it is inside a function.
// so whenever you are invoking a function which sits in the code at
// a global level it is going to point at the window object.

var b = function () {
	console.log(this)
	this.myVariable = "Hello"
}

b() 
console.log(myVariable)

// so even with the function expression, the behaviour of this doesnt change. 
// the function was invoked, which sits on a global level and this still points to the window object.
// now you can see that even after b was invoked and completed. we can still print myVariable.
// because we attached it to the global ie the window object and not the function.
// we have three execution contexts, global ,a and, b and all the three this are pointing towards the same window 
// object


var c = {
	name : "this is the object we created"
	log : function () {
		console.log(this)
		this.fullName : "Updated the object"
	}
}

// above we created a function log which is a method on the object c.

c.log() // this points to the object c.

// now as the function or the method was written inside the c object this points to the c object
// so whenever the method or function is written inside an object the this keyword becomes the 
// object that the method is sitting inside of
// as the this is pointing to the object you can now mutate the values or add new properties by using the 
// this keyword

// THE THIS Bug - Most common bug

var d = {
	name : "Pratik"
	log : function() {
		console.log(this)
		this.name = "Updated Pratik"

		var setName = function (newName){
			this.name = newName
		}

		setName("Updated Pratik through internal function")
		console.log(this)
	}
}

// ------ EXPECTED BEHAVIOUR ------------
// above we have created an object which has a log method which updated the name to Updated Pratik 
// we console.log(this) to check that the name property of the object was changed.
// we have written a function inside the function where we expect to change the name property again to whatever 
// parameter is being passed 
// and then we call it 
// now we should see name property of the object to be Updated Pratik through internal function

// ------ How javascript behaves -------
// when you check the console.logs you will see that the setName function changed nothing in the object.
// and the name property in the object was still Updated Pratik 
// it happened because when you create the function inside a function.
// technically you are still in the object.
// and you would think that what you are changing is the property of the object but no.
// what you just changed or edited was on the global object.
// WHEN A METHOD IS WRITTEN INSIDE A METHOD WHICH SITS INSIDE AN OBJECT.
//THE INNER MOST METHOD GETS THE this VARIABLE WHICH POINTS TO THE GLOBAL OBJECT.
// STRANGE BUT THIS IS HOW JAVASCRIPT FUNCTIONS.

console.log(name)
// NOW THIS NAME LOGS
// Updated Pratik through internal function.
// This is one of the parts where javascript is strange.

