let doc = fetch('./style.css'); // retorna uma Promise

/** Pode fazer desse jeito tbm, ENCADEANDO DENTRO */
// doc.then((value) => {
//     console.log(value.text().then( (body) => {
//         document.querySelector('.conteudo').innerText = body; 
//     }))
// })

/* é mais COMUM ASSIM */
// doc.then( (value) => {
//     // Retornando o valor para usar na proxima THEN()
//     return value.text()
// })

// .then( (body) => {
//     document.querySelector('.conteudo').innerText = body;
// })

/** Transformando a RESPOSTA EM TEXT e aplicando com STYLE.CSS */
// doc.then((value) => {
//     return value.text()
// })
// .then((body) => {
    
//     let style = document.createElement('style');
//     let conteudo = document.querySelector('.conteudo');
    
//     style.innerHTML = body;
//     conteudo.appendChild(style)
// })