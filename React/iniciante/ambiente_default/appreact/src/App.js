import React from "react";

const Titulo = ({cor, texto, children}) => {
    return (
        <h1 style={{color: cor}}>
            {texto}, {children}
        </h1>
        );
};

const App = () => {

    return (
        <div>
        <Titulo  cor="blue" texto="Titulo Principal"/>
        <Titulo  cor="green" texto="Titulo Principal"/>
        </div>
        
    );
}

export default App;