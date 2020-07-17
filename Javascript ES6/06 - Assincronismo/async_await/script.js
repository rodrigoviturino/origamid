/**
 * ASYNC / AWAIT
A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.
 
*** ATENÇÃO: PARA USAR O AWAIT é preciso ser uma PROMISE na frente dele
*/


// async function puxarDados(){
//  const api = await fetch('./dados.json')
//  const text = await api.json()

//  document.body.innerHTML = text.titulo
// }

// puxarDados();
  
  /**
   * THEN / ASYNC
A diferença é uma sintaxe mais limpa.
   */

//   function iniciarFetch() {
//     fetch('./dados.json')
//     .then(dadosResponse => dadosResponse.json())
//     .then(dadosJSON => {
//       document.body.innerText = dadosJSON.titulo;
//     })
//   }
//   iniciarFetch();
  
//   async function iniciarAsync() {
//     const dadosResponse = await fetch('./dados.json');
//     const dadosJSON = await dadosResponse.json();
//     document.body.innerText = dadosJSON.titulo;
//   }
//   iniciarAsync();
  


  /**
   * TRY / CATCH
Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
   */

// async function puxarDados(){
//     try {
//         const api = await fetch('./dados.json')
//         const text = await api.json()
//         document.bodyy.innerHTML = text.titulo
//     } 
//     catch(erro){
//         console.log(erro)
//     }
// }

// puxarDados();
    

//   async function puxarDados() {
//     try {
//       const dadosResponse = await fetch('./dados.json');
//       const dadosJSON = await dadosResponse.json();
//       document.body.innerText = dadosJSON.titulo;
//     }
//     catch(erro) {
//       console.log(erro);
//     }
//   }
//   puxarDados();



  /**
   * INICIAR FETCH AO MESMO TEMPO ( USANDO UM MACETE COM EXPRESSÃO)
    Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
   * 
   */
async function iniciarAsync(){
    const promiseDados = fetch('./dados.json');
    const apiTwo = await fetch('./usuario.json');

    // const responseDados = await promiseDados;  
    // podemos usar essa EXPRESSÂO DO AWAIT  que ela executa primeiro e já retorna como RESPONSE
    const clientesJSON = await (await promiseDados).json()
    console.log(clientesJSON)
}

iniciarAsync();

  
  /**
   * PROMISE
O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
*** ATENÇÃO: PARA USAR O AWAIT é preciso ser uma PROMISE na frente dele
   */
//   async function asyncSemPromise() {
//     // Console não irá esperar.
//     await setTimeout(() => console.log('Depois de 1s'), 1000);
//     console.log('acabou');
//   }
//   asyncSemPromise();
  
  async function iniciarAsync1() {
    await new Promise(resolve => {
      setTimeout(() => {
          console.log('Depois de 1s');
          resolve()
        }, 1000)
    });
    console.log('Acabou');
  }
  iniciarAsync1();
  