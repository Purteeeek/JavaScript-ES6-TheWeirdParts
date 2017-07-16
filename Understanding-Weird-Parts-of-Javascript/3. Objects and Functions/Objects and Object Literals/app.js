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

function greetMe(person) {
	console.log("Hey There " + person.firstname)
}

function greetMe(person1) // Hey There Pratik 
// you passed object as a parameter.

// but guess whats better you can create objects on the fly like we make our variables while 

greetMe({
	firstname: 'Abhishek',
	lastname: 'Jain'
})

// here we called the function greetMe and created an object on the fly while calling the function
// might look weird at first but yeah it is possible in Javascript

// YOu can also change a property or add a new property on the fly with dot operator and our object 
//literal

person1.contact = {
	mobile : '76786e78638768',
	landline : '2121323213'
}


console.log(person1)
//so you can mix and match and stuff still works. because JS engine works the same way no matter 
// what syntax youre using in this way.

// We use object literals because theyre powerful and make the code easy to read
