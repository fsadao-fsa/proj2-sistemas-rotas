import "./style.css";
//nap preciso dos <></> devido colocar todos dentro de uma <div>
export function Filmecard(props) {
    console.log(props);
    return (
        //<>
        <div className="filmecard">
            <h2>{props.title}</h2>
            <div>{props.diretor}</div>
            <div>{props.cast}</div>
            <div>{props.nota}</div>
        </div>
        //</>
    );
}