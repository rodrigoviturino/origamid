import React from 'react';

const App = () => {

    const livros = [
        {nome: "Friends", ano: 1994},
        {nome: "Clash Royale", ano: 1995},
        {nome: "Mega Mente", ano: 1996},
        {nome: "Robocop", ano: 1997},
    ];

    return (
        <ul>
            {livros.filter((livro) => livro.ano <= 1995 ).map(({nome, ano}) => (
                <li key={nome}>{nome} - {ano}</li>
            ))}
        </ul>
    );
};


export default App;


