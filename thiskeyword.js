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

// to solve the above bug in es5 . you can do this by bind as well . in the current scenario, we explicitly tell the context of this while calling it
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

//in es6 , just change the function to a function declaration. it lexically binds it to the context. MOre like
// ES6 arrow functions know what context is it
var customer = {  
   firstName: 'Sheila',
   lastName: 'Rowbattam',
   fullName: function() {
     console.log(this === customer); // => true
      getfullName = _ => {
       // this is window or undefined in strict mode
       console.log(this === customer); // => false // here this is not equal to customer but it is not as it gives false
       return this.firstName + " " + this.lastName;
     }
     return getfullName.call(this);
   }
};



