/**
 * FUNCTION.APPLY()
  O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
 */
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

/**
 * APPLY VS CALL
  A única diferença é a array como segundo argumento.
 */
const li = document.querySelectorAll("li");

function itemPossuiAtivo(item) {
  return item.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

/**
 * FUNCTION.BIND()
  Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.
 */
const li = document.querySelectorAll("li");

const filtrarLi = Array.prototype.filter.bind(li, function (item) {
  return item.classList.contains("ativo");
});

filtrarLi();

/**
 * ARGUMENTOS E BIND
  Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
 */
const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: "Honda",
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10

/**
 * ARGUMENTOS COMUNS
  Podemos passar argumentos padrões para uma função e retornar uma nova função.
 */
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6
