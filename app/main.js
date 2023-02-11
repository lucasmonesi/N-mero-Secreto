const menorValor = 10
const maiorValor = 1000
const numSecreto = gerarNumero()

function gerarNumero() {
  return parseInt(Math.random() * maiorValor)
}

console.log('Número Secreto:' + numSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
