var monsoonSale = {
  name: "Monsoon Sale",
  discount: 10,
  applyDiscount: function (products) {
    products.map( function (product) {
      var discountedPrice = product.price - (product.price * (this.discount/100))
      console.log("It's " + this.name + "! So " + product.name + " now costs " + discountedPrice)
    })
  }
}

var products = [ 
  { name: "Top grade Umbrella", price: 340 }, 
  { name: "Simple Raincoat", price: 440 } 
]


monsoonSale.applyDiscount(products)

// THE ABOVE CODE CONTAINS A BUG AS THE PRICES WILL BE nan As WE CREATE A CLOSURE. WHEN WE PASS A FUNCTION INSIDE A HOF WE CREATE A CLOSURE.
//THATS WHERE THIS COMES INTO PLACE
// SO IN SUCH SCENARIO USE AN ARROW FUNCTION OR BIND IT PROPERLY

//ARROWFUNCTIONS WILL FIX THESE. 
var monsoonSale = {
  name: "Monsoon Sale",
  discount: 10,
  applyDiscount: function (products) {
    products.map( (product) => {
      var discountedPrice = product.price - (product.price * (this.discount/100))
      console.log("It's " + this.name + "! So " + product.name + " now costs " + discountedPrice)
    })
  }
}

var products = [ 
  { name: "Top grade Umbrella", price: 340 }, 
  { name: "Simple Raincoat", price: 440 } 
]


monsoonSale.applyDiscount(products)



//THE ES5 Fix would look like. Binding the context of this is how it works
var monsoonSale = {
  name: "Monsoon Sale",
  discount: 10,
  applyDiscount: function (products) {
    products.map( function (product) {
      var discountedPrice = product.price - (product.price * (this.discount/100))
      console.log("It's " + this.name + "! So " + product.name + " now costs " + discountedPrice)
    }.bind(this))
  }
}

var products = [ 
  { name: "Top grade Umbrella", price: 340 }, 
  { name: "Simple Raincoat", price: 440 } 
]


monsoonSale.applyDiscount(products)