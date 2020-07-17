/**
 * URL E METHOD
    Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.
 */

const url = 'https://jsonplaceholder.typicode.com/posts';
// const options = {
//   method: 'POST', // GET ( Default), PUT, DELETE
//   body: '{ "aula": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   }
// }

// HEADERS
const options = {
  method: 'HEAD',
}

fetch(url, options)
.then(response => response.headers.forEach(console.log))
.then(json => {
  console.log(json);
});


/**
 * CORS
Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.

const url = 'https://cors-anywhere.he
 */

// const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
// const div = document.createElement('div');

// fetch(url)
// .then(r => r.text())
// .then(r => {
//   div.innerHTML = r;
//   console.log(div);
// });
