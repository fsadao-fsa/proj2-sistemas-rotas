import "./style.css"

import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../../config";
import { Filmecard } from "../../../filmeCard";

function filmesHandler(filmes) {
    if (!Array.isArray(filmes)) {
        return (filmes)
    }
    var i = 0;
    /*o map funciona com uma função e vai receber cada componente do meu vetor
    atores vai ser uma linha do meu vetor iniciando pelo componente 0, 1 ...
    O map irá rodar para cada linha do meu vetor*/
    var content = filmes.map(function (filmes) {
        return (
            <Filmecard key={i++} />

        )
    });

    return content;
}

export function Filmes() {

    const [filmes, setFilmes] = useState("Nada a mostrar");

    /*useEffect é um cara que vai rodar esta função em sua declação toda vez
    que as variaveis do array mudarem. Por isso que não roda infnito. Executará
    apenas na primeira vez que for montada*/
    useEffect(function () {

        /*Fazendo uma chamada http, no endereço atores, caso a chamada tenha
        sido feito com sucesso entramos no response.data, que e o resposta, caso
        tenha dado errado vai para o erro e termina com finally (sempre será 
        executado. Assim que uma chamada axios funciona)
         */
        axios.get(BACKEND_URL + "/filmes")
            .then(function (response) {
                setFilmes(filmesHandler(response.data));
            })
            .catch(function (error) {
                console.log("Error:" + error);
            })
            .finally(function () {
                console.log("Finally.");
            })

    }, []);

    return (
        <div className="filmes-content">
            <h1 >FILMES</h1>
            <div>{filmes}</div>
        </div>
    );
}