// Verifique a distância da primeira imagem em relação ao topo da página
let img = document.querySelector("img");

let imgTop = img.offsetTop;
// console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function larguraTodasImagens() {
  let imagens = document.querySelectorAll("img");
  let soma = 0;

  imagens.forEach((item) => {
    soma = soma + item.offsetWidth;
  });
  console.log(soma);
}

// window.onload = function () {
//   larguraTodasImagens();
//   console.log("A soma da largura das imagens apos o DOM ser carregado!");
// };

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. ( 48px/48px de acordo com o google)
let links = document.querySelectorAll("a");

links.forEach((link) => {
  let linkWidth = link.offsetWidth;
  let linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Está aprovado!");
  } else {
    console.log(link, "Está reprovado!");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

let browser = window.matchMedia("(max-width: 720px)").matches;
let menu = document.querySelector(".menu");

if (browser) {
  menu.classList.add("menu-mobile");
}
