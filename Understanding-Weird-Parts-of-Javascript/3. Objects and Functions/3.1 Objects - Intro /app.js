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

console.log(person) ;// will log the entire object. 
console.log(person[personfirstname]) ;// will log Pratik

// The another way to do the same thing is the . operator , which is easy to the eyes

console.log(person.firstname) ; // Pratik
console.log(person.lastname) ; // Deshpande

// . is also an operator. Check MDN. 
// So what the . is doing is it is finding firstname inside person and returning it .
// now lets add more properties to our person

address = new Object();
person.address.street = "12 Main Street"
person.address.city = "Bombay"
person.address.country = "India"

// in the above statements we have created other properties inside the address object of our person object
// and set the values.

console.log(person.address.city); // Bombay
console.log(person["address"]["city"]); // Bombay

// The above are just two different ways of doing the same thing . 
// one with [] operator and the other with . operator.
// dot operator is the preferred one though as it makes the code more readable and easier to debug for a hooman. 
