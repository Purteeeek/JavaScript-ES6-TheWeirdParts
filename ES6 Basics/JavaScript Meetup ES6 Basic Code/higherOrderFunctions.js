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

// sorting and filtering data in ES6. both of them are HOF's on an array which take in a function as a parameter that works on single data

//This is also how you write a reduce in ES6. More reduce examples examples will be added later in another file

const customerSorted = customers
                        .sort((customerdataA , customerdataB) => customerdataA.age > customerdataB.age )
                        .filter( customer => customer.nat === 'ES')
                        .reduce( (acc, cust) => acc + cust.age , 0)

console.log(customerSorted)
