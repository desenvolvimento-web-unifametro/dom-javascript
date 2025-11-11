
// function declaration - sem parametro

function nomeDaFuncao() {
    return console.log(`Meu nome é:`); // Meu nome é:
}

// function declaration - com parametro

// function nomeDaFuncao(parametro) {
//     return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
// }


// function expression - com parametro

// let nomeDaPessoa = 'Fulano';
// const variavelDaFuncao = function (parametro) {
//   return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
// }

// console.log(variavelDaFuncao(nomeDaPessoa));


// arrow function - com parametro

// let nomeDaPessoa = 'Fulano';
// const variavelDaFuncao = (parametro) => {
//   return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
// }

// console.log(variavelDaFuncao(nomeDaPessoa));


// addEventListener - arquivo externo

// const elementoSelecionado = document.querySelector(".botao-enviar");

// elementoSelecionado.addEventListener("click", () => {
//     console.log(`Meu nome é:`);
// });


// mudar a cor do background - addEventListener

// selecionar o elemento
// const elementoSelecionado = document.querySelector(".botao-enviar");

// sintaxe basica - cria a funcao fora do addEventListener

// elementoSelecionado.addEventListener("tipodoevento", nomeDaFuncao);

// function nomeDaFuncao() {
//     return "clicou no botao";   
// }

// sintaxe com a funcao criada dentro do EventListener

// elementoSelecionado.addEventListener("click", () => {

//     document.body.style.backgroundColor = "#6e1f1f";
    
// });

