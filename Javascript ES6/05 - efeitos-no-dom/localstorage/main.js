const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

handleStyle = {
  element: btn,
  // nome da função é o value do input
  texto(value) {
    this.element.innerText = `${value}`;
  },
  color(value) {
    this.element.style.color = `${value}`;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = `${value}`;
  },
  height(value) {
    this.element.style.height = `${value}px`;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  border(value) {
    this.element.style.border = `${value}`;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = `${value}px`;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`;
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);

  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);

  properties.forEach((propertie) => {
    // Ativando os métodos para setar no botão os valores que está no painel
    handleStyle[propertie](localStorage[propertie]);
    // selecionando o controler do botão e pegando os valores dos campos, com isso, selecionamos o localStorage para pegar os valores e setar no controler. para ficar com os valores definidor no controle
    controles.elements[propertie].value = localStorage[propertie];
    console.log("teste", localStorage);
    showCss();
  });
}

setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split(";").join(";<span></span>");
}
