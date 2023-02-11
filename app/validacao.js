function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute
  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>valor inválido</div>'
  }

  if (numeroForMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `
      <div>valor invalido. Fale um número entre ${menorValor} e ${maiorValor}</div>
    `
  }

  if (numero === numSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou</h2>
      <h3>O número secreto era ${numSecreto}</h3>
      `
  } else if (numero > numSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>    
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>    
    `
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor
}
