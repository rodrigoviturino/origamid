import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Teste = () => {
  const ativo = true;

  if (ativo) {
    return <h1>Testando</h1>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
