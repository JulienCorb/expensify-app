// object destructuring

// const person = {
//   name: 'Uj',
//   age: '23',
//   location: {
//     city: 'Paris',
//     temp: 13
//   }
// };

// const {name: firstName = 'Anonymous' , age} = person

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature}°C in ${city}`);
// }


// const book = {
//   title: "Le bruit et la furreur",
//   author: "William Faulkner",
//   publisher: {
//     name: "Poche"
//   }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

// array descructuring


// const address = ['30 Place Sebastopol', 'Lille', 'France', '59000']

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '2.00€', '2.50€', '2.75€'];

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`);
