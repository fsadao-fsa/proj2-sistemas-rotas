import "./style.css";
//nap preciso dos <></> devido colocar todos dentro de uma <div>
export function Filmecard(props) {
    console.log(props);
    return (
        //<>
        <div className="filmecard">
            <h2 className="filmecard-h2">{props.title}</h2>
            <div className="filmecard-content">
                <div >
                    <div><b>Diretor: </b>{props.diretor}</div>
                    <div><b>Elenco: </b>{props.cast}</div>
                </div>
                <div className="filmecard-nota">{props.nota}</div>
            </div>
        </div>
        //</>
    );
}