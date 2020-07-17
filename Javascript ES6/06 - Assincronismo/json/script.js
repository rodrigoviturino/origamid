/**
 *  JSON.stringify -> pega o JSON e converte para STRING
 * JSON.parse -> transforma string com a estrutura de objeto javascript para JSON
 */

fetch(`./dados.json`)
.then(value => value.text())
.then(body => {
    const newJson = JSON.parse(body)
    // console.log(newJson)
})

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 Javascript"
}

localStorage.teste = JSON.stringify(configuracoes)
console.log(JSON.parse( localStorage.teste));

// const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);