const menorValor = 100
const maiorValor = 1000 
const numeroSecreto = gerarValorAleatorio();

function gerarValorAleatorio () {
    return parseInt(Math.random () * maiorValor + 1)
}

console.log('O Número secreto é:' , numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor