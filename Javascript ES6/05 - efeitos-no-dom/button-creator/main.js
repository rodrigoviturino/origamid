const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

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
    height(value){
        this.element.style.height = `${value}px`;
    },
    widht(value){
        this.element.style.widht = `${value}px`;
    },
    border(value){
        this.element.style.border = `${value}`;
    },
    borderRadius(value){
        this.element.style.borderRadius = `${value}px`;
    },
    fontFamily(value){
        this.element.style.fontFamily = `${value}px`;
    },
    fontSize(value){
        this.element.style.fontSize = `${value}rem`;
    },
}


function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);

    showCss();
}

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';<span></span>');
}