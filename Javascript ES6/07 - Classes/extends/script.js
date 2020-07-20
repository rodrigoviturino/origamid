class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }

  acelerar() {
    // Super vai herdar método ou propriedade da Class PAI
    super.acelerar();
    console.log("Acelerando com turbo");
  }

  empinar() {
    console.log("Moto acelerou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, "Alcool", true);
