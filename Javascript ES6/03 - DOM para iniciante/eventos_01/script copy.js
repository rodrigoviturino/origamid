/*
  É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
*/

const img = document.querySelector("img");
function callback() {
  console.log("Clicou");
}

img.addEventListener("click", callback); // 🚀
img.addEventListener("click", callback()); // undefined
img.addEventListener("click", function () {
  console.log("Clicou");
});
img.addEventListener("click", () => {
  console.log("Clicou");
});

// O primeiro parâmetro do callback é referente ao evento que ocorreu.
const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);

/** PROPRIEDADES DO EVENT */
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

/** EVENT.PREVENTDEFAULT() */
// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

/** 
 THIS
  - A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
 */

const img = document.querySelector("img");

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callback);

/**
 KEYBOARD
  - Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
 */
function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", callback);

/**
 * FOREACH E EVENTOS
  - O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
 */

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
