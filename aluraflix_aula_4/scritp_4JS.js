
let listaFilmes = ["https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
"https://upload.wikimedia.org/wikipedia/pt/0/0e/Matrix_reloaded_.jpg", 
"https://images-1.wuaki.tv/system/artworks/35905/original/the-matrix-revolutions-1611391398-width317-quality60.jpeg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs1po8xUs8usHS6WONb09rXyf1T9YGFvfrAZeqMRaa4lFL8gQkAe_5KWJtrMVmwVFZzA&usqp=CAU", 
"https://www.imparcial.com.br//assets/images/galeria/1624418120.jpg",
"https://br.web.img3.acsta.net/pictures/210/240/21024037_20130801203005071.jpg", 
"https://m.media-amazon.com/images/I/81oF6U9jcrL._AC_SL1500_.jpg",
"https://m.media-amazon.com/images/I/A1smtRIAUvL._AC_SL1500_.jpg", 
"https://imagens.publicocdn.com/imagens.aspx/739719?tp=KM",
"https://m.media-amazon.com/images/I/71YuETqnQeL._AC_SY606_.jpg"]

for (let index = 0; index < listaFilmes.length; index++) {
    document.write('<img src=', listaFilmes[index], '>')
}