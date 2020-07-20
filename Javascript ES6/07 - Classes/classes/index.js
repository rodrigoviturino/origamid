// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const button = document.createElement("button");
//   button.innerText = this.text;
//   button.style.background = this.background;
// };

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;

    return buttonElement;
  }
}

const buttonElem = new Button("Comprar Agora", "azul");

console.log(buttonElem.element());
