var numeroSecreto = Math.floor(Math.random() * 10 + 1)
var contador = 3
var recebeTentativas = document.getElementById("tentativas")
recebeTentativas.innerHTML = "Você tem " + contador + " tentativas."

function Chutar() {
    
    var recebeId = document.getElementById("resultado")
    console.log(numeroSecreto);
    var chute = parseInt(document.getElementById("valor").value)
    console.log(chute);
    if (chute >= 0 && chute <=10) {
        if (contador > 0) {
            if (chute == numeroSecreto) {
                recebeId.innerHTML = "Parabéns, Você acertou !!!"
                contador = 0
                recebeTentativas.innerHTML = "Você tem " + contador + " tentativas."
                contador -= 1
            }
            else {
                recebeId.innerHTML = "Você errou, tente novamente !!!"
                contador -= 1
                recebeTentativas.innerHTML = "Você tem " + contador + " tentativas."
            }
            if(contador == 0){
                recebeTentativas.innerHTML = "Você tem " + contador + " tentativas."
                recebeId.innerHTML = ("O número secreto era " + numeroSecreto + "... pressione f5 ou role para baixo para jogar novamente!")
                contador -= 1
            }
        }
        else {
            recebeId.innerHTML = ("O jogo terminou, pressione f5 ou role para baixo para jogar novamente!")
        }
    }
    else {
        recebeId.innerHTML = "Digite um número entre 1 e 10 !!!"
    }
}