const section = document.querySelector(".animais-lista");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total + mesmo dentro de scroll

// offsetTop e offsetLeft

// Distancia entre o topo do elemento e o topo da pagina
section.offsetTop;
section.offsetLeft;

// Retorna um Objeto com as cordenadas do elemento
section.getBoundingClientRect();

// Podemos verificar o media querie do elemento
const small = window.matchMedia(" (max-width: 600px)");

console.log(small);

if (small.matches) {
  console.log("Usuario Mobile");
} else {
  console.log("Usuario Desktop");
}
