// function handleMouse(event){
//     const { x , y } = event;
//     console.log(x, y)
// }
//
// document.addEventListener("click", handleMouse);

// ALTERANDO OBJETO OU ARRAY, SEM MODIFICAR O OBJETO ORIGINAL
const carro = {
    marca: "Ferrari",
    ano: 2020
}

carroCor = {...carro, cor: "verde"}

carro.cor = "Azul"

console.log(carroCor)
console.log(carro)

// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
// .then((response) => response.json())
//     .then((json) => {
//         console.log(json)
//     })

async function apiFetch(url){
    const promise = await fetch(url)
    const json = await promise.json();
    return json;
}

apiFetch("https://viacep.com.br/ws/01001000/json/");