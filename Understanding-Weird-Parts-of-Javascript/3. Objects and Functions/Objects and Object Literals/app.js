// var person = new Object() This is what we have seen 

var person = {} // {} are a way of creating objects. it simply means you are creating an object

// {} is called as the Object literal syntax
// you can actually do a lot with this like initialize some stuff

var person1 = {
	firstname : 'Pratik' ,
	lastname : 'Deshpande',
	address : {
		street : '12 Main Street',
		city : 'Bombay',
		country : 'India'
	}
}

console.log(person1) // You will get the object with all those properties

// So we can initialise all the name and value pairs we want just like that.
// This is the preferred way I was talking about. 
