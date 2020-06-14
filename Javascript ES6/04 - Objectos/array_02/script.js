/**
 * [].SPLICE()
  [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
  Retorno é os itens removidos. 
 */

const carros = ["Ford", "Fiat", "VW", "Honda"];
carros.splice(1, 0, "Kia", "Mustang"); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

/** OBS:
 * Primeiro Parametro: à Partir de qual item ? não conta o index, e sim o item 1,2...
 * Segundo Parametro: deseja remover quantos itens.
 * Terceiro Parametro: inserir os itens para adicionar
 */

/** ----------------------------------------------
  * [].COPYWITHIN()
    [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
  */
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

/** ----------------------------------------------
  [].FILL()
  [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
*/
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

/** ----------------------------------------------
  MÉTODOS DE ACESSO [].CONCAT()
  Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
*/
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

/**
 * [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
  [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
 */
const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

/**
 * [].JOIN()
  [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
 */
const linguagens = ["html", "css", "js", "php", "python"];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

/**
 * [].SLICE()
  [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
 */
const linguagens = ["html", "css", "js", "php", "python"];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
