const promise = new Promise( (resolve, reject) => {
    let condicao = true;
    if(condicao){
        // resolve({ nome: 'Rodrigo', idade: 26})
        setTimeout(() => {
            resolve({ nome: 'Rodrigo', idade: 26})
        },2000);
    } else {
        reject(Error('Tudo errado fiote'))
    }
})

/* Podemos usar dessa forma com varios then */
// const retorno = promise
// .then( (resolucao) => {
//     console.log(resolucao)
//     resolucao.profissao = 'Front-end'
//     // return 'setando propriedade valor da promise';
//     return resolucao;
// })
// .then( (teste2) => {
//     console.log(teste2)
//     return teste2
// })

/* Agora vamos aplicar o Catch */
// .then( (resolucao) => {
//     console.log(resolucao)
// })
// .catch( (rejeitada) => {
//     console.log('CATCH')
//     console.log(rejeitada)
// })

/** Podemos passar o CATCH como segundo ARGUMENTO DO THEN */
// .then( resolucao => {
//     console.log(resolucao)
// }, rejeitada => {
//     console.log(rejeitada)
// })

/** Temos o Finally que é executado sempre que a PROMISSE termina, pode ser RESOLVIDA ou REJEITADA. lembrando que ele nao recebe o valor do then no parametro, mas podemos executar funçao, algo que queremos fazer sempre que finaliza a promise */
// .then( resolucao => {
//     console.log(resolucao)
// }, rejeitada => {
//     console.log(rejeitada)
// }).finally( () => {
//     console.log('Finally chegou!')
// })


/**** AGORA VAMOS PARA PROMISSE.ALL */