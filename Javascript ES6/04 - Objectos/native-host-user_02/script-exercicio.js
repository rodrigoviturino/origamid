// Liste 5 objetos nativos
Object;
Function;
String;
Number;
Array;

// Liste 5 objetos do HOST
HTMLAllCollection;
HTMLDocument;
NodeList;
Document;
HTMLCollection;
Window;
history;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não Existe");
}
