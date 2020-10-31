  Crie um componente com um campo de input e um botão para enviar o valor.
  Nesse campo de input será possível escrever o simbolo de empresas americanas

  simbolos ex:
  aapl -> Apple
  goog -> Google
  msft -> Microsoft
  amzn -> Amazon
  fb -> Facebook

  Ao clicar no botão, faça um fetch com a API:
  https://api.origamid.dev/stock/${SIMBOLO}/quote

  O resultado do fetch deverá ser mostrado em um componente filho do formulário.
  Envia as informações utilizando prop
 
  Mostre todas as informações do fetch utilizando um loop.

