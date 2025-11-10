// 1 - selecionar o elemento

// pelo ID

let elementoSelecionadoPeloId = document.getElementById("box-login");
console.log("elemento selecionado", elementoSelecionadoPeloId);

// pela CLASS

let elementosSelecionadosPelaClasse = document.getElementsByClassName("caixa-dos-dados");
console.log("elemento selecionado", elementosSelecionadosPelaClasse);


// Seleciona pelo: ID, CLASS ou TAG

// querySelector x querySelectorAll

let elementoSelecionadoQuerySelector = document.querySelector(".caixa-dos-dados");
console.log("elemento selecionado", elementoSelecionadoQuerySelector);

let elementoSelecionadoQuerySelectorAll = document.querySelectorAll(".caixa-dos-dados");
console.log("elemento selecionado", elementoSelecionadoQuerySelectorAll);


