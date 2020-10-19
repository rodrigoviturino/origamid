import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Titulo Principal">
        texto do children
      </Titulo>
      <Titulo cor="blue" texto="Titulo Principal 2" />
    </div>
  );
};

export default App;
