import "./style.css";
import { BsFilePlusFill as PlusIcon } from "react-icons/bs";
import { BsFileMinusFill as MinusIcon } from "react-icons/bs";
import { useState } from "react";

function decreaseCastSize(castSize, setCastSize) {
    if (castSize > 1)
        setCastSize(castSize - 1);

    return
}

function createCastInputs(castSize, setCastSize) {
    var content = [];

    for (var i = 0; i < castSize; i++) {
        content.push(
            (
                //toda tag deve ter um key, para diferencia-la das demais, para evitar
                //que ao recuperar todas as key, ao inves de um key especifica
                //outro detalhe é que a tag <p> deve estar sempre dentro da tag <div> para
                //evitar warnings
                <p className="home-form" key={i}>
                    <input className="home-form" size={40} name="ator" type="text" placeholder="Nome do Ator" />
                    <MinusIcon size={25} className="home-form-icon" onClick={() => decreaseCastSize(castSize, setCastSize)} />
                    <PlusIcon size={25} className="home-form-icon" onClick={() => setCastSize(castSize + 1)} />
                </p>
            )
        );
    }

    return content;

}

//Esta função irá formatar os dados para o formato json 
function formDataToJsonMapper(filme, diretor, atores, nota) {
    let formatedData = {
        nome: filme,
        diretor: { nome: diretor },
        elenco: atores.map(ator => { return { nome: ator } }),
        nome: nota
    };
    return JSON.stringify(formatedData);

}

function formHandle(e) {
    e.preventDefault();
    // nesta linha definimos o alvo que i input nota e seu valor (value)
    //console.log(e.target.nota.value);
    const filme = e.target.filme.value;
    const diretor = e.target.diretor.value;
    const nota = e.target.nota.value;
    //Como ator é um array, temos que trabalhar com posições, neste caso 0 é a primeira~
    //posiçao
    // vamos declara-lo como um array

    //Primeiro converti o e.taraget.ator que é um radiotatlist para um vetor com Array.from()
    // e com o map para cada elemento do vetor estou retornando o elmento.value, i.e, 
    //o valor deste elemento para grava-lo no BD
    const atores = Array.from(e.target.ator).map(ator => ator.value);
    /* console.log(filme);
    console.log(diretor);
    console.log(nota);
    console.log(atores);
 */
    console.log(formDataToJsonMapper(filme, diretor, atores, nota));
    //console.log(e.target.ator[0].value);
    //const filme = e.target.filme.value
}

export function Home() {

    const [castSize, setCastSize] = useState(1);



    return (
        <div className="content">
            <h1>HOME</h1>
            <div className="home-form">
                {/*qdo eu coloco a tag <form> todos os inputs passam a fazer parte 
                deste <form>
                onsubmit é a ação de submeter o formulario. Ao fazer isso vamos chamar uma funçao
                abaixo, a qual estamos passando a variavel e (event), que sempre vai estar presente
                qdo acontece um evento. Para parar atualização utizamos os e.preventDefault() e o
                console para exibir o e e o entendermos   */}
                <form onSubmit={function (e) { formHandle(e) }}>
                    <h3 className="home-form">Inserir novo Filme:</h3>
                    <p className="home-form"><input className="home-form" size={40} name="filme" type="text" placeholder="Nome do Filme" /></p>
                    <p className="home-form"><input className="home-form" size={40} name="diretor" type="text" placeholder="Nome do Diretor" /></p>
                    <p className="home-form"><input className="home-form" size={40} name="nota" type="text" placeholder="Digite a Nota" /></p>

                    <h3 className="home-form">Elenco:</h3>
                    {createCastInputs(castSize, setCastSize)}

                    <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar novo filme" /></p>
                </form>
            </div>
        </div>
    );

}