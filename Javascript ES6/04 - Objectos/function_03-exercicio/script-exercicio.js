// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("section p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return (acumulador += item.innerText.length);
  },
  0
);

// console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  let element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? (element.innerHTML = conteudo) : null;
  return element;
}

console.log(criarElemento("div", "ativado", "testtttd345"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

let h1Sempre = criarElemento.bind(null, "h1", "titulo");

let cursoReact = h1Sempre("Curso de react vai ser lançado logo");
let cursoVue = h1Sempre("Bora criar projeto em vue?!");

console.log(cursoReact, cursoVue);
