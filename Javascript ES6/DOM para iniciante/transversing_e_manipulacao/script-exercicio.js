// Duplique o menu e adicione ele em copy
let menu = document.querySelector(".menu");
let copy = document.querySelector(".copy");

let cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
let faq = document.querySelector(".faq-lista");
let primeiroDT = faq.querySelector("dt");

// Selecione o DD referente ao primeiro DT
let primeiroDD = primeiroDT.nextElementSibling;
console.log(primeiroDD.remove());

// Substitua o conteúdo html de .faq pelo de .animais
let animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
