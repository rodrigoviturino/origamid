// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimento = 0;

transacoes.forEach((item) => {
  let numeroLimpo = parseInt(item.valor.replace("R$ ", ""));
  if (item.descricao.includes("Taxa")) {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.includes("Recebimento")) {
    recebimento += numeroLimpo;
  }
});
console.log(taxaTotal);
console.log(recebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
let transportesArray = transportes.split(";");
console.log(transportesArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let arrayHtml = html.split("span").join("a");
console.log(arrayHtml);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log((arrayFrase = frase.slice(-1)));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxa = 0;
transacoes2.forEach((item) => {
  item = item.trimStart(); // limpando os espaços
  item = item.toLowerCase(); // deixando as palavras minusculas
  item = item.slice(0, 4); // filtrando do index 0 até o 4

  if (item === "taxa") {
    console.log(`item ${totalTaxa++}`); // estamos no loop do FOREACH e a cada rodada, ele mostra a palavra encontrada
  }
});

console.log(` Total Palavra encontrada 'TAXA:' ${totalTaxa}`);
