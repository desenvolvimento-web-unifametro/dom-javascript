// Criar o elemento FAKE (ainda nao existe na pagina HTML, só na memoria)

// Seleciona o elemento

let elementoSelecionado = document.querySelector(".box-login");
console.log(elementoSelecionado);

// Cria o elemento FAKE - h1

let elementoFake = document.createElement("h1");
console.log(elementoFake); 

// Coloca conteudo no elemento 

elementoFake.textContent = "Eu sou um h1 fake por enquanto";
console.log(elementoFake);


// Cria o elemento FAKE - button

let elementoFake = document.createElement("button");
console.log(elementoFake); 

// Coloca conteudo no elemento 
elementoFake.textContent = "Botao FAKE";
console.log(elementoFake);


// appendChild - Insere o elemento dentro da pagina html

// Insere o elemento fake dentro do elemento selecionado
elementoSelecionado.appendChild(elementoFake);
console.log(elementoSelecionado);

// Insere o elemento fake dentro do body da pagina html
document.body.appendChild(elementoFake);
console.log(document.body);


// remove() - Deleta um dentro de dentro da pagina html
elementoSelecionado.remove();



