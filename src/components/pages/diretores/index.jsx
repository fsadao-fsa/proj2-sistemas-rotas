import "./style.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../config";

function diretoresHandler(diretores) {
    if (!Array.isArray(diretores)) {
        return (diretores)
    }
    var i = 0;
    /*o map funciona com uma função e vai receber cada componente do meu vetor
    atores vai ser uma linha do meu vetor iniciando pelo componente 0, 1 ...
    O map irá rodar para cada linha do meu vetor*/
    var content = diretores.map(function (diretores) {
        return (
            <div className="diretores-content" key={i++}>{i + 1} - {diretores.nome}</div>
        )
    });

    return content;
}


export function Diretores() {

    const [diretores, setDiretores] = useState("Nada a mostrar");

    /*useEffect é um cara que vai rodar esta função em sua declação toda vez
    que as variaveis do array mudarem. Por isso que não roda infnito. Executará
    apenas na primeira vez que for montada*/
    useEffect(function () {

        /*Fazendo uma chamada http, no endereço atores, caso a chamada tenha
        sido feito com sucesso entramos no response.data, que e o resposta, caso
        tenha dado errado vai para o erro e termina com finally (sempre será 
        executado. Assim que uma chamada axios funciona)
         */
        axios.get(BACKEND_URL + "/diretores")
            .then(function (response) {
                setDiretores(diretoresHandler(response.data));
            })
            .catch(function (error) {
                console.log("Error:" + error);
            })
            .finally(function () {
            })

    }, []);

    return (
        <div className="content">
            <h1 >DIRETORES</h1>
            <div>{diretores}</div>
        </div>
    );
}