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

botao.style.backgroundColor = "blue";
botao.style.color = "white";
botao.style.padding = "10px 20px";
botao.style.fontSize = "16px"; 
botao.style.border = "none";
botao.style.borderRadius = "8px";
botao.style.cursor = "pointer";
botao.style.transition = "all 0.3s ease";