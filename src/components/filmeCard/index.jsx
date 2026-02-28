import "./style.css";
//nap preciso dos <></> devido colocar todos dentro de uma <div>
export function Filmecard() {

    return (
        //<>
        <div className="filmecard">
            <h2>FILME</h2>
            <div>Diretor</div>
            <div>Elenco</div>
            <div>Nota</div>
        </div>
        //</>
    );
}