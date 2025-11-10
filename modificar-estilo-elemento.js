/* para isso utilizamos o DOCUMENT que é um objeto nativo do JS 
   que representa a pagina HTML */

// funcoes nativas do JS que possibilitam manipular elementos da pagina HTML


// 3 - Modificar estilizacao de um elemento HTML

// seleciona o elemento
let elementoSelecionadoQuerySelector = document.querySelector(".botao-enviar");

// FORMA - propriedade style
// Estilo Inline - Objeto CSSStyleDeclaration 

// seleciona o elemento
let elementoSelecionado = document.querySelector(".link-cadastro");


// FORMA - propriedade classList: add, remove e toggle
// precisa criar a estilizacao no arquivo css antes

//  Adiciona uma classe

elementoSelecionado.classList.add("classe-nova");
console.log(elementoSelecionado);


// Remove uma classe

elementoSelecionado.classList.remove("link-cadastro");
console.log(elementoSelecionado);


// Adiciona uma classe se nao tiver, remove se tiver

elementoSelecionado.classList.toggle("classe-ativa");
console.log(elementoSelecionado);

elementoSelecionado.addEventListener("click", () => {

   elementoSelecionado.classList.toggle("classe-ativa");
   console.log("Classes do elementoSelecionado:", elementoSelecionado);

});



