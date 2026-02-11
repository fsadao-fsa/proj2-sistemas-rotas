import "./style.css";
import { BACKEND_URL } from "../../../../config";
import axios from "axios";
import { useState } from "react";

function atoresHandler(atores) {
    if (!Array.isArray(atores)) {
        return (atores)
    }
    var i = 0;
    var content = atores.map(function (atores) {
        return (
            <div key={i++}>{atores.nome}</div>
        )
    });

    return content;
}

export function Atores() {
    const [atores, setAtores] = useState("Nada a mostrar");

    axios.get(BACKEND_URL + "/atores")
        .then(function (response) {
            setAtores(atoresHandler(response.data));
        })
        .catch(function (error) {

        })
        .finally(function () {

        })

    return (
        <div className="content">
            <h1 >ATORES</h1>
            <div>{atores}</div>
            <p><button onClick={() => setAtores("Cliquei no botão")} >Clique aqui!</button></p>
        </div>
    );
}