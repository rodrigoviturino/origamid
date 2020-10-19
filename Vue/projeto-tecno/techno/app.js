const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
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
