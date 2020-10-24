const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: []
  },
  filters: {
    precoBR(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    tituloUper(titulo) {
      return titulo.toUpperCase(titulo);
    },
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
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((body) => body.json())
        .then((response) => {
          return (this.produto = response);
        });
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    fecharModal(event) {
      if (event.target === event.currentTarget) {
        this.produto = false;
      }
    },
    adicionarItem(){
      this.produto.estoque--;
      const {id, nome, preco} = this.produto;
      this.carrinho.push({id, nome, preco})
    },
    removerItem(index){
      this.carrinho.splice(index, 1);
    }
  },
  // Método Computed é reativo
  computed: {
    carrinhoTotal(){
      let total = 0;
      if(this.carrinho.length){
        this.carrinho.forEach( (item) => {
          total += item.preco;
        });
      }
      return total;
    }
  },
  created() {
    this.fetchProdutos();
  },
});
