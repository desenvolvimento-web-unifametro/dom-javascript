// manipular elementos da página HTML

/* para isso utilizamos o DOCUMENT que é um objeto nativo do JS 
   que representa a pagina HTML */

// funcoes nativas do JS que possibilitam manipular elementos da pagina HTML


// 2 - Mudar o conteudo de um elemento HTML innerText ou textContent

// textContent ou innerText
// apenas o texto

let elementoSelecionadoConta = document.querySelector(".link-cadastro"); 

elementoSelecionadoConta.textContent = "mudei o textim, tu viu?"; 

// innerHTML 
// HTML completo
// Seguranca - Cuidado com insercao de XSS

let elementoSelecionadoCadastro = document.querySelector(".sem-conta");

elementoSelecionadoCadastro.innerHTML = "<h1>Eu mudei foi tudo!</h1>";
// elementoSelecionadoCadastro.innerHTML = "<ol><li>Cafe</li><li>Bolo</li><li>Tapioca</li></ol>";

