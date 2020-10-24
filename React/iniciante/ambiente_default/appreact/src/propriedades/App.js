import React from "react";
  
const App = () => {

    function handleClick(event){
        console.log(event)
    }

    window.addEventListener("scroll", handleClick)

    return (
        // Aqui abaixo ele é um evento sintatico, que pega o evento do react e nao do js puro
        // <button onClick={handleClick}>clique</button>

        // Aqui já faz js puro
        <div style={{height: "300vh"}}>
            <button onClick={(event) => alert(event.target.innerText)}>Compre Guitarra</button>
        </div>
    );
}

export default App;
