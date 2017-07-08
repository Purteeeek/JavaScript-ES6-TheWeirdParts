const amite = {
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

let first = amite.first
let last = amite.last 
let twitter = amite.links['social']['twitter'];
console.log( first + " " + last + "  tweets at" + twitter)

// So after template literals it looks like this. this is so much better than string concat

console.log(console.log(`${first} ${last}  tweets at ${twitter}`))

// And After destructuring this is how it will look like. This is how you are destructuring an object. Taking a structure and extracting things out of it 

let {first , last } = amite
let { twitter } = amite.links.social
console.log(console.log(`${first} ${last}  tweets at ${twitter}`))