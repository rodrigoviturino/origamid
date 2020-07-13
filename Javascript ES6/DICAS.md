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

# Element e HTMLElement - Read Only - a maioria delas são Read Only

Isso significa que não podemos modificar com setAttribute

# Callback

É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

# Transversing

- Como navegar pelo DOM, utilizando suas propriedades e métodos
- Geralmente estamos atrás de um elemento e não de qualquer node em si.
