export default {
  name: "DolarHoje",
  data(){
    return {
      valorDolar: 0,
    }
  },
  template: `<p>Dolar Hoje é: {{valorDolar}}</p>`,
  methods: {
    puxarDolar(){
      fetch("https://api.exchangeratesapi.io/latest?base=USD\n")
        .then(r => r.json())
        .then((r) => {
          this.valorDolar = r.rates.BRL.toFixed(2)
        })
    },
  },
  created(){
    this.puxarDolar();
  }
}