// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const botaoPesquisar = document.querySelector("#buscar");

botaoPesquisar.addEventListener('click', () => {
    let cep = document.querySelector('#cep').value;
    let logradouro = document.querySelector('.logradouro');

    let apiCep = `https://viacep.com.br/ws/${cep}/json/`;

    let resultadoCep = fetch(`${apiCep}`);

    resultadoCep.then( (value) => value.text())

    .then((body) => {
        logradouro.innerHTML = body
    })
});





// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoin = fetch(`https://blockchain.info/ticker`);

bitcoin.then( (value) => value.json())

.then( (body) => {
    console.log (body)
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function piadaAleatoria(){
    const btnNext = document.querySelector('#proxima');
    
    btnNext.addEventListener('click', handleClick )
}

function handleClick(event){
    event.preventDefault();
    let fraseDisplay = document.querySelector('#fraseChuckNorris');

    const fraseApi = fetch(`https://api.chucknorris.io/jokes/random`)

    fraseApi.then( value => value.json())
    .then((body) => {
        fraseDisplay.innerHTML = body.value
    })

}

piadaAleatoria()