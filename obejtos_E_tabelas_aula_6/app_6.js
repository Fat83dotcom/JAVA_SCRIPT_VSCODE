let jogador_1 = { nome: 'jogador_1', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
let jogador_2 = { nome: 'jogador_2', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

let jogadores = [jogador_1, jogador_2]

exibeJogadoreNaTela(jogadores)

function calculasPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + (jogador.empates)
    jogador.pontos = pontos
    console.log(pontos)
    return pontos
}

function exibeJogadoreNaTela(jogadores) {
    let elemento = ''
    for (let index = 0; index < jogadores.length; index++) {
        calculasPontos(jogadores[index])
        elemento +=     '<tr><td>' + jogadores[index].nome + '</td>'
        elemento +=     '<td>' + jogadores[index].vitorias + '</td>'
        elemento +=     '<td>' + jogadores[index].empates + '</td>'
        elemento +=     '<td>' + jogadores[index].derrotas + '</td>'
        elemento +=     '<td>' + jogadores[index].pontos + '</td>'
        elemento +=     '<td><button onclick="adicionarVitoria(' + index + ')">Vitória</button></td>'
        elemento +=     '<td><button onClick="adicionarEmpate(' + index + ')">Empate</button></td>'
        elemento +=     '<td><button onClick="adicionarDerrota(' + index + ')">Derrota</button></td>'
        elemento +=     '</tr>'
    }

    let tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = elemento
}

function adicionarVitoria(indice) {
    let jogador = jogadores[indice]
    jogador.vitorias ++
    jogador.pontos = calculasPontos(jogador)
    exibeJogadoreNaTela(jogadores)
}

function adicionarEmpate(indice) {
    let jogador = jogadores[indice]
    jogador.empates ++
    jogador.pontos = calculasPontos(jogador)
    exibeJogadoreNaTela(jogadores)
}

function adicionarDerrota(indice) {
    let jogador = jogadores[indice]
    jogador.derrotas ++
    exibeJogadoreNaTela(jogadores)   
}
