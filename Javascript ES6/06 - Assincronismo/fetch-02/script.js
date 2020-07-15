/** Como utilizar IMAGEM, com BLOB, pois o retorno do BLOB é uma PARADA EXCROTA  */
// const img = fetch('./avatar.png');

// img.then((value) => {
//     return value.blob()
// })

// .then((body) => {
//     const blobUrl = URL.createObjectURL(body);
//     const imageDom = document.querySelector('img');
//     imageDom.src = blobUrl
// })

/** 
 * .CLONE()
    Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
    * Para usar o clone, é preciso verificar na primeira resposta do FETCH, na propriedade Body BODYUSED se ela está como TRUE
    se estiver TRUE, é porque ja foi usado/transformado o BODY DA RESPOSTA.
*/

// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => {
//   const cloneResponse = response.clone();

//   response.json().then(json => {
//     console.log(json)
//   });

//   cloneResponse.text().then(text => {
//     console.log(text)
//   });
// });

/**
 * .HEADERS
    É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
 */
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  response.headers.forEach(console.log);
});


/**
 * .STATUS E .OK
    Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
 */
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});

/**
 * .URL E .TYPE
    .url retorna o url da requisição. .type retorna o tipo da reposta.
 */
const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites
