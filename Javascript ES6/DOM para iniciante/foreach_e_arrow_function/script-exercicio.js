let paragrafo = document.querySelectorAll("p");

// Mostre todos os paragrafos no console
paragrafo.forEach((item) => {
  console.log(item);
});

// Mostre todos os textos do paragrafo
paragrafo.forEach((item) => {
  console.log(item.innerText);
});
