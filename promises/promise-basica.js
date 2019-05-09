function RunAfterSomeTime(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

RunAfterSomeTime(3, 'After 3s!!!!')
  .then(idk => console.log(idk))
  .catch(e => console.log(e))

// then pode user quantas vezes quiser serve pra tratar o retorno da promise
// catch é pra tratar o erro em uma promise