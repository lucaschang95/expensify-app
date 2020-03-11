const person = {
  name: 'lucas',
  age: 23,
  location: {
    city: 'tianjin',
    temp: 20
  }
};

const { name, location } = person;

// console.log(`${name} is ${location.city}`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);