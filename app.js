let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");

  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  amigos.push(nomeAmigo);

  inputAmigo.value = "";

  atualizarLista();
}

function atualizarLista() {
  const listaHtml = document.getElementById("listaAmigos");

  let htmlAmigos = "";

  for (let i = 0; i < amigos.length; i++) {
    htmlAmigos += `<li>${amigos[i]}</li>`;
  }

  listaHtml.innerHTML = htmlAmigos;
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para fazer o sorteio!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceSorteado];

  const resultadoElemento = document.getElementById("resultado");

  resultadoElemento.innerHTML = `<p>O Amigo Secreto sorteado é: <strong>${amigoSorteado}</strong>!</p>`;
}
