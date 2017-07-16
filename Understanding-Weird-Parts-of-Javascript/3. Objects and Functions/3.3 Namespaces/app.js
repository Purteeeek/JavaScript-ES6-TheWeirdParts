// What are NameSpaces?
// Namespaces are present in other languages which kind of provide a container
// to avoid name clashes for certain variables or anything in a big ptoject.
// In javascript we dont have namespaces but we can always fake one with the help of an object.

var greeting = "Hello" ;
var greeting = "Hola" ;
console.log(name) // logs Hola
// so now imagine a scenario where we have two things .
// in this case we have a greeting which is in English and other in Spanish.
// in our code we are going to need both but Hola is overriding Hello.
// obviously later on these two values will be coming from different parts of our code and we 
// wouldnt set it.
// but I am talking about a scenario where you get two values of same name.

// well objects do our job
