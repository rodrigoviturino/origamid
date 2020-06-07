// Crie uma função para verificar se um valor é Truthy

function validador(data) {
  return !!data;
}

console.log(validador(""));

// Crie uma função matemática que retorne o perimetro de um quadradro
// Lembrando: perimetro é a soma dos quadro lados ao quadrado
function quadrado(valor) {
  let total = valor * 4;
  return total;
}
quadrado(10);

// Crie uma função retorne o seu nome completo
// ela deve possuir os parametros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// crie uma função que verifica se um numero é par
function verificarnumero(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

// crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JS
// o primeiro parametro é o evento que ocorre e o segundo o Callback
// Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer
addEventListener("scroll", () => {
  console.log("Rodrigo");
});
