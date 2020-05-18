// Adicione a classe ativo a todos os itens do menu
let menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apensas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
let imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  let possuiAtributo = item.hasAttribute("alt");

  console.log(item, possuiAtributo);
});

// Modifique o href do link externo no menu
let hrefMenu = document.querySelector('a[href^="http"');
hrefMenu.setAttribute("href", "http://rodrigoviturino.com.br");
console.log(hrefMenu);
