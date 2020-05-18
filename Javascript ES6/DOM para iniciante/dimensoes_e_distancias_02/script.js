const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste");
menu.classList.remove("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// Modo antigo
menu.className = "adionar novo valor";
menu.className += " pegar valor antigo e juntar com o novo";

/*** ATRIBUTOS */
/** RETORNA UM ARRAY-LIKE */
const animais = document.querySelector(".animais");
console.log(animais.attributes);

// Se for passar item que tenha hifen, exemplo abaixo para resolver
console.log(animais.attributes["data-texto"]);

const imgs = document.querySelector("img");
console.log(imgs.getAttribute("src")); // só passar o nome do atributo

// SETatribute
// Seleciona o atributo e o segundo parametro substitui ou cria se nao tiver
imgs.setAttribute("alt", "adicionando valor");
// setando novo atributo
// imgs.setAttribute("podemos setar qualquer atributo", "adicionando valor");

// Verificando se tem atributo
imgs.hasAttribute("title");
console.log(imgs);
