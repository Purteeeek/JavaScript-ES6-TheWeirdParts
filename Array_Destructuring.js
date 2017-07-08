function getCustomerAndOrders() {
  // some api calls here
  const customer = {
    first: 'Amit',
    last: 'Erandole',
    links: {
      social: {
        twitter: 'https://twitter.com/amit_tushar',
        facebook: 'https://facebook.com/amit.erandole',
      },
      web: {
        blog: 'https://medium.com/@amit_tushar'
      }
    }
  };
  
  const orders = [
    {name: 'Freakonomics', price: 30, category: 'books'},
    {name: 'Handmaid\'s tale', price: 435, category: 'books'},
    {name: 'iPhone', price: 649, category: 'electronics'}
  ]
  
  return [customer, orders]
}

const data = getCustomerAndOrders()

console.log(data)

// to seperate into customer and order in es5 
console.log(data[0])
console.log(data[1])

