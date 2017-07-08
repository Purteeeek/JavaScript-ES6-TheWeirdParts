var customer = {  
   firstName: 'Sheila',
   lastName: 'Rowbattam',
   fullName: function() {
     console.log(this === customer); // => true
     function getfullName() {
       // this is window or undefined in strict mode
       console.log(this === customer); // => false // here this is not equal to customer but it is not as it gives false
       return this.firstName + " " + this.lastName;
     }
     return getfullName();
   }
};


console.log(customer.fullName())

// when you run getfullName() you will get undefined undefined. because you're trying to access info 
// which is outside. and you're working with closures. which is why it doesnt work. Most common bug

// to solve the above bug in es5 . you can do this by bind as well 
var customer = {  
   firstName: 'Sheila',
   lastName: 'Rowbattam',
   fullName: function() {
     console.log(this === customer); // => true
     function getfullName() {
       // this is window or undefined in strict mode
       console.log(this === customer); // => false // here this is not equal to customer but it is not as it gives false
       return this.firstName + " " + this.lastName;
     }
     return getfullName.call(this);
   }
};

