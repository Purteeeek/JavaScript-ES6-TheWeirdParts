// By value.

var a = 2;
var b;
b = a;
a = 3;
console.log(a); // 3
console.log(b); // 2

// when a primitive type in javascript is copied or passed to a function. a new space in the memory is set up
// and the content is actually copied.
// so when b = a happened. 
// actual content from a was placed copied into a new memory space. which was associated with b
// this is called by value.
// and thats the reason why, when a was changed b did not go through any change.
// this is followed with primitives in javascript

// By Reference.

// With objects and functions. the case is different. 
// lets see this. 

var c = { name : "Pratik" }
var d;
d = c ;
c.name = "Abhishek";
console.log(c);
console.log(d);

// You will be surprised that in both c and d the name property was changed to Abhishek, where as you might
// have expected Pratik in d.
// What happens during the case of objects is.
// when d = c was executed
// no new memory space was set up and the content was not copied.
// instead, d also pointed at the same memory location 
// this is like you having two names, an alias.
// because as both the things are pointing to the same location, the content change will be reflected .
// c and d are just two different names for the same object in this case. 



// lets write a function that changes the name property
function changeName(obj){
	obj.name = "Pasha"
}

changeName(d);
// notice that I have passed d to the function
console.log(c);
console.log(d);
// and as both c and d were pointing to the same locations. the property name changed to both of them.
// when d was passed to the function .
// the function parameter obj also pointed to the same memory space and changed the value .
// understanding this behaviour can save you from some bugs which are hard to debug


// Now there is an exception to the above case.
var c = { name: "Purteeek"}
// now when I used the object literal syntax again, I am telling javascript to create a new object.
// and now a new memory space was set up and a new object was again created.
// and now only c points to this .
// as d was pointing to the old object.
// consider this as a new object with new memory space and the reference in c was changed to this new 
// memory space 
console.log(c);
console.log(d);



