/**
 * OBJECT
  Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
 */
const carro = {
  marca: "Ford",
  ano: 2018,
};

const pessoa = new Object({
  nome: "André",
  idade: 28,
});

/**
 * MÉTODOS DE OBJECT
  Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
 */
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro);
honda.init("Honda").acelerar();

/**
 * OBJECT.ASSIGN()
  Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
 */

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

/**
 * OBJECT.DEFINEPROPERTIES()
  Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
 */
const moto = {};
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

/*** Existe também o Object.defineProperty, para uma propriedade única. */
