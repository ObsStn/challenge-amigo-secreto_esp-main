// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    listaDeAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
  }
}

function sortearAmigo() {
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function reiniciarJuego() {
  listaDeAmigos = [];
  actualizarLista();
  document.getElementById("resultado").innerHTML = "";
}

function actualizarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos ; i++) {
        document.getElementById("listaAmigos")[0].innerHTML += `<li>${nombre}</li>`;
};
  }