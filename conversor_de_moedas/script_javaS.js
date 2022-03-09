function Converter() {
    var valoTaxa = 5.5
    var valorElemento = document.getElementById("valor")
    var valorReal = valorElemento.value
    var valorDolar = parseFloat(valorReal)
    valorDolar = valorDolar * valoTaxa
    console.log(valorDolar)

    var valorElementoConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Dolar é $" + valorDolar
    valorElementoConvertido.innerHTML = valorConvertido
    var valorTaxa = document.getElementById("taxaDeConversao")
    var mostraTaxa = "A taxa usada foi de " + valoTaxa
    valorTaxa.innerHTML = mostraTaxa


}

// Converter()