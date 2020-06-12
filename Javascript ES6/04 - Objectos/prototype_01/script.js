function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  const andar = () => {
    return console.log(this.nome + " andou muito.");
  };
}

let rodrigo = new Pessoa("Rodrigo", 26);
