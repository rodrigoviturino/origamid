let img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

// img.addEventListener("click", callback);

/**
 *  EVENT
 *    - currentTarget = ele é equivalente ao THIS, referencia ao item que foi atribuido o evento
 *    - target = ele mostra exatamente onde foi clicado
 */

let animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget); // This
  console.log(event.target); // onde o clique ocorreu
  console.log(event.type); // tipo de evento
  console.log(event.path);
}

// animaisLista.addEventListener("click", callbackLista);

/*
  THIS
A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. 
e podemos usar métodos e propriedades tranquilo tbm
*/

const animal = document.querySelector("animais-lista");

function call(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", call);

/**
 * KEYBOARD
 * Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
 */

window.addEventListener("keydown");

/*
  FOREACH E EVENTOS
*/

// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', callback);
