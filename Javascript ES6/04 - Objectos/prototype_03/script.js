function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  const andar = () => {
    return console.log(this.nome + " andou muito.");
  };
}

let rodrigo = new Pessoa("Rodrigo", 26);

let nome = new String();

// Herança de Protótipo
/*
O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
*/
Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

/*** AULA 02 */

// Construtores Nativos
/*
    Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
  */
const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

/**
 É possível acessar a função do protótipo
 É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array. 
 */
const lista = document.querySelectorAll("li");
// Existe o método Array.from()

/*
  Método do Objeto vs Protótipo
  Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
*/
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

/* 
  Entenda o Que está Sendo Retornado
  Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
*/
const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
