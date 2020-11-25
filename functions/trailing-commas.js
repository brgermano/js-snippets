const arr = [
  1,
  2,
  3,
  5,
]

const obj = {
  name: 'br',
  age: 25,
  country: 'br',
}

//colocar virgula no ultimo dado no array ou obj evita que
// alguém q mexa no codigo no futuro esqueça de colocar a virgula

//agora isso é possivel fazer em parametros de funções tbm
function sum (a, b,) {
  return a + b;
}

console.log('funfa: ', sum(5, 4))