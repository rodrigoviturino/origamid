import React from "react";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "Viturino", idade: "26" });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui Faculdade" });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
};

export default App;
