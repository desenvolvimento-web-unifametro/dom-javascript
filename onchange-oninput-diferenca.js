// seleciona o elemento que vai ser escutado
const elementoSelecionadoEmail = document.querySelector('.pegar-email');
const elementoSelecionadoSenha = document.querySelector('.pegar-senha');

elementoSelecionadoEmail.addEventListener('change', (evento) => {
    evento.preventDefault();

    // pega o valor do input
    const valorDoInputEmail = elementoSelecionadoEmail.value;

    console.log('Input email:', valorDoInputEmail);
});

elementoSelecionadoSenha.addEventListener('input', () => {

    // pega o valor do input
    const valorInputSenhaDinamico = elementoSelecionadoSenha.value;

    console.log('Input senha dinamico:', valorInputSenhaDinamico);
});