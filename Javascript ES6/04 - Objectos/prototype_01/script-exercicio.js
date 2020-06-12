// 01 - Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

// Exercicio 01
function Pessoa(nomeParametro, idadeParametro) {
  this.nome = nomeParametro;
  this.idade = idadeParametro;

  this.andar = () => {
    console.log(this.nome + " andou ");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.elementos = document.querySelectorAll(seletor);

  this.addClass = (classElemento) => {
    this.elementos.forEach((item) => {
      item.classList.add(classElemento);
    });
  };

  this.removeClass = (removeClass) => {
    this.elementos.forEach((item) => {
      item.classList.remove(removeClass);
    });
  };
}

const li = new Dom("li");
