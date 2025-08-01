// Cria o botão
var botao = document.createElement("button");

// Define o texto do botão
botao.innerHTML = "Clique aqui";

// Adiciona um evento ao botão
botao.onclick = function() {
  alert("Botão clicado!");
}

// Adiciona o botão ao corpo da página
document.body.appendChild(botao);