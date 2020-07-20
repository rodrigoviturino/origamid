import initCountdown from "./countdown.js";
import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2020 23:59:59 GMT-0300");
const anoNovo = new Countdown("31 December 2020 23:59:59 GMT-0300");

console.log(tempoParaONatal.total);
setInterval(() => {
  console.log(anoNovo.total);
}, 1000);
