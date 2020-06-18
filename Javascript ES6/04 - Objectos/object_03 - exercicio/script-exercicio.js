// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  let data = Object.prototype.toString.call(dado);
  return data;
}
let lista = ["carro", "game", "violao"];
console.log(verificarDado(lista));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumarable: true, // torna enumerável
  },
});
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
Object.getOwnPropertyNames(Array.prototype);
Object.getOwnPropertyDescriptors(String.prototype);
