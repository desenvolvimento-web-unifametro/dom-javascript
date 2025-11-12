// pegar valor do input


// 1 Seleciona os elementos que vamos usar

// pegar o botao para colocar um ouvinte
const elementoSelecionado = document.querySelector('.botao-enviar');

// 2 Adiciona um ouvinte (addEventListener) ao formulário para o evento click
elementoSelecionado.addEventListener('click', (event) => {
    // Impede o comportamento padrão de recarregar a pagina
    event.preventDefault();
    console.log('O formulario foi enviado!');

    // seleciona os inputs
    const inputEmail = document.querySelector('.pegar-email');
    // const inputEmail = document.querySelector('.pegar-email').value; // outra forma - legibilidade
    const inputSenha = document.querySelector('.pegar-senha');
    // console.log("inputEmail:", inputEmail); // mostrar as propriedades do inputEmail no console

    // Pega o valor de dentro dos inputs com a propriedade value
    const valorEmail = inputEmail.value; // mostrar exemplo com placeholder
    const valorSenha = inputSenha.value;

    // Mostra os valores no console

    console.log('Email digitado:', valorEmail);
    console.log('Senha digitada:', valorSenha);
});

