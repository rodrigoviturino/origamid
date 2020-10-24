import React from 'react';

const App = () => {
  const ativo = true;

  function mostrarNome(nome){
    return nome + " Viturino";
  }

  const carro = {
    marca: "Ford",
    rodas: '4'
  }

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  }

  return (
      <div>
        <p className={ativo ? "ativado" : "desativado"}>Hello World!</p>
        <p>{mostrarNome("Rodrigo")}</p>
        <p style={estiloP}>{carro.marca}</p>
      </div>
  );
}

export default App;
