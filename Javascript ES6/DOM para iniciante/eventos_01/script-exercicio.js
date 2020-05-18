// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
let links = document.querySelectorAll("a[href^='#'");

function handleLink(event) {
  event.preventDefault();
  links.forEach((item) => {
    item.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

let body = document.querySelectorAll("body *");

body.forEach((elemento) => {
  function handleElemento(event) {
    console.log(event.currentTarget);
  }

  elemento.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

body.forEach((elemento) => {
  function handleElemento(event) {
    // console.log(event.currentTarget.remove());
  }

  elemento.addEventListener("click", handleElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function teclaClicada(event) {
  console.log(event.key);
  if (event.key == "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", teclaClicada);
