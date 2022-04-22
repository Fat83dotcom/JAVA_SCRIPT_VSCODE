let carta1 = {
    nome: 'Bulbasauro',
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
}

let carta2 = {
    nome: "Sheeha",
    atributos: {
        ataque: 6, 
        defesa: 7,
        magia: 8,
    }
}

let carta3 = {
    nome: "Gudulinho", 
    atributos: {
        ataque: 9, 
        defesa: 8,
        magia: 10
    }
}

let cartas = [carta1, carta2, carta3]

let cartaMaquina
let cartaJogador

function sortearCarta() {
    let cartaSorteadaMaquina = Math.floor(Math.random() * cartas.length)
    cartaMaquina = cartas[cartaSorteadaMaquina]

    do {
        let cartaSortedaJogador = Math.floor(Math.random() * cartas.length)
        cartaJogador = cartas[cartaSortedaJogador]
    } while (cartaMaquina == cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    console.log(cartaMaquina, cartaJogador)
}

function exibirOpcoes() {
    // let opcoes = document.getElementById('opcoes')
    for (let atributo in cartaJogador.atributos) {
        console.log(atributo);
    }
}

exibirOpcoes()
// sortearCarta()