// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nomeParam, sobrenomeParam, idadeParam) {
  this.nome = nomeParam;
  this.sobrenome = sobrenomeParam;
  this.idade = idadeParam;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

let rodrigo = new Pessoa("Rodrigo", "Viturino", 26);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // underfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
