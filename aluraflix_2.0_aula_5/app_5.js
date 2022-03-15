let listaDeFilmes = []

function mostrarFilmes() {
    let elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = ''

    for (let index = 0; index < listaDeFilmes.length; index++) {
        let elementoFilmeFavorito = "<img src=" + listaDeFilmes[index] + ">"
        let elementoListaFilmes = document.getElementById("listaFilmes")
        elementoListaFilmes.innerHTML += elementoFilmeFavorito
    }
}
function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.jpeg')) {
        let adicionarFilmeNaLista = listaDeFilmes.push(filmeFavorito)
        mostrarFilmes()
    }
    else {
        console.log('erro.')
    }
    document.getElementById("filme").value = ""
}
