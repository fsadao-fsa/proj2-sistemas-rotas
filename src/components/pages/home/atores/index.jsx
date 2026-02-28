import "./style.css";
import { BACKEND_URL } from "../../../../config";
import axios from "axios";
import { useState, useEffect } from "react";

function atoresHandler(atores) {
    if (!Array.isArray(atores)) {
        return (atores)
    }
    var i = 0;
    /*o map funciona com uma função e vai receber cada componente do meu vetor
    atores vai ser uma linha do meu vetor iniciando pelo componente 0, 1 ...
    O map irá rodar para cada linha do meu vetor*/
    var content = atores.map(function (atores) {
        return (
            <div className="atores-content" key={i++}>{i + 1} - {atores.nome}</div>
        )
    });

    return content;
}

export function Atores() {
    const [atores, setAtores] = useState("Nada a mostrar");

    /*useEffect é um cara que vai rodar esta função em sua declação toda vez
    que as variaveis do array mudarem. Por isso que não roda infnito. Executará
    apenas na primeira vez que for montada*/
    useEffect(function () {

        /*Fazendo uma chamada http, no endereço atores, caso a chamada tenha
        sido feito com sucesso entramos no response.data, que e o resposta, caso
        tenha dado errado vai para o erro e termina com finally (sempre será 
        executado. Assim que uma chamada axios funciona)
         */
        axios.get(BACKEND_URL + "/atores")
            .then(function (response) {
                setAtores(atoresHandler(response.data));
            })
            .catch(function (error) {
                console.log("Error:" + error);
            })
            .finally(function () {
            })

    }, []);


    return (
        <div className="content">
            <h1 >ATORES</h1>
            <div>{atores}</div>
            <p><button onClick={() => setAtores("Cliquei no botão")} >Clique aqui!</button></p>
        </div>
    );
}