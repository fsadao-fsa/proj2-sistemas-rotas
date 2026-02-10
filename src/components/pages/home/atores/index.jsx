// import "./style.css"
import { BACKEND_URL } from "../../../../config";

export function Atores() {
    console.log("Backend: " + BACKEND_URL);
    return (
        <div className="content">
            <h1 >ATORES</h1>
            <div>CONTEÚDO</div>
        </div>
    );
}