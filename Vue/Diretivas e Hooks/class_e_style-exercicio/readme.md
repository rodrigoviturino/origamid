<!-- Crie um botão que troque a orientação da lista, ou seja,
ao invés de 4 colunas, uma única coluna com 4 linhas.

O botão será responsável por trocar para lista e também
responsável por reverter esse processo.
Utilize adição/remoção de classes para atingir este efeito.

A classe column já está criada, basta utilizar ela.
-->

<ul>
  <li>Sobre</li>
  <li>Produtos</li>
  <li>Serviços</li>
  <li>Contato</li>
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    font-family: monospace;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .column {
    flex-direction: column;
  }
  li {
    padding: 20px;
    background: #84e;
    color: white;
    border-radius: 4px;
    margin: 10px;
    flex: 1;
    text-align: center;
  }
</style>

<!-- Crie um gerador de cores, toda vez que o usuário clicar
em cima da lista, os itens trocam de cor.

Gerador de cor:
const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
-->
