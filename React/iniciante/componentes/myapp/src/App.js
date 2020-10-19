import React from "react";
import Header from "./desafio/Header";
import Home from "./desafio/Home";
import Produtos from "./desafio/Produtos";

const App = () => {
  const { pathname } = window.location;
  let Pagina;

  if (pathname === "/") {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
