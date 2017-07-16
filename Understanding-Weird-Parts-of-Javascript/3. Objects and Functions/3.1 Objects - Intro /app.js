// Objects are collection of names and value pairs. 
// That is an object .
// What can objects have inside them?
// Anything 
// objects have properties and methods.
// a primitive type (out of those 6) is called a property
// another object (this object I am talking about is inside a certain object). is also a property
// if objects have functions in them they are called as methods 
// So objects reside in the memory and they contain references to the properties and the methods which are also 
// present in the memory .
// Fair enough?

var person = new Object(); // Note : This is not the preferred way of making an object but 
//I am doing this just because I want to show you that this is one of the way before 
// actually even using the preferred one

person['firstname'] = 'Pratik';
// So we have added the first key value pair in our object. 
//person[key] = value;
person['lastname'] = "Deshpande";

var personfirstname = 'firstname'

console.log(person) // will log the entire object. 
console.log(person[personfirstname]) // will log Pratik

