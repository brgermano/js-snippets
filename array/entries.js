const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5,
};
// cria um array de arrays, colocando cada chave e valor em um deles
// ex: ["camel", 3]
//console.log(Object.entries(animals))

const animalsMap = new Map(Object.entries(animals));

console.log(animalsMap.size) //quantos animais eu tenho
console.log(animalsMap.has('llama'))
console.log(animalsMap.has('lion'))
console.log(animalsMap.get('camel')) // pega o valor de camel
