// seleciona o elemento que vai ser escutado
const elementoSelecionadoEmail = document.querySelector('.pegar-email');
const elementoSelecionado = document.querySelector('.pegar-senha');

elementoSelecionadoEmail.addEventListener('change', (evento) => {
    evento.preventDefault();

    // pega o valor do input
    const inputEmail = elementoSelecionadoEmail.value;

    console.log('Input email:', inputEmail);
});

elementoSelecionado.addEventListener('input', () => {

    // pega o valor do input
    const inputSenhaDinamico = elementoSelecionado.value;

    console.log('Input senha dinamico:', inputSenhaDinamico);
});