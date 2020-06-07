/**
 * TRANSVERSING *
  Como navegar pelo DOM, utilizando suas propriedades e métodos.
 */

const lista = document.querySelector(".animais-lista");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[lista.children.length - 1]; // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho

/**
 * ELEMENT VS NODE
   Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
 */

const lista = document.querySelector(".animais-lista");

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

/* Geralmente estamos atrás de um elemento e não de qualquer node em si. */

/* 
  * MANIPULANDO ELEMENTOS 
  - É possível mover elementos no dom com métodos de Node.
*/

const lista = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista); // move lista para o final de contato
/* Lembrando: os itens a serem manipulados no parametro do inserBefore, o da direita precisa ser filho do pai que esta aplicando o método */
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista

/*
  * NOVOS ELEMENTOS
  - Podemos criar novos elementos com o método createElement()
 */
const animais = document.querySelector(".animais");

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

/*
  * CLONAR ELEMENTOS
  - Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
  **** Vale lembrar, que quando fazemos document.querySelector estamos só SELECIONANDO e qualquer alteração nessa selação do elemento, vai modificar 
  ex:
  const titulo = document.querySelector('h1');
  const titulo2 = document.querySelector('h1');
  const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

  Agora para termos o mesmo elemento e para modificar sem afetar o outro, precisa ser feito o CLONE
*/

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector(".contato");
contato.appendChild(cloneTitulo);

/** (true) sinaliza para incluir os filhos. (false) só clona a estrutura que o-envolve */
