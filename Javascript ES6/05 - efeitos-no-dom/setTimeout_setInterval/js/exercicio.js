// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarClass() {
//   document.body.classList.toggle("active");
// }

// setInterval(mudarClass, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no resetar).

let iniciar = document.querySelector(".iniciar");
let pausar = document.querySelector(".pausar");
let display = document.querySelector(".display");

let i = 0;
let timer;

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

function iniciarTempo() {
  timer = setInterval(() => {
    display.innerHTML = i++;
  }, 300);

  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

function resetarTempo() {
  timer.innerText = 0;
  i = 0;
}
