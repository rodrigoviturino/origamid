const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    carrinhoAtivo: true,
    mensagemAlerta: "Item Adicionado",
    alertaAtivo: false,
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
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.produto.lenght) {
        this.produto.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
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
    clickForaCarrinho(event){
      if(event.target === event.currentTarget){
        this.produto = false;
      }
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      this.alerta(`${nome} foi adicionado.`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho);
      }
    },
    compararEstoque(){

      const items = this.carrinho.filter((item) => {
        console.log(item.id);
        if(item.id === this.produto.id){
          return true;
        }
      })
      this.produto.estoque = this.produto.estoque - items.length;
      console.log("items:", items);
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    router() {
      const hash = document.location.hash;
      if (hash) {
        this.fetchProduto(hash.replace("#", ""));
      }
    },
  },
  // Método Computed é reativo
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
    },
  },
  watch: {
    produto() {
      document.title = this.produto.nome || "Techno";
      let hash = this.produto.id || "";
      history.pushState(null, null, `#${hash}`);

      this.compararEstoque();
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.router();
    this.checarLocalStorage();
  },
});
