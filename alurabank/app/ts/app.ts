// const negociacao = new Negociacao(new Date(), 1, 11);
// console.log(negociacao);

const controller = new NegociacaoController();
// document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller))
$('.form').submit(controller.adiciona.bind(controller));