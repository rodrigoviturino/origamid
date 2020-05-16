# Array

- pegar ultimo item do array e adicionar em outra variavel

  - Podemos usar com Array-Like tambem que seria HTMLCollection e NodeList
    let lista = frutas[frutas.lenght - 1]

- Como pegar a linguagem do navegador ?
  window.navigator.language // result: pt-br

- Como transformar Array-Like em Array ?
  Array.from(insiraOArrayLike);

# querySelectorAll

- Selecionando itens como href, src e etc. e que começa com tal palavra e tals.
  document.querySelectorAll([href^='#'])
  document.querySelectorAll(img[src^='img/'])
