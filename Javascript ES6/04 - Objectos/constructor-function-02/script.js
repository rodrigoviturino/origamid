// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  };

  this.ativar = (classElement) => {
    this.element().classList.add(classElement);
  };
}

let li = new Dom("li");
let ul = new Dom("ul");

li.ativar("ativar");
ul.ativar("teste");
