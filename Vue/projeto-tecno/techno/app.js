const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false
  },
  filters: {
    precoBR(valor){
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    },
    tituloUper(titulo){
      return titulo.toUpperCase(titulo);
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((body) => {
          return body.json();
        })
        .then((resposta) => {
          return (this.produtos = resposta);
        });
    },
    fetchProduto(id){
      fetch(`./api/produtos/${id}/dados.json`)
      .then((body) => body.json())
      .then((response) => {
        return this.produto = response
      })
    },
  },
  created() {
    this.fetchProdutos();
  },
});
