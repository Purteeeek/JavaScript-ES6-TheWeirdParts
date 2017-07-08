// random data set of a customers. Basically an array of random customers.
var customers = [{
    id: 13,
    gender: "male",
    firstName: "henrik",
    lastName: "graf",
    age: 43,
    email: "henrik.graf@example.com",
    phone: "0293-1064710",
    picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
    nat: "DE"
},
{
    id: 14,
    gender: "female",
    firstName: "begoña",
    lastName: "santos",
    age: 41,
    email: "begoña.santos@example.com",
    phone: "964-499-852",
    picture: "https://randomuser.me/api/portraits/med/women/74.jpg",
    nat: "ES"
},
{
    id: 15,
    gender: "female",
    firstName: "terra",
    lastName: "roberts",
    age: 23,
    email: "terra.roberts@example.com",
    phone: "(073)-750-5367",
    picture: "https://randomuser.me/api/portraits/women/15.jpg",
    nat: "ES"
},
{
    id: 16,
    gender: "male",
    firstName: "tiemo",
    lastName: "ham",
    age: 21,
    email: "tiemo.ham@example.com",
    phone: "(397)-811-4084",
    picture: "https://randomuser.me/api/portraits/men/10.jpg",
    nat: "NL"
}]

// The way of extracting emails through ES5 using a for loop. 
for (var i = 0 ; i < customers.length ; i++ ) {
console.log(customers[i].email)
}

//So now instead of using ES5 for loop lets shift to map function which is a higher order function in ES5
customers.map(function(customer) {
    console.log(customer.email)
})

// ANd now the magic that ES6 does. lets use map in ES6 with arrow functions . it looks something like this

customer_Email = customers.map(mapEmail = customerdata => customerdata.email)

console.log(customer_Email)

// this helps create a pipeline. you can chain many map functions to one another. But this is the basic that you need to know to shift to es6

// so basically a map function is a function that takes the array and pipes a singular object inside. and what you have to do with the singular object
// has to go inside the map function, which will be another function

// returning an object in es6 using a map function in a single line is shown below

const email_data = customers.map( mapEmailANdAvatar = customerdata => ({email: customerdata.email, avatar: customerdata.picture}))

console.log(email_data)
