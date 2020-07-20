/**
 * OBJETO
 */
// const frutas = {
//   lista: [],

//   get nova() {
//     return this.lista;
//   },
//   set nova(fruta) {
//     this.lista.push(fruta);
//   },
// };

// frutas.nova = "Goiaba";
// frutas.nova = "Melancia";

// console.log(frutas);

/** CLASSE */

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  // Podemos fazer a esturtura de criação no get, para quando formos alterar algo, usamos o SET
  get element() {
    const ty = this._elementType || "button";
    const buttonElement = document.createElement(ty);
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button("Comprar agora", "blue");
// GET
// blueButton.element;
// // SET
// blueButton.element = "valorNovo";

console.log(blueButton);
