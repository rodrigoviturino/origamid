const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
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
  },
  created() {
    this.fetchProdutos();
  },
});
