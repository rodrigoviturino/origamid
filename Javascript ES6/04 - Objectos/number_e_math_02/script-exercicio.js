// Retorne um número aleatório
// entre 1050 e 2000

let numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
// console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

let max = numeros.split(", ");
let novoMaior = Math.max(...max);
// console.log(novoMaior);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

let total = 0;
function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$ ", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);

  return preco;
  // console.log(preco);
}

// Iterando com o array de numero e vamos utilizar a função para limpar
listaPrecos.forEach((item) => {
  total += limparPreco(item); // executando função
  return total;
});
console.log(
  total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
