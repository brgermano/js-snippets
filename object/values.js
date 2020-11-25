const animals = {
  camel: 3,
  llma: 2,
  alpaca: 5,
};

console.log(Object.values(animals)); //retorna valores
console.log('Total of animals: ', Object.values(animals).reduce((a, b) => a + b));