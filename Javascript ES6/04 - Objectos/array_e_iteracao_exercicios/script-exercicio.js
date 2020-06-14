// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let cursos = document.querySelectorAll(".curso");

let arrayCursos = Array.from(cursos);

arrayCursos = arrayCursos.map((curso) => {
  let titulo = curso.querySelector("h1").innerText;
  let descricao = curso.querySelector("p").innerText;
  let aula = curso.querySelector(".aulas").innerText;
  let carga = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aula,
    carga,
  };
});

console.log(arrayCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((numero) => {
  if (numero > 100) {
    return numero;
  }
});
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const baixo = instrumentos.some((item) => {
  return item == "Baixo";
});
console.log(baixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
  {
    item: "Celular",
    preco: "R$ 5,50",
  },
];

let total = 0;

const totalProduto = compras.reduce((acc, produto) => {
  const prod = +produto.preco.replace("R$ ", "").replace(",", ".");

  return acc + prod;
}, 0);

console.log(totalProduto);
